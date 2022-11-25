window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/lozad/plugins/image-gif-poster.js'] = window.SLM['theme-shared/utils/lozad/plugins/image-gif-poster.js'] || function () {
  const _exports = {};
  const { EnumAttributes } = window['SLM']['theme-shared/utils/lozad/plugins/normal.js'];
  const { isElementType, isGif, isS3FileUrl, SLFile, transformSrcset } = window['SLM']['theme-shared/utils/lozad/util.js'];

  function getPosterUrl(url) {
    if (!isGif(url) || !isS3FileUrl(url)) return;
    const file = new SLFile(url, window.location.href);
    if (file.querys.get('_f') !== '1') return;
    if (file.modifiers[0] === 'poster') return;
    file.modifiers.unshift('poster');
    file.suffix = 'png';
    return file.toString();
  }

  function getPosterData({
    src,
    srcset
  }) {
    const data = {};

    if (src) {
      data.src = getPosterUrl(src);
    }

    if (srcset) {
      let srcsetHasPoster = false;
      data.srcset = transformSrcset(srcset, (url, breakpoint) => {
        const posterUrl = getPosterUrl(url);

        if (posterUrl) {
          srcsetHasPoster = true;
          return [posterUrl, breakpoint];
        }

        return [url, breakpoint];
      });
      if (!srcsetHasPoster) delete data.srcset;
    }

    if (data.src || data.srcset) return data;
  }

  _exports.default = {
    attributes: [],

    load(element) {
      if (isElementType(element, 'img')) {
        const src = element.getAttribute(EnumAttributes.Src);
        const srcset = element.getAttribute(EnumAttributes.Srcset);
        const sizes = element.getAttribute('sizes');
        let isSeted = false;

        const setImageData = ({
          src,
          srcset
        }, img = new Image()) => {
          if (sizes) img.sizes = sizes;
          if (srcset) img.srcset = srcset;
          if (window.__PRELOAD_STATE__.imgNoReferrerSwitch) img.setAttribute('referrerpolicy', 'same-origin');
          if (src) img.src = src;
          return img;
        };

        const setImageSrc = () => {
          if (isSeted) return;
          setImageData({
            src,
            srcset
          }, element);
          isSeted = true;
        };

        const posterData = getPosterData({
          src,
          srcset
        });

        if (posterData) {
          const bgImg = setImageData({
            src,
            srcset
          });
          const posterBgImage = setImageData(posterData);
          bgImg.onload = setImageSrc;
          posterBgImage.onerror = setImageSrc;
          setImageData(posterData, element);
        } else {
          setImageSrc();
        }
      }
    }

  };
  return _exports;
}();