window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/commons/date-picker/locale/index.js'] = window.SLM['theme-shared/biz-com/customer/commons/date-picker/locale/index.js'] || function () {
  const _exports = {};
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];

  const tPc = (path, hash) => {
    return t(`customer.general.${path}`, hash);
  };

  const tMobile = (path, hash) => {
    return t(`customer.general.${path}`, hash);
  };

  _exports.default = {
    pc: {
      days: [tPc('sunday'), tPc('monday'), tPc('tuesday'), tPc('wednesday'), tPc('thursday'), tPc('friday'), tPc('saturday')],
      daysShort: [tPc('sun'), tPc('mon'), tPc('tue'), tPc('wed'), tPc('thu'), tPc('fri'), tPc('sat')],
      daysMin: [tPc('su'), tPc('mo'), tPc('tu'), tPc('we'), tPc('th'), tPc('fr'), tPc('sa')],
      months: [tPc('january'), tPc('february'), tPc('march'), tPc('april'), tPc('may'), tPc('june'), tPc('july'), tPc('august'), tPc('september'), tPc('october'), tPc('november'), tPc('december')],
      monthsShort: [tPc('jan'), tPc('feb'), tPc('mar'), tPc('apr'), tPc('may'), tPc('jun'), tPc('jul'), tPc('aug'), tPc('sep'), tPc('oct'), tPc('nov'), tPc('dec')],
      today: tPc('today'),
      clear: tPc('clear_button'),
      dateFormat: tPc('date_format'),
      timeFormat: tPc('time_format'),
      firstDay: parseInt(tPc('firstDay'), 10)
    },
    mobile: {
      title: tMobile('select_date'),
      cancel: tMobile('cancel'),
      confirm: tMobile('confirm_button'),
      year: '',
      month: '',
      day: '',
      hour: '',
      min: '',
      sec: ''
    }
  };
  return _exports;
}();