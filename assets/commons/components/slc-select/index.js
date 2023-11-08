window.SLM = window.SLM || {};
window.SLM['commons/components/slc-select/index.js'] = window.SLM['commons/components/slc-select/index.js'] || function () {
  const _exports = {};
  const { defineCustomElement } = window['SLM']['commons/utils/element.js'];
  const isMobile = window['SLM']['commons/utils/isMobile.js'].default;
  class SlcSelect extends HTMLElement {
    constructor() {
      super();
      this.detailsContainer = this.querySelector('details');
      this.summaryToggle = this.querySelector('summary');
      this.contentElement = this.detailsContainer.querySelector('.slc-select__content');
      this.optionElements = Array.from(this.contentElement.querySelectorAll('.slc-select__option'));
      this.summaryToggle.setAttribute('role', 'button');
    }
    connectedCallback() {
      this.detailsContainer.setAttribute('data-init', true);
      this.mobileDetailsContainer = this.createMobileContainer();
      this.summaryToggle.addEventListener('click', this.onSummaryClick.bind(this));
      this.detailsContainer.addEventListener('keyup', event => event.code.toUpperCase() === 'ESCAPE' && this.close());
      this.mobileDetailsContainer.addEventListener('keyup', event => event.code.toUpperCase() === 'ESCAPE' && this.close());
      this.optionElements.forEach(option => option.addEventListener('click', this.onOptionClick.bind(this)));
    }
    disconnectedCallback() {
      const {
        mobileDetailsContainer
      } = this;
      mobileDetailsContainer.parentNode.removeChild(mobileDetailsContainer);
    }
    get isOpen() {
      return this.detailsContainer.hasAttribute('open');
    }
    onSummaryClick(event) {
      event.preventDefault();
      this.isOpen ? this.close() : this.open(event);
    }
    onBodyClick(event) {
      if (!(this.mobileDetailsContainer.contains(event.target) || this.detailsContainer.contains(event.target)) || event.target.classList.contains('slc-select__overlay')) {
        this.close(event);
      }
    }
    onOptionClick(event) {
      event.preventDefault();
      const currentOption = event.currentTarget;
      const isSelected = currentOption.hasAttribute('selected');
      this.optionElements.forEach(option => {
        if (option !== currentOption) {
          option.removeAttribute('selected');
        } else {
          option.setAttribute('selected', 'true');
        }
      });
      if (!isSelected) {
        this.dispatchEvent(new CustomEvent('change', {
          detail: currentOption.dataset.value,
          bubbles: true
        }));
        this.close();
      }
    }
    doAnimate(isClose = false) {
      let timer;
      return new Promise(resolve => {
        const onAnimationend = event => {
          if (event && event.target !== this.contentElement) return;
          this.contentElement.removeAttribute('style');
          this.contentElement.removeEventListener('animationend', onAnimationend);
          resolve();
          clearTimeout(timer);
        };
        requestAnimationFrame(() => {
          if (isClose) {
            this.contentElement.style.animationDirection = 'reverse';
          }
          this.contentElement.style.animationName = 'var(--animation-name, select-slide-in)';
          this.contentElement.addEventListener('animationend', onAnimationend);
          timer = setTimeout(onAnimationend, 300);
        });
      });
    }
    createMobileContainer() {
      const {
        detailsContainer
      } = this;
      const container = detailsContainer.cloneNode(false);
      const summary = document.createElement('summary');
      container.appendChild(summary);
      container.setAttribute('data-clone', true);
      document.body.appendChild(container);
      return container;
    }
    mountContainer() {
      const {
        detailsContainer,
        mobileDetailsContainer
      } = this;
      let fromContainer = mobileDetailsContainer;
      let toContainer = detailsContainer;
      if (isMobile()) {
        fromContainer = detailsContainer;
        toContainer = mobileDetailsContainer;
      }
      Array.from(fromContainer.children).forEach(node => {
        if (node.tagName.toLowerCase() !== 'summary') {
          toContainer.appendChild(node);
        }
      });
    }
    open() {
      this.mountContainer();
      this.onBodyClickEvent = this.onBodyClickEvent || this.onBodyClick.bind(this);
      this.detailsContainer.setAttribute('open', true);
      this.mobileDetailsContainer.setAttribute('open', true);
      document.body.addEventListener('click', this.onBodyClickEvent);
      isMobile() && document.body.classList.add('overflow-hidden');
      return this.doAnimate();
    }
    close() {
      if (!this.isOpen) return Promise.resolve();
      return this.doAnimate(true).then(() => {
        this.detailsContainer.removeAttribute('open');
        this.mobileDetailsContainer.removeAttribute('open');
        document.body.removeEventListener('click', this.onBodyClickEvent);
        document.body.classList.remove('overflow-hidden');
      });
    }
  }
  defineCustomElement('slc-select', () => SlcSelect);
  return _exports;
}();