import { Owner as yy_sl_theme_shared_utils_logger_sentry_report_owner, Action as yy_sl_theme_shared_utils_logger_sentry_report_action } from '@yy/sl-theme-shared/utils/logger/sentryReport';
import yy_sl_theme_shared_utils_logger from '@yy/sl-theme-shared/utils/logger';
import yy_sl_theme_shared_utils_logger_sentry, { Status as yy_sl_theme_shared_utils_logger_sentry_status } from '@yy/sl-theme-shared/utils/logger/sentry';
import yy_sl_theme_shared_events_data_report_view_content from '@yy/sl-theme-shared/events/data-report/view-content';
import yy_sl_theme_shared_events_data_report_add_to_cart from '@yy/sl-theme-shared/events/data-report/add-to-cart';
import yy_sl_theme_shared_components_paypal from '@yy/sl-theme-shared/components/paypal';
import * as yy_sl_theme_shared_events_data_report_enum from '@yy/sl-theme-shared/events/data-report/enum';
import yy_sl_theme_shared_events_data_report_adapters from '@yy/sl-theme-shared/events/data-report/adapters';
window['@yy/sl-theme-shared'] = {
  '/utils/logger/sentryReport': {
    'Owner': yy_sl_theme_shared_utils_logger_sentry_report_owner,
    'Action': yy_sl_theme_shared_utils_logger_sentry_report_action
  },
  '/utils/logger': {
    'default': yy_sl_theme_shared_utils_logger
  },
  '/utils/logger/sentry': {
    'Status': yy_sl_theme_shared_utils_logger_sentry_status,
    'default': yy_sl_theme_shared_utils_logger_sentry
  },
  '/events/data-report/view-content': {
    'default': yy_sl_theme_shared_events_data_report_view_content
  },
  '/events/data-report/add-to-cart': {
    'default': yy_sl_theme_shared_events_data_report_add_to_cart
  },
  '/components/paypal': {
    'default': yy_sl_theme_shared_components_paypal
  },
  '/events/data-report/enum': {
    'default': yy_sl_theme_shared_events_data_report_enum.default,
    '*': yy_sl_theme_shared_events_data_report_enum
  },
  '/events/data-report/adapters': {
    'default': yy_sl_theme_shared_events_data_report_adapters
  }
};