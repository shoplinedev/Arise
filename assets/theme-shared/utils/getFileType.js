window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/getFileType.js'] = window.SLM['theme-shared/utils/getFileType.js'] || function () {
  const _exports = {};
  const { FILE_TYPE_MAP } = window['SLM']['theme-shared/utils/constant.js'];

  const getFileType = type => {
    if (FILE_TYPE_MAP[type]) {
      return FILE_TYPE_MAP[type];
    }

    return 'PNG';
  };

  _exports.getFileType = getFileType;
  return _exports;
}();