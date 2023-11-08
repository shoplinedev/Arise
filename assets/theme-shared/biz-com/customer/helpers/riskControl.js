window.SLM = window.SLM || {};
window.SLM['theme-shared/biz-com/customer/helpers/riskControl.js'] = window.SLM['theme-shared/biz-com/customer/helpers/riskControl.js'] || function () {
  const _exports = {};
  const getEnv = window['SLM']['theme-shared/utils/get-env.js'].default;
  const { loadScript } = window['SLM']['theme-shared/biz-com/customer/utils/loadScript.js'];
  const DF_ENV = {
    develop: 'dev',
    staging: 'test',
    preview: 'pre',
    product: 'pro'
  };
  _exports.DF_ENV = DF_ENV;
  const config = {
    DF_SDK_URL_OSS: 'https://r2cdn.myshopline.cn/static/rs/adff/prod/latest/bundle.iife.js',
    DF_SDK_URL_S3: 'https://r2cdn.myshopline.com/static/rs/adff/prod/latest/bundle.iife.js',
    IS_MAINLAND: false,
    APP_ENV: getEnv().APP_ENV || 'product',
    DF_APP_CODE: 'm3tdgo',
    PUBLICKEY: 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDFOkIm2U9Gn1fMq3cA5RUB9dG7LTIjt8lC3udJL75EzuclO2/GhHLVnVIbXnaBhBkCvYqDmwWJDyzWh2Uaor1VFeAtOuFAmqFWFc/JXS1MosLusO8HSHT1qUWLmkefU+BCf77rVPD7kBdXgWds2pLhB0sijpP6QdaFZNiVcTuetQIDAQAB'
  };
  const RISK_CONTROL_URL = config.IS_MAINLAND ? config.DF_SDK_URL_OSS : config.DF_SDK_URL_S3;
  let dfInstance = null;
  let checker = null;
  const riskHumanToken = {};
  const initRiskHumanToken = () => {
    checker = window.DeviceFingerprint.mmc({
      env: 'same_domain',
      publicKey: config.PUBLICKEY,
      timeout: 500
    });
  };
  const loadRiskControl = () => {
    if (dfInstance) {
      return Promise.resolve(dfInstance);
    }
    return loadScript(RISK_CONTROL_URL).then(() => {
      dfInstance = window.DeviceFingerprint && window.DeviceFingerprint({
        env: DF_ENV[config.APP_ENV || 'prd'],
        appCode: config.DF_APP_CODE
      });
      initRiskHumanToken();
      return dfInstance;
    });
  };
  _exports.loadRiskControl = loadRiskControl;
  const addRiskHumanToken = (btnId, tokenKey) => {
    if (checker) {
      checker.listen(btnId, token => {
        riskHumanToken[tokenKey] = token;
      });
    }
  };
  _exports.addRiskHumanToken = addRiskHumanToken;
  const getRiskHumanToken = (tokenKey, n = 0) => {
    return new Promise(resolve => {
      if (riskHumanToken[tokenKey]) {
        resolve(riskHumanToken[tokenKey]);
        riskHumanToken[tokenKey] = null;
      } else {
        setTimeout(() => {
          if (n > 10) return resolve(null);
          getRiskHumanToken(tokenKey, n + 1).then(res => {
            resolve(res);
            riskHumanToken[tokenKey] = null;
          });
        }, 60);
      }
    });
  };
  _exports.getRiskHumanToken = getRiskHumanToken;
  const getRiskControlToken = () => {
    return loadRiskControl().then(df => {
      return df && df.getToken();
    });
  };
  _exports.getRiskControlToken = getRiskControlToken;
  return _exports;
}();