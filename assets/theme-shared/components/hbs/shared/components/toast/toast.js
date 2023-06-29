window.SLM = window.SLM || {};

window.SLM['theme-shared/components/hbs/shared/components/toast/toast.js'] = window.SLM['theme-shared/components/hbs/shared/components/toast/toast.js'] || function () {
  const _exports = {};
  const LOADING = 'loading';
  _exports.LOADING = LOADING;

  function whichAnimationEndEvent() {
    let t,
        el = document.createElement('fakeelement');
    const animations = {
      animation: 'animationend',
      OAnimation: 'oAnimationEnd',
      MozAnimation: 'animationend',
      WebkitAnimation: 'webkitAnimationEnd'
    };

    for (t in animations) {
      if (el.style[t] !== undefined) {
        return animations[t];
      }
    }
  }

  const getTemplate = (options, type = 'default') => {
    const loadingColor = options.loadingColor || 'black';
    const templates = {
      [LOADING]: `
      <div class="mp-toast mp-toast--loading mp-toast--loading-style2 mp-toast__hidden ${options.fullscreen && 'mp-toast__fullscreen'} ${options.className || ''}">
        <div class="mp-loading mp-loading--circular mp-toast__loading">
          <span class="mp-loading__spinner mp-loading__spinner--circular">
            <svg class="mp-loading__circular" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.3333 9.99999C18.3333 14.6024 14.6024 18.3333 10 18.3333C5.39762 18.3333 1.66666 14.6024 1.66666 9.99999C1.66666 5.39762 5.39762 1.66666 10 1.66666" stroke="${loadingColor}" stroke-width="2.5" stroke-linecap="round"/>
            </svg>
          </span>
        </div>
        <div class="mp-toast__content mp-toast__text">${options.content}</div>
      </div>
    `,
      showSuccess: `
      <div class="mp-toast mp-toast--loading mp-toast--success-container mp-toast--loading-style2 ${options.className || ''}">
        <div class="mp-loading mp-loading--circular mp-toast__loading">
          <div class="mp-loading__success-box">
            <svg class="arrow" width="20" height="20" viewBox="0 0 20 20">
              <circle cx="10" cy="10" r="8.75" fill="none" stroke="${loadingColor}" stroke-width="2.5" class="circle"></circle>
              <polyline points="4.5,10 9,14 14.5,6.5" fill="none" stroke="${loadingColor}" stroke-width="2.5" class="hookmark" stroke-linecap="round" stroke-linejoin="round"
              ></polyline>
            </svg>
          </div>
        </div>
      </div>
    `,
      default: `
      <div class="comment-toast mp-toast mp-toast__hidden ${options.fullscreen && 'mp-toast__fullscreen'} ${options.className || ''}">
        <div class="mp-toast__content mp-toast__inner">${options.content}</div>
      </div>
    `
    };
    return templates[type];
  };

  _exports.getTemplate = getTemplate;
  const OPTION_TARGET = 'body';
  const defaultOptions = {
    duration: 1500,
    content: '',
    target: OPTION_TARGET
  };
  const HIDDEN_CLASSNAME = 'mp-toast__hidden';
  _exports.HIDDEN_CLASSNAME = HIDDEN_CLASSNAME;
  const CONTENT_CLASSNAME = 'mp-toast__content';
  _exports.CONTENT_CLASSNAME = CONTENT_CLASSNAME;

  class Toast {
    constructor(options = {}) {
      this.options = { ...defaultOptions,
        fullscreen: !options.target || options.target === OPTION_TARGET,
        ...options
      };
      this.$toast = null;
      this.$target = null;
      this.timer = null;
      this.instance = null;
      this.render();
    }

    static init(options) {
      return this.getSingleton(options);
    }

    static loading(options) {
      return this.getSingleton(options, LOADING);
    }

    static getSingleton(options = {}, type) {
      let {
        instance
      } = this;

      if (!instance) {
        instance = new Toast(options);
        this.instance = instance;
      }

      if (instance.type !== type) {
        instance.type = type;

        if (instance.$toast) {
          instance.$toast.remove();
        }

        instance.render();
      }

      instance.open(options.content || '', options.duration);
      return instance;
    }

    render() {
      const templateType = this.type || this.options.type;
      const template = getTemplate(this.options, templateType);
      const $template = $(template);
      const templateClass = $template.attr('class');
      this.$target = $(this.options.target);
      const {
        $target
      } = this;

      if ($target.css('position') === 'static') {
        $target.css('position', 'relative');
      }

      $target.append($template);
      this.$toast = templateType === LOADING ? $target.find(`[class="${templateClass}"]`) : $template;
    }

    open(content = '', duration) {
      const {
        options,
        $target
      } = this;

      if ($target.css('position') === 'static') {
        $target.css('position', 'relative');
      }

      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }

      const {
        $toast
      } = this;
      const $text = $toast.find(`.${CONTENT_CLASSNAME}`);
      $text.html(content || this.options.content || '');
      $toast.removeClass(HIDDEN_CLASSNAME);
      const durationTime = typeof duration === 'number' ? duration : options.duration;

      if (durationTime !== 0) {
        this.timer = setTimeout(this.close.bind(this), durationTime);
      }
    }

    close() {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }

      this.$toast.addClass(HIDDEN_CLASSNAME);

      if (typeof this.options.onClose === 'function') {
        this.options.onClose();
      }

      this.$target.css('position', '');
    }

    showSuccessAni(options = {}, callback) {
      const {
        $target
      } = this;
      this.close();
      const buttonTxt = $target.find('.pdp_button_text');
      buttonTxt.addClass('showSuccessAni');
      const successAniTemp = getTemplate(options, 'showSuccess');
      $target.append(successAniTemp);
      const hookWrapDom = $target.find('.mp-toast--success-container');
      const hookNode = $target.find('.hookmark');

      if (hookNode.length > 0) {
        const animationEnd = whichAnimationEndEvent();
        hookNode.one(animationEnd, function (event) {
          if (callback && typeof callback === 'function') {
            setTimeout(() => {
              hookWrapDom.remove();
              buttonTxt.removeClass('showSuccessAni');
              callback(event, $target);
            }, options.delay || 0);
          }
        });
      }
    }

  }

  Toast.type = null;
  _exports.default = Toast;
  return _exports;
}();