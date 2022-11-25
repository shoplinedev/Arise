window.SLM = window.SLM || {};

window.SLM['cart/script/domain/adapter/svc/index.js'] = window.SLM['cart/script/domain/adapter/svc/index.js'] || function () {
  const _exports = {};
  const config = window['SLM']['cart/script/domain/adapter/svc/internal/config.js'].default;
  const transport = window['SLM']['cart/script/domain/adapter/svc/internal/transport.js'].default;

  class Svc {
    constructor(svcConfig) {
      this._config = svcConfig;
      this._transport = transport.newTransport(config.getRequest(svcConfig));
    }

    get transport() {
      return this._transport;
    }

    get lang() {
      return config.getLangConfig(this._config);
    }

    get request() {
      return this.transport.request;
    }

  }

  let globalSvc;

  function withSvc(svcConfig) {
    globalSvc = new Svc(svcConfig);
  }

  function takeSvc() {
    return globalSvc;
  }

  _exports.default = {
    withSvc,
    takeSvc
  };
  return _exports;
}();