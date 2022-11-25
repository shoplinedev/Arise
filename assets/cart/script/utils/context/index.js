window.SLM = window.SLM || {};

window.SLM['cart/script/utils/context/index.js'] = window.SLM['cart/script/utils/context/index.js'] || function () {
  const _exports = {};
  const { promiseResolvable, resolveAfterDuration, zombiePromise } = window['SLM']['cart/script/utils/promise.js'];
  const time = window['SLM']['cart/script/utils/time.js'].default;
  const constant = window['SLM']['cart/script/utils/context/constant.js'].default;

  const _background = newEmptyCtx();

  const _todo = newEmptyCtx();

  function background() {
    return forkParentCtx(_background);
  }

  function todo() {
    return forkParentCtx(_todo);
  }

  function withValue(parent, valuer, value) {
    return newValueCtx(parent, valuer, value);
  }

  function withCancel(parent) {
    return newCancelCtx(parent);
  }

  function withTimeout(parent, timeout) {
    return newCancelCtx(newTimeoutCtx(parent, timeout));
  }

  function withDeadline(parent, deadline) {
    return newCancelCtx(newDeadlineCtx(parent, deadline));
  }

  _exports.default = {
    background,
    todo,
    withValue,
    withCancel,
    withTimeout,
    withDeadline,
    ...constant
  };

  function newEmptyCtx() {
    return {
      deadline() {
        return null;
      },

      done() {
        return zombiePromise();
      },

      err() {
        return null;
      },

      value(cv) {
        return cv ? cv.defaultGetter() : null;
      }

    };
  }

  function newValueCtx(parent, valuer, value) {
    return {
      deadline() {
        return parent.deadline();
      },

      done() {
        return parent.done();
      },

      err() {
        return parent.err();
      },

      value(cv) {
        if (valuer === cv) {
          return value;
        }

        return parent.value(cv);
      }

    };
  }

  function forkParentCtx(parent) {
    if (!parent) parent = _background;
    return {
      deadline() {
        return parent.deadline();
      },

      done() {
        return parent.done();
      },

      err() {
        return parent.err();
      },

      value(cv) {
        return parent.value(cv);
      }

    };
  }

  function createCancellablePromise() {
    return promiseResolvable();
  }

  function newTimeoutCtx(parent, dur) {
    let error = null;
    const deadline = time.later(dur);
    const timeoutPromise = resolveAfterDuration(dur);
    return {
      deadline() {
        return deadline;
      },

      done() {
        return Promise.race([parent.done().then(() => parent.err()), timeoutPromise.then(() => new Error(constant.errTimeout))]).then(err => {
          error = err;
        });
      },

      err() {
        return error;
      },

      value(cv) {
        return parent.value(cv);
      }

    };
  }

  function newDeadlineCtx(parent, deadline) {
    let error = null;
    const deadlinePromise = resolveAfterDuration(deadline.duration(time.now()));
    return {
      deadline() {
        return deadline;
      },

      done() {
        return Promise.race([parent.done().then(() => parent.err()), deadlinePromise.then(() => {
          return new Error(constant.errDeadline);
        })]).then(err => {
          error = err;
        });
      },

      err() {
        return error;
      },

      value(cv) {
        return parent.value(cv);
      }

    };
  }

  function newCancelCtx(parent) {
    const [cancelPromise, cancelFunc] = createCancellablePromise();
    let error = null;
    return [{
      deadline() {
        return parent.deadline();
      },

      done() {
        return Promise.race([parent.done().then(() => {
          return parent.err();
        }), cancelPromise.then(() => {
          return new Error(constant.errCanceled);
        })]).then(err => {
          error = err;
        });
      },

      err() {
        return error;
      },

      value(cv) {
        return parent.value(cv);
      }

    }, cancelFunc];
  }

  return _exports;
}();