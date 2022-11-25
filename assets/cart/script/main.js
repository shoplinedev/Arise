window.SLM = window.SLM || {};

window.SLM['cart/script/main.js'] = window.SLM['cart/script/main.js'] || function () {
  const _exports = {};
  const Cookie = window['js-cookie']['default'];
  const { Owner, Action } = window['@yy/sl-theme-shared']['/utils/logger/sentryReport'];
  const CartModule = window['SLM']['cart/script/biz/cart/index.js'].default;
  const LoggerService = window['SLM']['commons/logger/index.js'].default;
  const { Status: LoggerStatus } = window['SLM']['commons/logger/index.js'];
  const logger = LoggerService.pipeOwner(`${Owner.MainCart} main.js`);
  const cartToken = Cookie.get('t_cart');
  CartModule.initCartModule('main');
  logger.info('main购物车主站', {
    data: {
      cartToken
    },
    action: Action.InitCart,
    status: LoggerStatus.Start
  });
  return _exports;
}();