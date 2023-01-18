window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/biz/address/address-component/adapter.js'] = window.SLM['theme-shared/biz-com/customer/biz/address/address-component/adapter.js'] || function () {
  const _exports = {};
  const { createCacheableServiceBuilder, createShoplineServiceBuilder } = window['@sl/address-autocomplete'];
  const { request } = window['SLM']['theme-shared/biz-com/customer/helpers/request.js'];
  const { LOGISTICS_COUNTRIES, LOGISTICS_ADDRESS_LIBRARY, LOGISTICS_ADDRESS_LAYER, LOGISTICS_ADDRESS_TEMPLATE, PLACE_AUTOCOMPLETE, PLACE_DETAIL } = window['SLM']['theme-shared/biz-com/customer/constant/url.js'];
  const { getLanguage } = window['SLM']['theme-shared/biz-com/customer/utils/helper.js'];
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];

  function createAdapter() {
    const presetAddressTemplate = SL_State.get('customer_address_template');
    return {
      countrySource: {
        async getCountryList() {
          const res = await request.get(LOGISTICS_COUNTRIES, {
            params: {
              popularType: 'receiving'
            }
          });

          if (res.success !== true) {
            return res;
          }

          return { ...res,
            data: (res.data || []).map(country => unmarshalCountryLevelInfo(country, getLanguage()))
          };
        }

      },
      addressBookFetcher: {
        async getAddressBook(countryCode, fieldName, code, depth) {
          if (fieldName === 'country') {
            return request.get(LOGISTICS_ADDRESS_LIBRARY, {
              params: {
                countryCode,
                level: depth == null ? 3 : depth,
                language: getLanguage()
              }
            });
          }

          if (!code) {
            return {
              success: true,
              code: 'SUCCESS',
              data: []
            };
          }

          return request.get(LOGISTICS_ADDRESS_LAYER, {
            params: {
              countryCode,
              addressCode: code,
              depth: depth || 1,
              language: getLanguage()
            }
          });
        }

      },
      addressTemplateFetcher: {
        async getAddressTemplate(countryCode) {
          if (presetAddressTemplate && presetAddressTemplate.country === countryCode) {
            return {
              success: true,
              code: 'success',
              data: presetAddressTemplate
            };
          }

          return request.get(LOGISTICS_ADDRESS_TEMPLATE, {
            params: {
              country: countryCode,
              lang: getLanguage()
            }
          });
        }

      }
    };
  }

  _exports.createAdapter = createAdapter;

  function createAutocompleteService() {
    const cacheableAutocompleteServiceBuilder = createCacheableServiceBuilder({
      onError(msg, data) {
        console.error(msg, data);
      }

    });
    const shoplineAutocompleteServiceBuilder = createShoplineServiceBuilder({
      autocomplete(params) {
        return request.get(PLACE_AUTOCOMPLETE, {
          params
        });
      },

      detail(params) {
        return request.get(PLACE_DETAIL, {
          params
        });
      }

    });
    return cacheableAutocompleteServiceBuilder.build(shoplineAutocompleteServiceBuilder.build(getLanguage()));
  }

  _exports.createAutocompleteService = createAutocompleteService;

  function unmarshalCountryLevelInfo(country, language) {
    let {
      name
    } = country;
    const i18nCountryInfos = country.countryInfos || {};
    const localCountryInfo = language ? i18nCountryInfos[language] : null;

    if (localCountryInfo != null && localCountryInfo.name) {
      name = localCountryInfo.name;
    }

    return {
      code: country.countryCode,
      name
    };
  }

  return _exports;
}();