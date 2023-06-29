window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/commons/card/index.js'] = window.SLM['theme-shared/biz-com/customer/commons/card/index.js'] || function () {
  const _exports = {};

  class Card {
    constructor({
      id,
      editable = false
    }) {
      this.id = id;
      this.editable = editable;

      if (editable) {
        this.editIconSelector = `#${id} .sl-card__head--edit-icon`;
        this.detailEleSelector = `#${id} [data-show="detail"]`;
        this.editEleSelector = `#${id} [data-show="edit"]`;
        this.cancelBtnSelector = `#${id} .sl-card__footer--btn-cancel`;
        this.saveBtnSelector = `#${id} .sl-card__footer--btn-save`;
      }

      setTimeout(() => this.initCard(), 0);
    }

    initCard() {
      if (this.editable) {
        $(this.editIconSelector).on('click', () => {
          this.onEdit && this.onEdit();
          $(this.detailEleSelector).hide();
          $(this.editEleSelector).show();
        });
        $(this.cancelBtnSelector).on('click', () => {
          this.onCancel && this.onCancel();
          $(this.detailEleSelector).show();
          $(this.editEleSelector).hide();
        });
        $(this.saveBtnSelector).on('click', async () => {
          $(this.saveBtnSelector).addClass('disabled btn--loading');

          try {
            await (this.onSave && this.onSave());
            $(this.detailEleSelector).show();
            $(this.editEleSelector).hide();
          } catch (err) {}

          $(this.saveBtnSelector).removeClass('disabled btn--loading');
        });
      }

      new Promise(resolve => resolve()).then(() => {
        this.init && this.init();
      });
    }

  }

  _exports.default = Card;
  return _exports;
}();