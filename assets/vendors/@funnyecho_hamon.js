import { SyncHook as funnyecho_hamon_sync_hook, AsyncSeriesBailHook as funnyecho_hamon_async_series_bail_hook } from '@funnyecho/hamon';
window['@funnyecho/hamon'] = {
  'SyncHook': funnyecho_hamon_sync_hook,
  'AsyncSeriesBailHook': funnyecho_hamon_async_series_bail_hook
};