window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/lazysizes/auto-breakpoint.js'] = window.SLM['theme-shared/utils/lazysizes/auto-breakpoint.js'] || function () {
  const _exports = {};
  const { EnumAttributes } = window['SLM']['theme-shared/utils/lazysizes/constants.js'];
  const { isS3FileUrl, SLFile } = window['SLM']['theme-shared/utils/lazysizes/util.js'];
  const defaultBreakpoint = [375, 540, 720, 900, 1080, 1296, 1512, 1728, 1944, 2160, 2660, 2960, 3260, 3860];

  const filterBreakpoints = (imageWidth, breakpoints) => {
    if (!imageWidth) return breakpoints;
    const newPoints = breakpoints.findIndex(point => {
      return point > imageWidth;
    });
    return breakpoints.slice(0, newPoints + 1);
  };

  const createImageUrl = ({
    url,
    width
  }) => {
    if (!width) {
      return url;
    }

    if (!isS3FileUrl(url)) {
      return url;
    }

    const paramWidth = width;
    const clipper = `_${paramWidth || ''}x`;
    const slice = url.split('/');
    const filename = slice.pop() || '';
    const dirname = slice.join('/');
    const lastDotIndex = filename.lastIndexOf('.');

    if (lastDotIndex === -1) {
      return `${dirname}/${filename}${clipper}`;
    }

    return `${dirname}/${filename.slice(0, lastDotIndex)}${clipper}${filename.slice(lastDotIndex)}`;
  };

  _exports.default = event => {
    const element = event.target;
    const isAuto = element.getAttribute(EnumAttributes.AutoSize);
    const srcset = element.getAttribute(EnumAttributes.Srcset);
    const src = element.getAttribute(EnumAttributes.Src);

    if (isAuto && !srcset && isS3FileUrl(src)) {
      const file = new SLFile(src);
      const imageWidth = file.querys.get('w');
      const breakpoints = filterBreakpoints(imageWidth, defaultBreakpoint);
      const newSrcset = breakpoints.map(point => {
        return `${createImageUrl({
          url: src,
          width: point
        })} ${point}w`;
      });
      element.setAttribute(EnumAttributes.Srcset, newSrcset.join(', '));
    }
  };

  return _exports;
}();