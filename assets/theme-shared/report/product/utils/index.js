window.SLM = window.SLM || {};

window.SLM['theme-shared/report/product/utils/index.js'] = window.SLM['theme-shared/report/product/utils/index.js'] || function () {
  const _exports = {};
  const pageMap = window['SLM']['theme-shared/utils/report/page.js'].default;
  const isObject = window['lodash']['isPlainObject'];

  function getCartId() {
    return new Promise((resolve, reject) => {
      if (window.Shopline && window.Shopline.event && window.Shopline.event.emit) {
        window.Shopline.event.emit('Cart::GetCartId', {
          onSuccess(res) {
            if (res && res.success) {
              const ownerId = res.data;
              resolve(ownerId);
            }

            reject(res);
          },

          onError(error) {
            reject(error);
          }

        });
      }
    });
  }

  _exports.getCartId = getCartId;

  function validParams(target) {
    try {
      if (!target || !isObject(target)) {
        throw new Error();
      }
    } catch (error) {
      throw new Error(`report function params must be object ${error}`);
    }
  }

  _exports.validParams = validParams;

  function getPage() {
    const alias = window.SL_State.get('templateAlias');
    return pageMap[alias];
  }

  _exports.getPage = getPage;
  return _exports;
}();