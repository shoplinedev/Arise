window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/constant/report.js'] = window.SLM['theme-shared/biz-com/customer/constant/report.js'] || function () {
  const _exports = {};
  const loginModalPageIdMap = {
    Home: 101,
    Products: 103,
    ProductsDetail: 105,
    ProductsSearch: 102,
    Center: 123,
    Cart: 106,
    NotFound: 130,
    Custom: 118
  };
  _exports.loginModalPageIdMap = loginModalPageIdMap;
  const pageMap = {
    SignIn: 128,
    SignOut: '',
    SignUp: 129,
    Bind: {
      phone: 135,
      email: 136
    },
    AddressNew: '',
    AddressEdit: 171,
    PasswordNew: 167,
    PasswordNewReset: 168,
    PasswordReset: 134,
    Message: 124,
    Center: 123,
    UnsubFeedback: '',
    LoginModal: 166,
    OrderList: 172
  };
  _exports.pageMap = pageMap;
  const ActionType = {
    view: 101,
    click: 102,
    input: 103,
    heartbeat: 106,
    check: 107,
    default: -999
  };
  _exports.ActionType = ActionType;
  const EventName = {
    login: 'Login',
    register: 'CompleteRegistration'
  };
  _exports.EventName = EventName;
  const Module = {
    normal: -999,
    loginModal: {
      register: 141,
      login: 142
    },
    userCenter: {
      account: 101,
      subscribe: 102,
      information: 103,
      address: 104
    }
  };
  _exports.Module = Module;
  const LOGIN_CID = '60079992';
  _exports.LOGIN_CID = LOGIN_CID;
  return _exports;
}();