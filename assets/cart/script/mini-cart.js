window.SLM = window.SLM || {};

window.SLM['cart/script/mini-cart.js'] = window.SLM['cart/script/mini-cart.js'] || function () {
  const _exports = {};
  const createLogger = window['SLM']['theme-shared/utils/createLogger.js'].default;
  const Cookie = window['js-cookie']['default'];
  const { Owner, Action } = window['@yy/sl-theme-shared']['/utils/logger/sentryReport'];
  const CartModule = window['SLM']['cart/script/biz/cart/index.js'].default;
  const { renderMiniCart } = window['SLM']['commons/utils/dynamicImportMiniCart.js'];
  const LoggerService = window['SLM']['commons/logger/index.js'].default;
  const { Status: LoggerStatus } = window['SLM']['commons/logger/index.js'];
  const sentryLogger = LoggerService.pipeOwner(`${Owner.miniCart} mini-cart.js`);
  const cartToken = Cookie.get('t_cart');
  const logger = createLogger('mini-cart');
  logger.info('ready to init sidebar cart');
  sentryLogger.info('mini购物车主站', {
    data: {
      cartToken
    },
    action: Action.InitCart,
    status: LoggerStatus.Start
  });
  CartModule.initCartModule('sidebar');
  $(document).on('shopline:section:load', async e => {
    if (e.detail.sectionId === 'header') {
      await renderMiniCart();
      logger.info('mini购物车 编辑器', {
        data: {
          cartToken
        },
        action: Action.InitCart,
        status: LoggerStatus.Start
      });
      CartModule.initCartModule('sidebar');
    }
  });
  return _exports;
}();