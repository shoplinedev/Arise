window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/colorExtract.js'] = window.SLM['theme-shared/utils/colorExtract.js'] || function () {
  const _exports = {};

  const tinycolor = require('tinycolor2');

  function colorExtract(hex, type, light = '#FFF', dark = '#000', opacity = 1, background = 'transparent') {
    const color = tinycolor(hex);
    let val;

    switch (type) {
      case 'alpha':
        val = color.getAlpha();
        break;

      case 'lightness':
        val = Math.round(color.toHsl().l * 100);
        break;

      case 'contarst':
        val = tinycolor.readability(hex, '#FFF') > tinycolor.readability(hex, '#000') ? light : dark;
        break;

      case 'contrast':
        val = tinycolor.readability(hex, '#FFF') > tinycolor.readability(hex, '#000') ? light : dark;
        val = tinycolor(val).setAlpha(Number(opacity)).toRgbString();
        break;

      case 'contrast_mix':
        let mixBg = background;

        if (background === 'transparent') {
          mixBg = hex;
        }

        val = tinycolor.readability(mixBg, '#FFF') > tinycolor.readability(mixBg, '#000') ? light : dark;
        val = tinycolor.mix(mixBg, val, Number(opacity)).toHexString();
        break;

      default:
        break;
    }

    return val;
  }

  _exports.colorExtract = colorExtract;
  return _exports;
}();