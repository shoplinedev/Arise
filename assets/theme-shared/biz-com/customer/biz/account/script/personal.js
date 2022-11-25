window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/biz/account/script/personal.js'] = window.SLM['theme-shared/biz-com/customer/biz/account/script/personal.js'] || function () {
  const _exports = {};
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const dayjs = window['dayjs']['default'];
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const { updateMemberInfo } = window['SLM']['theme-shared/biz-com/customer/service/infomation.js'];
  const Card = window['SLM']['theme-shared/biz-com/customer/commons/card/index.js'].default;
  const DatePicker = window['SLM']['theme-shared/biz-com/customer/commons/date-picker/index.js'].default;
  const { reportDropModifyPersonal, reportSavePersonal, reportEditPersion, reportChooseGender, reportChangeBirthday } = window['SLM']['theme-shared/biz-com/customer/reports/account.js'];
  const GENDER_MAP = {
    1: t('customer.account.gender_male'),
    2: t('customer.account.gender_female'),
    3: t('customer.account.gender_secret')
  };

  class Personal extends Card {
    constructor({
      id,
      editable
    }) {
      super({
        id,
        editable
      });
      const {
        birthday,
        gender
      } = SL_State.get('customer.userInfoDTO');
      this.datepicker = null;
      this.originData = {
        birthday,
        gender
      };
      this.formData = {
        birthday,
        gender
      };
      this.birthdaySelector = `#${id}-birthday`;
      this.genderSelector = `#${id}-gender`;
      this.genderRadioSelector = `#${this.id} [name="personal-gender"]`;
    }

    init() {
      let selectDate = null;
      this.datepicker = new DatePicker({
        id: 'personal-birthday-input',
        value: this.formData.birthday,
        onChange: date => {
          if (selectDate !== date) {
            selectDate = date;
            reportChangeBirthday();
          }

          this.formData.birthday = dayjs(date).format('YYYYMMDD');
        }
      });
      $(this.genderRadioSelector).on('change', () => {
        reportChooseGender();
      });
    }

    getGender() {
      return $(`${this.genderRadioSelector}:checked`).val();
    }

    onEdit() {
      reportEditPersion();
    }

    onCancel() {
      this.formData = { ...this.originData
      };
      $(`${this.genderRadioSelector}:checked`).removeProp('checked');
      $(`${this.genderRadioSelector}[value=${this.originData.gender}]`).prop('checked', 'checked');
      this.datepicker.setDate(this.originData.birthday);
      reportDropModifyPersonal();
    }

    onSave() {
      let gender = this.getGender();
      gender = gender ? parseInt(gender, 10) : 0;
      return updateMemberInfo({
        birthday: this.formData.birthday,
        gender
      }).then(() => {
        if (this.formData.birthday) {
          $(this.birthdaySelector).text(dayjs(this.formData.birthday).format('YYYY-MM-DD'));
        }

        if (GENDER_MAP[gender]) {
          $(this.genderSelector).text(GENDER_MAP[gender]);
        }

        this.originData.birthday = this.formData.birthday;
        this.originData.gender = gender;
        reportSavePersonal();
      });
    }

  }

  _exports.default = Personal;
  return _exports;
}();