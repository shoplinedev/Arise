window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/schedular/taskScheduler.js'] = window.SLM['theme-shared/utils/schedular/taskScheduler.js'] || function () {
  const _exports = {};
  const { queueMicrotask } = window['SLM']['theme-shared/utils/schedular/queueMicrotask.js'];
  const { Deadline, isSafari, shouldYield } = window['SLM']['theme-shared/utils/schedular/utils.js'];
  const DEFAULT_MIN_TASK_TIME = 0;

  class TaskScheduler {
    constructor({
      ensureTasksRun = true,
      defaultMinTaskTime = DEFAULT_MIN_TASK_TIME
    } = {}) {
      this.timeHandle = 0;
      this.defaultMinTaskTime = DEFAULT_MIN_TASK_TIME;
      this.ensureTasksRun = ensureTasksRun;
      this.defaultMinTaskTime = defaultMinTaskTime;
      this.taskQuequ = [];

      this.beforeDestory = () => {};

      if (ensureTasksRun) {
        const runTasksImmediately = this.runTasksImmediately.bind(this);

        const onVisibilityChange = () => document.visibilityState === 'hidden' && runTasksImmediately();

        window.addEventListener('visibilitychange', onVisibilityChange, true);
        isSafari && window.addEventListener('beforeunload', runTasksImmediately, true);

        this.beforeDestory = () => {
          window.removeEventListener('visibilitychange', onVisibilityChange, true);
          isSafari && window.removeEventListener('beforeunload', runTasksImmediately, true);
        };
      }
    }

    get hasPendingTasks() {
      return this.taskQuequ.length > 0;
    }

    _addTask(arrayMethod, task, minTaskTime = this.defaultMinTaskTime) {
      const state = {
        time: Date.now(),
        visibilityState: document.visibilityState
      };
      arrayMethod.call(this.taskQuequ, {
        state,
        task,
        minTaskTime
      });

      this._scheduleTasksToRun();
    }

    pushTask(...tasks) {
      this._addTask(Array.prototype.push, ...tasks);
    }

    unshiftTask(...tasks) {
      this._addTask(Array.prototype.unshift, ...tasks);
    }

    _scheduleTasksToRun() {
      if (this.ensureTasksRun && document.visibilityState === 'hidden') {
        queueMicrotask(this._runTasks.bind(this));
      } else if (!this.timeHandle) {
        this.timeHandle = window.setTimeout(() => this._runTasks(new Deadline()));
      }
    }

    _runTasks(deadline = undefined) {
      this.cancelScheduledRun();

      if (!this.isProcessing) {
        this.isProcessing = true;

        const runTasks = () => {
          const run = () => {
            if (this.hasPendingTasks && !shouldYield(deadline, this.taskQuequ[0].minTaskTime)) {
              const {
                task,
                state
              } = this.taskQuequ.shift();
              task(state);
              runTasks();
            } else {
              this.isProcessing = false;

              if (this.hasPendingTasks) {
                this._scheduleTasksToRun();
              }
            }
          };

          if (!deadline) {
            run();
          } else {
            queueMicrotask(run);
          }
        };

        runTasks();
      }
    }

    runTasksImmediately() {
      this._runTasks();
    }

    cancelScheduledRun() {
      window.clearTimeout(this.timeHandle);
      this.timeHandle = null;
    }

    clearPendingTasks() {
      this.taskQuequ = [];
      this.cancelScheduledRun();
    }

    destory() {
      this.beforeDestory();
      this.clearPendingTasks();
    }

  }

  _exports.TaskScheduler = TaskScheduler;
  return _exports;
}();