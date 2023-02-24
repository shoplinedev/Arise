window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/biz/user-center/index.js'] = window.SLM['theme-shared/biz-com/customer/biz/user-center/index.js'] || function () {
  const _exports = {};
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const toSignOut = window['SLM']['theme-shared/biz-com/customer/helpers/signOut.js'].default;
  const { SIGN_IN } = window['SLM']['theme-shared/biz-com/customer/constant/url.js'];
  const { reportSignOut, reportClickCenterTab, reportClickMessageTab, reportClickOrderTab } = window['SLM']['theme-shared/biz-com/customer/reports/user-center.js'];
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const { getUrlQuery } = window['SLM']['theme-shared/biz-com/customer/utils/url.js'];
  const { CONFIRM_SUBSCRIBE_EMAIL } = window['SLM']['theme-shared/biz-com/customer/constant/const.js'];
  const Toast = window['SLM']['theme-shared/components/hbs/shared/components/toast/toast.js'].default;
  const { redirectTo } = window['SLM']['theme-shared/biz-com/customer/helpers/format.js'];
  const tabTypeToReport = {
    center: reportClickCenterTab,
    message: reportClickMessageTab,
    orders: reportClickOrderTab
  };
  $(() => {
    const isLogin = SL_State.get('request.is_login');

    if (!isLogin) {
      toSignOut().then(() => {
        window.location.href = redirectTo(SIGN_IN);
      });
    }

    const toast = new Toast();
    const from = getUrlQuery('from');

    if (from === CONFIRM_SUBSCRIBE_EMAIL) {
      const hasToast = !!sessionStorage.getItem(CONFIRM_SUBSCRIBE_EMAIL);

      if (!hasToast) {
        sessionStorage.setItem(CONFIRM_SUBSCRIBE_EMAIL, true);
        toast.open(t('customer.account.subscribe_confirm_tip'));
      }
    }

    const $center = $('#user-center');
    $center.find('.signout-link').click(() => {
      toSignOut().then(() => {
        reportSignOut();
        window.location.href = redirectTo(SIGN_IN);
      });
    });
    $center.find('.navbar').on('click', '.navbar__item', e => {
      e.preventDefault();
      const $target = $(e.currentTarget);
      const type = $target.data('type');
      const href = $target.attr('href');
      tabTypeToReport[type] && tabTypeToReport[type]();
      window.location.href = href;
    });
  });
  return _exports;
}();