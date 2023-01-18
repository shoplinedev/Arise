window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/helpers/signOut.js'] = window.SLM['theme-shared/biz-com/customer/helpers/signOut.js'] || function () {
  const _exports = {};
  const { getCookie } = window['SLM']['theme-shared/biz-com/customer/helpers/cookie.js'];
  const { signOut } = window['SLM']['theme-shared/biz-com/customer/service/sign-out.js'];
  const { SIGN_IN } = window['SLM']['theme-shared/biz-com/customer/constant/url.js'];
  const { redirectTo } = window['SLM']['theme-shared/biz-com/customer/helpers/format.js'];

  function toSignOut() {
    const appid = getCookie('osudb_appid');
    const subappid = getCookie('osudb_subappid');
    return signOut({
      appid,
      subappid
    }).then(() => {
      return true;
    });
  }

  _exports.default = toSignOut;

  async function signOutAndJump(beforeJump) {
    const isSignOut = await toSignOut();

    if (isSignOut !== true) {
      return;
    }

    if (beforeJump instanceof Function) {
      beforeJump();
    }

    window.location.href = redirectTo(SIGN_IN);
  }

  _exports.signOutAndJump = signOutAndJump;
  return _exports;
}();