window.SLM = window.SLM || {};

window.SLM['theme-shared/components/hbs/active/js/renderActiveTag.js'] = window.SLM['theme-shared/components/hbs/active/js/renderActiveTag.js'] || function () {
  const _exports = {};
  const ACTIVE_TYPE = {
    VIP: 'vip'
  };

  const template = activeType => {
    switch (activeType) {
      case ACTIVE_TYPE.VIP:
        return `
        <svg viewBox="0 0 23 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.5 1C0.5 0.447715 0.947715 0 1.5 0H21.5C22.0523 0 22.5 0.447715 22.5 1V11C22.5 11.5523 22.0523 12 21.5 12H1.5C0.947716 12 0.5 11.5523 0.5 11V1Z" fill="#3B3836"/>
          <path d="M4.10022 2.78223H5.59827L7.08538 7.16694L8.57249 2.78223H10.0705L7.65398 9.12489H6.50584L4.10022 2.78223Z" fill="#FFD8A2"/>
          <path d="M10.8219 2.78223H12.2543V9.12489H10.8219V2.78223Z" fill="#FFD8A2"/>
          <path d="M16.4285 2.78223C17.1939 2.78223 17.7953 2.95995 18.2327 3.31538C18.6774 3.67082 18.8997 4.15801 18.8997 4.77695C18.8997 5.36526 18.6774 5.83712 18.2327 6.19256C17.7953 6.54186 17.1939 6.71652 16.4285 6.71652H15.0398V9.12489H13.6074V2.78223H16.4285ZM16.3629 5.65941C16.7055 5.65941 16.9752 5.58281 17.1721 5.4296C17.3689 5.2764 17.4673 5.05885 17.4673 4.77695C17.4673 4.47054 17.3689 4.23767 17.1721 4.07834C16.9825 3.91288 16.7128 3.83015 16.3629 3.83015H15.0398V5.65941H16.3629Z" fill="#FFD8A2"/>
        </svg>     
      `;

      default:
        return '';
    }
  };

  const defaultOption = {
    types: 'vip'
  };

  class RenderActiveTag {
    constructor(option = {}) {
      this.option = { ...defaultOption,
        ...option
      };
      this.init();
      this.bindEventListeners();
    }

    init() {
      this.option.types.split(',').forEach(type => {
        this.renderActiveTag(type);
      });
    }

    bindEventListeners() {
      window.SL_EventBus.on('global.activeIcon.show', data => {
        this.renderActiveTag(data.type);
      });
    }

    renderActiveTag(type) {
      const tags = $('[data-' + type + '-tag]');
      const tpl = template(type);

      for (const tag of tags) {
        tag.innerHTML = tpl;
      }
    }

  }

  _exports.default = RenderActiveTag;
  return _exports;
}();