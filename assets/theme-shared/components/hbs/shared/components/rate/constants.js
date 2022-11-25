window.SLM = window.SLM || {};

window.SLM['theme-shared/components/hbs/shared/components/rate/constants.js'] = window.SLM['theme-shared/components/hbs/shared/components/rate/constants.js'] || function () {
  const _exports = {};
  const BASICSTAR = '<?xml version="1.0" encoding="utf-8"?>' + '<svg version="1.1"' + 'xmlns="http://www.w3.org/2000/svg"' + 'viewBox="0 12.705 512 486.59"' + 'x="0px" y="0px"' + 'xml:space="preserve">' + '<polygon ' + 'points="256.814,12.705 317.205,198.566' + ' 512.631,198.566 354.529,313.435 ' + '414.918,499.295 256.814,384.427 ' + '98.713,499.295 159.102,313.435 ' + '1,198.566 196.426,198.566 "/>' + '</svg>';
  _exports.BASICSTAR = BASICSTAR;
  const DEFAULTS = {
    starWidth: '32px',
    normalFill: 'gray',
    ratedFill: '#f39c12',
    numStars: 5,
    maxValue: 5,
    precision: 1,
    rating: 0,
    fullStar: false,
    halfStar: false,
    hover: true,
    readOnly: false,
    spacing: '0px',
    rtl: false,
    multiColor: null,
    onInit: null,
    onChange: null,
    onSet: null,
    starSvg: null
  };
  _exports.DEFAULTS = DEFAULTS;
  const MULTICOLOR_OPTIONS = {
    startColor: '#c0392b',
    endColor: '#f1c40f'
  };
  _exports.MULTICOLOR_OPTIONS = MULTICOLOR_OPTIONS;
  return _exports;
}();