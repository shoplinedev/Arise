window.SLM = window.SLM || {};

window.SLM['theme-shared/components/hbs/shared/utils/imgUrl.js'] = window.SLM['theme-shared/components/hbs/shared/utils/imgUrl.js'] || function () {
  const _exports = {};

  function isS3FileUrl(url) {
    return /\.cloudfront\./.test(url) || /https:\/\/img.myshopline.com/.test(url) || /https:\/\/img-preview.myshopline.com/.test(url);
  }

  function imgUrl(url, options) {
    const {
      width,
      scale
    } = options;

    if (!width) {
      return url;
    }

    if (!isS3FileUrl(url)) {
      return url;
    }

    let paramWidth = width;

    if (typeof scale === 'number' && scale > 1) {
      paramWidth = width * scale;
    }

    const clipper = `_${paramWidth || ''}x`;
    const slice = url.split('/');
    const filename = slice.pop() || '';
    const dirname = slice.join('/');
    const lastDotIndex = filename.lastIndexOf('.');

    if (lastDotIndex === -1) {
      return `${dirname}/${filename}${clipper}`;
    }

    return `${dirname}/${filename.slice(0, lastDotIndex)}${clipper}${filename.slice(lastDotIndex)}`;
  }

  _exports.default = imgUrl;
  return _exports;
}();