window.SLM = window.SLM || {};

window.SLM['theme-shared/events/customer/developer-api/login-modal/renderModal.js'] = window.SLM['theme-shared/events/customer/developer-api/login-modal/renderModal.js'] || function () {
  const _exports = {};
  const request = window['axios']['default'];
  const { ModalWithHtml } = window['SLM']['theme-shared/components/hbs/shared/components/modal/index.js'];
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];

  function baseGet(object, path) {
    path = path.split('.');
    let index = 0;
    const {
      length
    } = path;

    while (object != null && index < length) {
      object = object[path[index++]];
    }

    return index && index === length ? object : undefined;
  }

  const CONTAINER_CLASS = 'login-modal__container';
  const BODY_CLASS = 'login-modal__body';
  const loadingTemplate = `
  <div class="login-modal--loading">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.3333 9.99999C18.3333 14.6024 14.6024 18.3333 10 18.3333C5.39762 18.3333 1.66666 14.6024 1.66666 9.99999C1.66666 5.39762 5.39762 1.66666 10 1.66666" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    </svg>
  </div>
`;

  async function initLoginModalChunk(containerId) {
    return new Promise((resolve, reject) => {
      let container = document.getElementById('customerLoginModalScriptUrl');
      let jsUrls = [];

      if (container && container.tagName.toLocaleLowerCase() === 'script') {
        jsUrls.push(baseGet(container, 'attributes.src.nodeValue', ''));
      } else {
        container = document.getElementById(containerId);
        jsUrls = Array.from(container.querySelectorAll('script')).map(ele => baseGet(ele, 'attributes.src.nodeValue', '')).filter(url => !!url);
      }

      if (!jsUrls || !jsUrls.length) {
        reject(new Error(`failed to get login-modal js chunk url`));
        return;
      }

      const promiseList = jsUrls.map(url => {
        return new Promise((resolve, reject) => {
          const scriptEle = document.createElement('script');
          document.body.appendChild(scriptEle);

          scriptEle.onload = () => {
            resolve();
          };

          scriptEle.async = false;
          scriptEle.onerror = reject;
          scriptEle.src = url;
        });
      });
      Promise.all(promiseList).then(resolve).catch(reject);
    });
  }

  _exports.default = async (options = {}, lifeCycle = {}) => {
    const modal = new ModalWithHtml({
      id: 'loginModal',
      ...options,
      bodyClassName: BODY_CLASS,
      containerClassName: CONTAINER_CLASS
    });
    modal.setContent(loadingTemplate);
    modal.show();
    lifeCycle && lifeCycle.onShow && lifeCycle.onShow(modal);
    const path = `/user/signIn?view=ajax&fromTemplateAlias=${SL_State.get('templateAlias')}`;
    const requestUrl = window.Shopline && window.Shopline.redirectTo && window.Shopline.redirectTo(path) || path;
    const {
      data
    } = await request.get(requestUrl);
    modal.setContent(data || '');
    const sl_$ = window.__SL_$__;

    if (!sl_$ || !sl_$._evalUrl || !sl_$.ajaxSettings || !sl_$.ajaxSettings.xhr) {
      await initLoginModalChunk(modal.modalId);
    }

    if (!!Array.from(document.getElementById(modal.modalId).querySelectorAll('script')).find(item => item.type === 'text/sl-javascript') && SL_State.get('templateAlias') === 'Checkout') {
      await initLoginModalChunk(modal.modalId);
    }

    return modal;
  };

  return _exports;
}();