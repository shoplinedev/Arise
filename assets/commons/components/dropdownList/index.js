window.SLM = window.SLM || {};

window.SLM['commons/components/dropdownList/index.js'] = window.SLM['commons/components/dropdownList/index.js'] || function () {
  const _exports = {};
  const { nullishCoalescingOperator } = window['SLM']['theme-shared/utils/syntax-patch.js'];
  const defaultOptions = {
    triggerClass: 'global-dropdown-list__head',
    dropdownListClass: 'global-dropdown-list__main',
    opendClass: 'is-open',
    closedClass: 'is-close'
  };

  class DropdownList {
    constructor(id) {
      this.id = id;
      this.options = { ...defaultOptions
      };

      this._initSelector();
    }

    get status() {
      return this._doActionWithCheck(() => {
        return this.container.hasClass(this.options.opendClass);
      }, false);
    }

    get disabled() {
      return this.container.attr('data-disabled') === 'true';
    }

    set disabled(disabled) {
      this.container.attr('data-disabled', String(!!disabled));
    }

    _initSelector() {
      const {
        id,
        options
      } = this;
      Object.assign(this, getTargetElement($(`#${id}`), options));
    }

    _doActionWithCheck(action, errorReturnValue) {
      if (this.container.length && this.trigger.length && this.dropdownList.length) {
        return action();
      }

      return nullishCoalescingOperator(errorReturnValue, this);
    }

    toggle(flag, effect = true) {
      return this._doActionWithCheck(() => {
        const {
          dropdownList,
          container,
          trigger,
          options
        } = this;
        const nowOptions = { ...options,
          trigger,
          container,
          dropdownList
        };
        if (effect) closeOtherReleased(nowOptions);
        toggle(nowOptions, flag);
      });
    }

  }

  function getTargetElement(container, options) {
    const {
      triggerClass,
      dropdownListClass
    } = options;
    const trigger = container.find(`.${triggerClass}`);
    const dropdownList = container.find(`.${dropdownListClass}`);
    return {
      container,
      trigger,
      dropdownList
    };
  }

  function toggle(options, flag) {
    const {
      container,
      dropdownList,
      opendClass,
      closedClass
    } = options;
    const isDisabled = container.attr('data-disabled') === 'true';
    const isOpen = flag == null ? !container.hasClass(opendClass) : flag;
    if (isDisabled) return;
    dropdownList.css('height', isOpen ? dropdownList.prop('scrollHeight') : '');

    if (isOpen) {
      container.addClass(opendClass).removeClass(closedClass);
    } else {
      container.addClass(closedClass).removeClass(opendClass);
    }
  }

  function closeOtherReleased(options) {
    const {
      container
    } = options;
    const attr = 'global-dropdown-list-related-id';
    const relatedId = container.data(attr);

    if (relatedId) {
      $(`[data-${attr}=${relatedId}]`).each((_idx, element) => {
        if (element === container[0]) return;
        toggle({ ...options,
          ...getTargetElement($(element), options)
        }, false);
      });
    }
  }

  $(function () {
    function openHandler(event) {
      const trigger = $(event.currentTarget);
      const container = trigger.parent('.global-dropdown-list');
      const dropdownList = trigger.siblings('.global-dropdown-list__main');
      const options = { ...defaultOptions,
        relatedId: container.data('global-dropdown-list-related-id'),
        container,
        trigger,
        dropdownList
      };
      closeOtherReleased(options);
      toggle(options);
    }

    $('body').on('click', `.global-dropdown-list .${defaultOptions.triggerClass}`, openHandler);
  });
  _exports.default = DropdownList;
  return _exports;
}();