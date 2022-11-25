window.SLM = window.SLM || {};

window.SLM['theme-shared/components/hbs/shared/components/tooltip/index.js'] = window.SLM['theme-shared/components/hbs/shared/components/tooltip/index.js'] || function () {
  const _exports = {};
  const throttle = window['lodash']['throttle'];

  const getTemplate = options => {
    return `
    <div class="mp-tooltip mp-tooltip--placement-top mp-tooltip--hidden ${options.mobileHide ? 'mp-tooltip-mobile--hidden' : ''} " style="z-index: ${options.zIndex}">
      <div class="mp-tooltip__content">
        <div class="mp-tooltip__arrow">
          <span class="mp-tooltip__arrow-content" style="background: ${options.color}"></span>
        </div>
        <div class="mp-tooltip__inner" style="background: ${options.color}">
          ${options.title}
        </div>
      </div>
    </div>
  `;
  };

  const defaultOptions = {
    color: '#000',
    trigger: 'hover',
    mobileHide: false
  };
  const HIDDEN_CLASSNAME = 'mp-tooltip--hidden';
  const CONTENT_CLASSNAME = 'mp-tooltip__inner';
  const ARROW_CLASSNAME = 'mp-tooltip__arrow';

  const calculationPosition = ($target, $tooltip) => {
    const offset = $target.offset();
    const width = $target.outerWidth();
    const $doc = $(document);
    const scrollTop = $doc.scrollTop();
    const scrollLeft = $doc.scrollLeft();
    let left;
    let x;
    const screenWidth = $(window).width();
    const offsetLeft = offset.left + width / 2 - scrollLeft;
    const tooltipWidth = $tooltip.outerWidth();

    if (offsetLeft <= tooltipWidth / 2) {
      left = tooltipWidth / 2 + 10;
      x = offsetLeft - 10;
    } else if (offsetLeft + tooltipWidth / 2 >= screenWidth) {
      left = screenWidth - tooltipWidth / 2 - 10;
      x = tooltipWidth - screenWidth + offsetLeft + 10;
    } else {
      left = offsetLeft;
      x = tooltipWidth / 2;
    }

    return {
      left,
      top: offset.top - scrollTop,
      x
    };
  };

  class Tooltip {
    constructor(options) {
      this.options = { ...defaultOptions,
        ...options
      };
      this.$target = $(this.options.selector);
      this.clickEventId = Math.random().toString(32).slice(-8);
      this.$tooltips = [];
      this.isShow = false;
      this.init();
    }

    static install($ = window.jQuery) {
      if (!$.fn.tooltip) {
        $.fn.extend({
          tooltip(options) {
            new Tooltip({ ...options,
              selector: this
            });
            return this;
          }

        });
      }

      return this;
    }

    init() {
      this.walk();
      const calc = throttle(() => {
        this.$tooltips.forEach(tooltip => this.setPosition($(tooltip), this.$target));
      });
      const targetContainer = this.options.targetContainer;
      const bindScrollTarget = targetContainer ? targetContainer : document;
      $(bindScrollTarget).scroll(() => {
        if (this.isShow) {
          calc();
        }
      });
      $(window).resize(() => {
        if (this.isShow) {
          calc();
        }
      });
    }

    walk() {
      const template = getTemplate(this.options);
      this.$target.each((index, item) => {
        const $item = $(item);
        const $tooltip = $(template);
        this.$tooltips.push($tooltip);
        $('body').append($tooltip);
        this.bindEvents($tooltip, $item);
      });
    }

    bindEvents($tooltip, $target) {
      const events = {
        hover: () => {
          $(document).off(`.${this.clickEventId}`);
          $target.hover(() => {
            this.setPosition($tooltip, $target);
            $tooltip.removeClass(HIDDEN_CLASSNAME);
            this.isShow = true;
          }, () => {
            $tooltip.addClass(HIDDEN_CLASSNAME);
            this.isShow = false;
          });
        },
        click: () => {
          $target.off('mouseenter mouseleave');
          $(document).on(`click.${this.clickEventId}`, event => {
            const $tar = $(event.target);

            if (!$tar.closest($target).length && !$target.hasClass(HIDDEN_CLASSNAME)) {
              $tooltip.addClass(HIDDEN_CLASSNAME);
              this.isShow = false;
            } else {
              this.setPosition($tooltip, $target);
              $tooltip.removeClass(HIDDEN_CLASSNAME);
              this.isShow = true;
            }
          });
        }
      };

      if (typeof events[this.options.trigger] === 'function') {
        events[this.options.trigger]();
      }
    }

    toggle({
      title,
      trigger
    }) {
      if (title !== undefined || title !== null) {
        this.options.title = title;
        this.$tooltips.forEach(item => {
          $(item).find(`.${CONTENT_CLASSNAME}`).html(title);
        });
      }

      if (trigger) {
        this.options.trigger = trigger;
        this.$target.each((index, item) => {
          const $item = $(item);
          const $tooltip = this.$tooltips[index];
          this.bindEvents($tooltip, $item);
        });
      }
    }

    setPosition($tooltip, $target) {
      const offset = calculationPosition($target, $tooltip);
      $tooltip.css({
        left: offset.left,
        top: offset.top
      });
      $tooltip.find(`.${ARROW_CLASSNAME}`).css({
        left: offset.x
      });
    }

    show(title) {
      this.$tooltips.forEach(item => {
        $(item).removeClass(HIDDEN_CLASSNAME).find(`.${CONTENT_CLASSNAME}`).html(title);
      });
      this.isShow = true;
    }

    hide() {
      this.$tooltips.forEach(item => {
        $(item).addClass(HIDDEN_CLASSNAME);
      });
      this.isShow = false;
    }

    destroy() {
      this.isShow = false;
      this.$tooltips.forEach(item => {
        $(item).remove();
      });
    }

  }

  _exports.default = Tooltip;
  return _exports;
}();