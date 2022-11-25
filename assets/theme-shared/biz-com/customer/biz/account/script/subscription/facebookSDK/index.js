window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/biz/account/script/subscription/facebookSDK/index.js'] = window.SLM['theme-shared/biz-com/customer/biz/account/script/subscription/facebookSDK/index.js'] || function () {
  const _exports = {};
  const defaultInfo = {
    appId: '',
    autoLogAppEvents: true,
    xfbml: true,
    version: 'v9.0',
    platform: 'benchat'
  };
  const SpecialLangMap = {
    ar: 'ar_AR',
    es: 'es_LA'
  };

  const defualtFbAsyncInit = () => {};

  class FacebookSdk {
    constructor() {
      this.isInit = false;
      this.accessToken = null;
      this.shortAccessToken = null;
      this.initParams = defaultInfo;
      this.lang = 'en_US';
      this.__getSdkPromise = null;
      this.__getLoginStatusPromise = null;
    }

    init(props = this.initParams) {
      const {
        lang: Lang = this.lang,
        ...rest
      } = props;
      const langMatch = Lang.match(/([a-z]+)_[a-z]+/i);
      const lang = SpecialLangMap[langMatch && langMatch[1] || ''] || Lang;
      const initParams = { ...this.initParams,
        ...rest
      };

      if (this.initParams.appId !== initParams.appId) {
        this.accessToken = null;
        this.shortAccessToken = null;
        this.__getLoginStatusPromise = null;
      }

      this.initParams = initParams;
      this.isInit = false;

      if (this.lang !== lang) {
        this.__getSdkPromise = null;
        this.lang = lang;
        window.FB = null;
        window.fbAsyncInit = defualtFbAsyncInit;
      }

      return this.requestSdk(lang).then(() => {
        window.FB.init(this.initParams);
        this.isInit = true;
      }).catch(err => {
        throw err;
      });
    }

    requestSdk(lang = this.lang) {
      if (this.__getSdkPromise) {
        return this.__getSdkPromise;
      }

      this.__getSdkPromise = new Promise((resolve, reject) => {
        if (window.FB) {
          resolve(true);
          return;
        }

        window.fbAsyncInit = () => {
          resolve(true);
          window.fbAsyncInit = defualtFbAsyncInit;
        };

        const id = 'facebook-jssdk';
        const fjs = document.getElementsByTagName('script')[0];
        const origin = document.getElementById(id);
        origin && origin.parentNode && origin.parentNode.removeChild(origin);
        const js = document.createElement('script');

        js.onabort = () => {
          fjs.parentNode.removeChild(js);
          this.__getSdkPromise = null;
          reject(new Error('Request facebook jssdk is Abort'));
        };

        js.onerror = () => {
          fjs.parentNode.removeChild(js);
          this.__getSdkPromise = null;
          reject(new Error('Request facebook jssdk is Error'));
        };

        js.id = id;
        js.src = `https://connect.facebook.net/${lang}/sdk.js`;
        fjs.parentNode.insertBefore(js, fjs);
      });
      return this.__getSdkPromise;
    }

  }

  const facebook = new FacebookSdk();
  _exports.default = facebook;
  return _exports;
}();