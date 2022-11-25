window.SLM = window.SLM || {};

window.SLM['theme-shared/events/trade/developer-api/cart-line-item-update/index.js'] = window.SLM['theme-shared/events/trade/developer-api/cart-line-item-update/index.js'] || function () {
  const _exports = {};
  const { LINE_ITEM_UPDATE } = window['SLM']['theme-shared/events/trade/interior-event/index.js'];
  const externalEvent = window['SLM']['theme-shared/events/trade/enum/index.js'];
  const interior = window && window.SL_EventBus;
  const external = window && window.Shopline.event;

  const cartLineItemUpdateHandler = () => {
    interior.emit(LINE_ITEM_UPDATE);
  };

  const cartLineItemUpdate = () => external && external.on(externalEvent.LINE_ITEM_UPDATE, cartLineItemUpdateHandler);

  cartLineItemUpdate.apiName = externalEvent.LINE_ITEM_UPDATE;
  _exports.default = cartLineItemUpdate;
  return _exports;
}();