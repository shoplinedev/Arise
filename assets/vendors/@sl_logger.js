import { ErrorLevel as sl_logger_error_level, LogStatus as sl_logger_log_status, Logger as sl_logger_logger } from '@sl/logger';
window['@sl/logger'] = {
  'ErrorLevel': sl_logger_error_level,
  'LogStatus': sl_logger_log_status,
  'Logger': sl_logger_logger
};