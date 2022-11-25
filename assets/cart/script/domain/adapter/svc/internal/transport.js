window.SLM = window.SLM || {};

window.SLM['cart/script/domain/adapter/svc/internal/transport.js'] = window.SLM['cart/script/domain/adapter/svc/internal/transport.js'] || function () {
  const _exports = {};

  function catchBizErr(fn) {
    return async function (...args) {
      try {
        return await fn(...args);
      } catch (e) {
        if (Reflect.has(e, 'code') && Reflect.has(e, 'success')) {
          return e;
        }

        throw e;
      }
    };
  }

  const requestMethodsList = ['get', 'post', 'put', 'delete', 'head', 'options', 'patch'];

  function wrapAxios(axiosInstance) {
    const wrapped = catchBizErr(axiosInstance);
    requestMethodsList.forEach(method => {
      wrapped[method] = catchBizErr(axiosInstance[method].bind(axiosInstance));
    });
    return wrapped;
  }

  function newTransport(axiosInstance) {
    if (!axiosInstance) {
      throw new Error('failed to new transport without AxiosInstance');
    }

    return Object.freeze({
      request: wrapAxios(axiosInstance)
    });
  }

  _exports.default = {
    newTransport
  };
  return _exports;
}();