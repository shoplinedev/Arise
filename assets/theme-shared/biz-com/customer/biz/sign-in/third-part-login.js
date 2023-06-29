window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/biz/sign-in/third-part-login.js'] = window.SLM['theme-shared/biz-com/customer/biz/sign-in/third-part-login.js'] || function () {
  const _exports = {};
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const { uniqueObjectArray, getRedirectUrl } = window['SLM']['theme-shared/biz-com/customer/utils/helper.js'];
  const { stringifyUrl } = window['SLM']['theme-shared/biz-com/customer/utils/url.js'];
  const { THIRD_EXTRA_PARAMS, THIRD_DEFAULT_REGION, CHANNEL_TO_METHOD } = window['SLM']['theme-shared/biz-com/customer/constant/const.js'];
  const { THIRD_LOGIN_HREF, SIGN_IN } = window['SLM']['theme-shared/biz-com/customer/constant/url.js'];
  const { redirectTo } = window['SLM']['theme-shared/biz-com/customer/helpers/format.js'];
  const { thirdLoginAndBind, thirdLoginAndBindByBindToken, bindUidAccountMix, saveThirdChannelInfo } = window['SLM']['theme-shared/biz-com/customer/service/index.js'];
  const THIRD_BUTTON_CLASS = 'sign-in__third-button';

  class ThirdPartLogin {
    constructor({
      formId,
      form,
      isModal,
      $$reports
    }) {
      this.form = form;
      this.formId = formId;
      this.isModal = isModal;
      this.$$reports = $$reports;
      this.init();
    }

    init() {
      this.initThirdPartUrls();
    }

    initThirdPartUrls() {
      const $btns = $(`#${this.formId} .${THIRD_BUTTON_CLASS}`);
      const thirdPartUrls = this.formatThirdPartUrls();

      if (thirdPartUrls && thirdPartUrls.length < 1) {
        return;
      }

      $btns.each((index, item) => {
        const name = $(item).data('name');
        const third = thirdPartUrls.find(({
          type
        }) => type === name);

        if (name && third) {
          $(item).attr('href', third && third.url);
        }

        $(item).click(() => this.$$reports.reportClickThirdPartLogin && this.$$reports.reportClickThirdPartLogin(name));
      });
    }

    formatThirdPartUrls() {
      const storeRegisterConfig = SL_State && SL_State.get('shop.store_register_config');
      const {
        thirdLoginConfigVos,
        platformChannelId,
        types,
        subAppid
      } = storeRegisterConfig;
      const {
        countryCode = THIRD_DEFAULT_REGION
      } = SL_State && SL_State.get('customer_address');
      const {
        appid: SLAppid
      } = this.form.configs;
      const THIRD_REDIRET_URL = `${window.location.origin}${redirectTo(SIGN_IN)}`;

      if (!thirdLoginConfigVos) {
        return [];
      }

      const filterByName = ({
        name
      }) => types.includes(name);

      return uniqueObjectArray(thirdLoginConfigVos, 'name', filterByName).map(({
        name,
        appId
      }) => ({
        type: name,
        url: stringifyUrl(THIRD_LOGIN_HREF[name], {
          response_type: 'code',
          client_id: appId,
          state: {
            appid: SLAppid,
            subappid: subAppid,
            tokenType: '0',
            region: countryCode.toUpperCase(),
            channel: name,
            thirdappid: appId,
            authUrl: THIRD_REDIRET_URL,
            redirectUrl: this.isModal ? window.encodeURIComponent(window.location.href) : getRedirectUrl()
          },
          redirect_uri: THIRD_REDIRET_URL,
          ...THIRD_EXTRA_PARAMS[name],
          ...(name === 'facebook' && platformChannelId && {
            messenger_page_id: platformChannelId,
            scope: 'user_messenger_contact'
          })
        })
      }));
    }

    async thirdPlatformCallback(code, state, callback) {
      let states = {};

      try {
        states = JSON.parse(state);
        const {
          data,
          stoken
        } = await thirdLoginAndBind({
          token: code,
          ...states,
          eventid: this.form.eid,
          firstLoginCheck: true
        });

        if (data.processCode === 0) {
          callback && callback(window.decodeURIComponent(data.ck.osudb_nickname));
        } else if (data.processCode === 1) {
          const {
            data: mixData
          } = await bindUidAccountMix({
            appid: states.appid,
            stoken
          });

          if (mixData.processCode === 0) {
            callback && callback(window.decodeURIComponent(mixData.ck.osudb_nickname));
          }
        } else if (data.processCode === 2 || data.processCode === 3) {
          const {
            data: bindData
          } = await thirdLoginAndBindByBindToken({
            appid: states.appid,
            stoken
          });

          if (bindData.processCode === 0) {
            callback && callback(window.decodeURIComponent(bindData.ck.osudb_nickname));
          }
        }
      } catch (e) {
        const $container = $('.customer-sign-in-container');
        $container && $container.removeClass('show-loading');
        this.form.setError(e);
      }
    }

    saveThirdChannelInfo(state, {
      isFirst,
      thirdNickName
    }) {
      let stateObject = {};
      let method = '';

      try {
        stateObject = JSON.parse(state);
      } catch (e) {
        stateObject = {};
      }

      if (stateObject && stateObject.channel) {
        method = CHANNEL_TO_METHOD[stateObject && stateObject.channel];
      }

      if (isFirst) {
        this.$$reports && this.$$reports.thirdReportSignUpSuccess && this.$$reports.thirdReportSignUpSuccess(this.form.eid, method);
      }

      return {
        saveInfo: saveThirdChannelInfo({
          firstLoginFlag: isFirst,
          channel: stateObject && stateObject.channel,
          nickName: isFirst ? thirdNickName || '' : null
        }),
        method
      };
    }

  }

  _exports.default = ThirdPartLogin;
  return _exports;
}();