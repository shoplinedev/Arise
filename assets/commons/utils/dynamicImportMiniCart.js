window.SLM = window.SLM || {};

window.SLM['commons/utils/dynamicImportMiniCart.js'] = window.SLM['commons/utils/dynamicImportMiniCart.js'] || function () {
  const _exports = {};
  const request = window['axios']['default'];
  const get = window['lodash']['get'];
  const ID__MINI_CART_CONTAINER = 'trade_mini_cart_ajax';
  let miniCartScriptPromise;

  _exports.default = async () => {
    if (miniCartScriptPromise) return miniCartScriptPromise;

    miniCartScriptPromise = (async () => {
      await renderMiniCart();
      await initMiniCartChunk();
      window.lozadObserver && window.lozadObserver.observe && window.lozadObserver.observe();
    })();

    return miniCartScriptPromise;
  };

  async function renderMiniCart() {
    const res = await request.get(window.Shopline.redirectTo('/cart?view=ajax'));
    const {
      data
    } = res;
    const $container = document.getElementById(ID__MINI_CART_CONTAINER);

    if (!$container) {
      throw new Error(`failed to get mini-cart container with id: ${ID__MINI_CART_CONTAINER}`);
    }

    $container.innerHTML = data || '';
  }

  _exports.renderMiniCart = renderMiniCart;

  async function initMiniCartChunk() {
    return new Promise((resolve, reject) => {
      const $container = document.getElementById(ID__MINI_CART_CONTAINER);
      const jsUrls = Array.from($container.querySelectorAll('script')).map(ele => get(ele, 'attributes.src.nodeValue', ''));

      if (!jsUrls || !jsUrls.length) {
        reject(new Error(`failed to get mini-cart js chunk url`));
        return;
      }

      const promiseList = jsUrls.map(url => {
        return new Promise((re, rj) => {
          const scriptEle = document.createElement('script');
          document.body.appendChild(scriptEle);

          scriptEle.onload = () => {
            re();
          };

          scriptEle.async = false;
          scriptEle.onerror = rj;
          scriptEle.src = url;
        });
      });
      Promise.all(promiseList).then(resolve).catch(reject);
    });
  }

  return _exports;
}();