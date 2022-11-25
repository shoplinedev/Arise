window.SLM = window.SLM || {};

window.SLM['cart/script/service/index.js'] = window.SLM['cart/script/service/index.js'] || function () {
  const _exports = {};
  const Cookie = window['js-cookie']['default'];
  const http = window['SLM']['theme-shared/utils/request.js'].default;
  const { Owner, Action } = window['@yy/sl-theme-shared']['/utils/logger/sentryReport'];
  const SvcAdapter = window['SLM']['cart/script/domain/adapter/svc/index.js'].default;
  const StorageAdapter = window['SLM']['cart/script/domain/adapter/storage/index.js'].default;
  const CartService = window['SLM']['cart/script/service/cart/index.js'].default;
  const LoggerService = window['SLM']['commons/logger/index.js'].default;
  const { Status: LoggerStatus } = window['SLM']['commons/logger/index.js'];
  const logger = LoggerService.pipeOwner(`${Owner.Cart} cart/script/service/index.js`);
  const cartToken = Cookie.get('t_cart');
  let initialized = false;

  function init() {
    if (initialized) return;
    initialized = true;
    SvcAdapter.withSvc({
      ai: http
    });
    CartService.withCartService(SvcAdapter.takeSvc(), StorageAdapter.takeStorage());
    logger.info(`normal 主站购物车 全局化 cart service _init`, {
      data: {
        cartToken
      },
      action: Action.InitCart,
      status: LoggerStatus.Success
    });
  }

  _exports.default = {
    init
  };
  return _exports;
}();