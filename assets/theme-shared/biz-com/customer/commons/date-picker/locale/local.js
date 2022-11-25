window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/commons/date-picker/locale/local.js'] = window.SLM['theme-shared/biz-com/customer/commons/date-picker/locale/local.js'] || function () {
  const _exports = {};
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const en = window['SLM']['theme-shared/biz-com/customer/commons/date-picker/locale/en.js'].default;
  const zhHansCN = window['SLM']['theme-shared/biz-com/customer/commons/date-picker/locale/zh-hans-cn.js'].default;
  const de = window['SLM']['theme-shared/biz-com/customer/commons/date-picker/locale/de.js'].default;
  const fr = window['SLM']['theme-shared/biz-com/customer/commons/date-picker/locale/fr.js'].default;
  const ja = window['SLM']['theme-shared/biz-com/customer/commons/date-picker/locale/ja.js'].default;
  const th = window['SLM']['theme-shared/biz-com/customer/commons/date-picker/locale/th.js'].default;
  const zhHantTW = window['SLM']['theme-shared/biz-com/customer/commons/date-picker/locale/zh-hant-tw.js'].default;
  const ru = window['SLM']['theme-shared/biz-com/customer/commons/date-picker/locale/ru.js'].default;
  const es = window['SLM']['theme-shared/biz-com/customer/commons/date-picker/locale/es.js'].default;
  const id = window['SLM']['theme-shared/biz-com/customer/commons/date-picker/locale/id.js'].default;
  const it = window['SLM']['theme-shared/biz-com/customer/commons/date-picker/locale/it.js'].default;
  const pt = window['SLM']['theme-shared/biz-com/customer/commons/date-picker/locale/pt.js'].default;
  const nl = window['SLM']['theme-shared/biz-com/customer/commons/date-picker/locale/nl.js'].default;
  const pl = window['SLM']['theme-shared/biz-com/customer/commons/date-picker/locale/pl.js'].default;
  const ko = window['SLM']['theme-shared/biz-com/customer/commons/date-picker/locale/ko.js'].default;
  const da = window['SLM']['theme-shared/biz-com/customer/commons/date-picker/locale/da.js'].default;
  const fi = window['SLM']['theme-shared/biz-com/customer/commons/date-picker/locale/fi.js'].default;
  const et = window['SLM']['theme-shared/biz-com/customer/commons/date-picker/locale/et.js'].default;
  const lv = window['SLM']['theme-shared/biz-com/customer/commons/date-picker/locale/lv.js'].default;
  const ro = window['SLM']['theme-shared/biz-com/customer/commons/date-picker/locale/ro.js'].default;
  const lt = window['SLM']['theme-shared/biz-com/customer/commons/date-picker/locale/lt.js'].default;
  const hu = window['SLM']['theme-shared/biz-com/customer/commons/date-picker/locale/hu.js'].default;
  const el = window['SLM']['theme-shared/biz-com/customer/commons/date-picker/locale/el.js'].default;
  const bg = window['SLM']['theme-shared/biz-com/customer/commons/date-picker/locale/bg.js'].default;
  const tr = window['SLM']['theme-shared/biz-com/customer/commons/date-picker/locale/tr.js'].default;
  const sl = window['SLM']['theme-shared/biz-com/customer/commons/date-picker/locale/sl.js'].default;
  const sk = window['SLM']['theme-shared/biz-com/customer/commons/date-picker/locale/sk.js'].default;
  const hi = window['SLM']['theme-shared/biz-com/customer/commons/date-picker/locale/hi.js'].default;
  const hr = window['SLM']['theme-shared/biz-com/customer/commons/date-picker/locale/hr.js'].default;
  const cs = window['SLM']['theme-shared/biz-com/customer/commons/date-picker/locale/cs.js'].default;
  const ms = window['SLM']['theme-shared/biz-com/customer/commons/date-picker/locale/ms.js'].default;
  const nb = window['SLM']['theme-shared/biz-com/customer/commons/date-picker/locale/nb.js'].default;
  const sv = window['SLM']['theme-shared/biz-com/customer/commons/date-picker/locale/sv.js'].default;
  const vi = window['SLM']['theme-shared/biz-com/customer/commons/date-picker/locale/vi.js'].default;
  const locale = {
    en,
    'zh-hans-cn': zhHansCN,
    de,
    fr,
    ja,
    th,
    'zh-hant-tw': zhHantTW,
    ru,
    es,
    id,
    it,
    pt,
    nl,
    pl,
    ko,
    da,
    fi,
    et,
    lv,
    ro,
    lt,
    hu,
    el,
    bg,
    tr,
    sl,
    sk,
    hi,
    hr,
    cs,
    ms,
    nb,
    sv,
    vi
  };
  const LANG = SL_State.get('request.locale') || 'en';
  _exports.default = locale[LANG];
  return _exports;
}();