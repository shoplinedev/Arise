window.SLM = window.SLM || {};

window.SLM['theme-shared/report/customArgs/index.js'] = window.SLM['theme-shared/report/customArgs/index.js'] || function () {
  const _exports = {};
  const { nullishCoalescingOperator } = window['SLM']['theme-shared/utils/syntax-patch.js'];

  function getValue(keysMap, name) {
    return nullishCoalescingOperator(keysMap && keysMap[name], name);
  }

  function getValuesByKey(channelArgs, key) {
    return name => {
      return getValue(channelArgs && channelArgs[key], name);
    };
  }

  function getByChannel(channel) {
    return key => {
      return getValuesByKey(window.SL_ReportArgsMap && window.SL_ReportArgsMap[channel], key);
    };
  }

  if (!window.SL_GetReportArg) {
    window.SL_GetReportArg = function getReportArg(...args) {
      if (args.length === 1) {
        return getByChannel(args[0]);
      }

      if (args.length === 2) {
        return getByChannel(args[0])(args[1]);
      }

      if (args.length === 3) {
        return getByChannel(args[0])(args[1])(args[2]);
      }
    };
  }

  return _exports;
}();