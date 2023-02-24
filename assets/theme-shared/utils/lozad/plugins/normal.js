window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/lozad/plugins/normal.js'] = window.SLM['theme-shared/utils/lozad/plugins/normal.js'] || function () {
  const _exports = {};
  const { isIE, makeIsLoaded } = window['SLM']['theme-shared/utils/lozad/util.js'];
  const EnumAttributes = {
    Iesrc: 'data-iesrc',
    Alt: 'data-alt',
    Src: 'data-src',
    Srcset: 'data-srcset',
    Poster: 'data-poster',
    ToggleClass: 'data-toggle-class',
    BackgroundImage: 'data-background-image',
    BackgroundImageSet: 'data-background-image-set',
    PlaceholderBackground: 'data-placeholder-background'
  };
  _exports.EnumAttributes = EnumAttributes;
  _exports.default = {
    attributes: [EnumAttributes.Alt, EnumAttributes.Src, EnumAttributes.Iesrc, EnumAttributes.Srcset, EnumAttributes.Poster, EnumAttributes.ToggleClass, EnumAttributes.BackgroundImage, EnumAttributes.BackgroundImageSet],

    prepare(element) {
      const plBg = element.getAttribute(EnumAttributes.PlaceholderBackground);
      if (plBg) element.style.background = plBg;
    },

    beforeLoad() {},

    load(element) {
      if (element.nodeName.toLowerCase() === 'picture') {
        let img = element.querySelector('img');
        let append = false;

        if (img === null) {
          img = document.createElement('img');
          append = true;
        }

        if (img.nodeName.toLowerCase() === 'img' && !img.hasAttribute('decoding')) {
          img.decoding = 'async';
        }

        if (isIE && element.getAttribute(EnumAttributes.Iesrc)) {
          img.src = element.getAttribute(EnumAttributes.Iesrc);
        }

        if (element.getAttribute(EnumAttributes.Alt)) {
          img.alt = element.getAttribute(EnumAttributes.Alt);
        }

        if (append) {
          element.append(img);
        }
      }

      if (element.nodeName.toLowerCase() === 'video' && !element.getAttribute(EnumAttributes.Src)) {
        if (element.children) {
          const childs = element.children;
          let childSrc;

          for (let i = 0; i <= childs.length - 1; i++) {
            childSrc = childs[i].getAttribute(EnumAttributes.Src);

            if (childSrc) {
              childs[i].src = childSrc;
            }
          }

          element.load();
        }
      }

      if (element.nodeName.toLowerCase() === 'img' && !element.hasAttribute('decoding')) {
        element.decoding = 'async';
      }

      if (element.getAttribute(EnumAttributes.Poster)) {
        element.poster = element.getAttribute(EnumAttributes.Poster);
      }

      if (element.getAttribute(EnumAttributes.Srcset)) {
        element.setAttribute('srcset', element.getAttribute(EnumAttributes.Srcset));
      }

      if (element.getAttribute(EnumAttributes.Src)) {
        element.src = element.getAttribute(EnumAttributes.Src);
      }

      let backgroundImageDelimiter = ',';

      if (element.getAttribute('data-background-delimiter')) {
        backgroundImageDelimiter = element.getAttribute('data-background-delimiter');
      }

      if (element.getAttribute(EnumAttributes.BackgroundImage)) {
        element.style.backgroundImage = `url('${element.getAttribute(EnumAttributes.BackgroundImage).split(backgroundImageDelimiter).join("'),url('")}')`;
      } else if (element.getAttribute(EnumAttributes.BackgroundImageSet)) {
        const imageSetLinks = element.getAttribute(EnumAttributes.BackgroundImageSet).split(backgroundImageDelimiter);
        let firstUrlLink = imageSetLinks[0].substr(0, imageSetLinks[0].indexOf(' ')) || imageSetLinks[0];
        firstUrlLink = firstUrlLink.indexOf('url(') === -1 ? `url(${firstUrlLink})` : firstUrlLink;

        if (imageSetLinks.length === 1) {
          element.style.backgroundImage = firstUrlLink;
        } else {
          element.setAttribute('style', `${element.getAttribute('style') || ''}background-image: ${firstUrlLink}; background-image: -webkit-image-set(${imageSetLinks}); background-image: image-set(${imageSetLinks})`);
        }
      }

      if (element.getAttribute(EnumAttributes.ToggleClass)) {
        element.classList.toggle(element.getAttribute(EnumAttributes.ToggleClass));
      }
    },

    loaded(element) {
      makeIsLoaded(element);
    }

  };
  return _exports;
}();