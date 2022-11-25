window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/commons/date-picker/index.js'] = window.SLM['theme-shared/biz-com/customer/commons/date-picker/index.js'] || function () {
  const _exports = {};
  const AirDatepicker = window['air-datepicker']['default'];
  const Rolldate = window['rolldate']['default'];
  const dayjs = window['dayjs']['default'];
  const locale = window['SLM']['theme-shared/biz-com/customer/commons/date-picker/locale/index.js'].default;

  class DatePicker {
    constructor({
      id,
      value,
      onChange
    }) {
      this.id = id;
      this.initValue = value;
      this.onChange = onChange;
      this.init();
    }

    init() {
      this.datepicker = new AirDatepicker(`#${this.id}-pc`, {
        dateFormat: 'yyyy-MM-dd',
        classes: 'notranslate',
        locale: locale.pc,
        maxDate: new Date(),
        minDate: new Date('1900-01-01'),
        autoClose: true,
        onSelect: ({
          formattedDate
        }) => {
          this.onChange && this.onChange(dayjs(formattedDate).format('YYYY-MM-DD'));
        }
      });

      if (this.initValue) {
        this.datepicker.selectDate(dayjs(this.initValue).format('YYYY-MM-DD'));
      }

      const rollDateOptions = {
        el: `#${this.id}-mobile`,
        beginYear: '1900',
        endYear: dayjs(new Date()).format('YYYY'),
        init: () => {
          window.setTimeout(() => {
            $('.rolldate-container').addClass('notranslate');
          }, 0);
        },
        confirm: date => {
          this.onChange && this.onChange(dayjs(date).format('YYYY-MM-DD'));
        },
        lang: locale.mobile,
        trigger: 'click'
      };

      if (this.initValue) {
        rollDateOptions.value = dayjs(this.initValue).format('YYYY-MM-DD');
      }

      this.datepickerMobile = new Rolldate(rollDateOptions);
    }

    setDate(date) {
      const initDate = dayjs(date || undefined).format('YYYY-MM-DD');
      this.datepicker.selectDate(initDate);
      const $el = $(`#${this.id}-mobile`);
      $el.val(initDate);
      $el[0].bindDate = new Date(initDate);
    }

  }

  _exports.default = DatePicker;
  return _exports;
}();