window.SLM = window.SLM || {};

window.SLM['theme-shared/components/hbs/shared/utils/dynamicImportMiniCart.js'] = window.SLM['theme-shared/components/hbs/shared/utils/dynamicImportMiniCart.js'] || function () {
  const _exports = {};
  const request = window['axios']['default'];
  const ID__MINI_CART_CONTAINER = 'trade_mini_cart_ajax';
  let miniCartScriptPromise;

  async function renderMiniCart() {
    const res = await request.get('/cart?view=ajax');
    const {
      data
    } = res;
    const $container = document.getElementById(ID__MINI_CART_CONTAINER);

    if (!$container) {
      throw new Error(`failed to get mini-cart container with id: ${ID__MINI_CART_CONTAINER}`);
    }

    $container.innerHTML = data || '';
  }

  async function initMiniCartChunk() {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      const jsUrl = window.__CHUNK_ASSETS__MINI_CART__JS__;

      if (!jsUrl) {
        reject(new Error(`failed to get mini-cart js chunk url`));
        return;
      }

      document.body.appendChild(script);

      script.onload = () => {
        resolve();
      };

      script.onerror = reject;
      script.src = jsUrl;
    });
  }

  _exports.default = async () => {
    if (miniCartScriptPromise) return miniCartScriptPromise;

    miniCartScriptPromise = (async () => {
      await renderMiniCart();
      await initMiniCartChunk();
      window && window.lozadObserver && window.lozadObserver.observe();
    })();

    return miniCartScriptPromise;
  };

  return _exports;
}();