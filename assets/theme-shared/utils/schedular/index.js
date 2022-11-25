window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/schedular/index.js'] = window.SLM['theme-shared/utils/schedular/index.js'] || function () {
  const _exports = {};
  const { TaskScheduler } = window['SLM']['theme-shared/utils/schedular/taskScheduler.js'];
  window.__SL_SCHEDULER__ = new TaskScheduler({
    ensureTasksRun: true,
    defaultMinTaskTime: 20
  });

  window.SLM_DEFINE = function slmDefine(moduleName, defineFunction) {
    window.SLM = window.SLM || {};
    window.SLM[moduleName] = window.SLM[moduleName] || defineFunction.apply(window);
  };

  return _exports;
}();