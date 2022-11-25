import * as dayjs from 'dayjs';
import dayjs_plugin_utc from 'dayjs/plugin/utc';
import dayjs_plugin_timezone from 'dayjs/plugin/timezone';
window['dayjs'] = {
  'default': dayjs.default,
  '*': dayjs,
  '/plugin/utc': {
    'default': dayjs_plugin_utc
  },
  '/plugin/timezone': {
    'default': dayjs_plugin_timezone
  }
};