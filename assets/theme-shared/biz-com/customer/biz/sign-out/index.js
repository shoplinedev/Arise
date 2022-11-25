window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/biz/sign-out/index.js'] = window.SLM['theme-shared/biz-com/customer/biz/sign-out/index.js'] || function () {
  const _exports = {};
  const { getCookie } = window['SLM']['theme-shared/biz-com/customer/helpers/cookie.js'];
  const { redirectPage } = window['SLM']['theme-shared/biz-com/customer/utils/helper.js'];
  const { signOut } = window['SLM']['theme-shared/biz-com/customer/service/sign-out.js'];

  function runSignOut() {
    const appid = getCookie('osudb_appid');
    const subappid = getCookie('osudb_subappid');
    return signOut({
      appid,
      subappid
    }).then(() => redirectPage());
  }

  _exports.runSignOut = runSignOut;
  return _exports;
}();