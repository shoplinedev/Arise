window.SLM = window.SLM || {};

window.SLM['cart/script/biz/cart/index.js'] = window.SLM['cart/script/biz/cart/index.js'] || function () {
  const _exports = {};
  const Cookie = window['js-cookie']['default'];
  const { Owner, Action } = window['@yy/sl-theme-shared']['/utils/logger/sentryReport'];
  const LoggerService = window['SLM']['commons/logger/index.js'].default;
  const { Status: LoggerStatus } = window['SLM']['commons/logger/index.js'];
  const CartModule = window['SLM']['cart/script/biz/cart/cart_module.js'].default;
  const logger = LoggerService.pipeOwner(`${Owner.Cart} biz/cart/index.js`);
  const cartToken = Cookie.get('t_cart');
  let cartModule;

  function initCartModule(cartType) {
    logger.info(`normal 主站购物车 初始化 initCartModule`, {
      data: {
        cartToken,
        cartType
      },
      action: Action.InitCart,
      status: LoggerStatus.Start
    });
    cartModule = new CartModule(cartType);
    logger.info(`normal 主站购物车 初始化 initCartModule`, {
      data: {
        cartToken,
        cartType
      },
      action: Action.InitCart,
      status: LoggerStatus.Success
    });
  }

  function takeCartModule() {
    logger.info(`normal 主站购物车 takeCartModule`, {
      data: {
        cartToken,
        cartModule
      },
      action: Action.TakeCart,
      status: LoggerStatus.Start
    });
    return cartModule;
  }

  _exports.default = {
    initCartModule,
    takeCartModule
  };
  return _exports;
}();