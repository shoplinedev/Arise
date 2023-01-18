window.SLM = window.SLM || {};

window.SLM['theme-shared/report/product/product-item.js'] = window.SLM['theme-shared/report/product/product-item.js'] || function () {
  const _exports = {};
  const { BaseReport, findSectionId } = window['SLM']['theme-shared/report/common/baseReport.js'];
  const { validParams } = window['SLM']['theme-shared/report/product/utils/index.js'];
  const get = window['lodash']['get'];
  const getCurrencyCode = window['SLM']['theme-shared/utils/currency/getCurrencyCode.js'].default;
  const { convertPrice } = window['SLM']['theme-shared/utils/currency/getCurrencyCode.js'];
  const { sectionTypeEnum } = window['SLM']['theme-shared/report/stage/const.js'];
  const { nullishCoalescingOperator } = window['SLM']['theme-shared/utils/syntax-patch.js'];

  function tryDecodeURIComponent(str) {
    try {
      return decodeURIComponent(str);
    } catch (e) {
      return str;
    }
  }

  const getTagBrandTypeReportCollectionName = title => {
    let {
      pathname
    } = window.location;
    const {
      search
    } = window.location;
    let collectionName = title;

    if (window.Shopline.routes && window.Shopline.routes.root && window.Shopline.routes.root !== '/') {
      const root = `/${window.Shopline.routes.root.replace(/\//g, '')}`;
      pathname = pathname.replace(root, '');
    }

    if (pathname === '/collections/types' || pathname === '/collections/brands') {
      collectionName = tryDecodeURIComponent(pathname.replace('/collections/', '') + search);
    } else {
      const pathnameArr = pathname.split('/');

      if (pathnameArr[pathnameArr.length - 1] === '') {
        pathnameArr.pop();
      }

      if (pathnameArr[1] === 'collections' && pathnameArr.length === 4) {
        collectionName += tryDecodeURIComponent(pathname.replace('/collections/', '') + search);
      }
    }

    return collectionName;
  };

  const pageItemMap = {
    101: {
      module: 900,
      component: 101,
      component_ID: findSectionId('[data-plugin-product-item-a]')
    },
    102: {
      module: 109,
      component: 101,
      action_type: ''
    },
    103: {
      module: 109,
      component: 101
    },
    105: {
      module: 108,
      component: 101
    }
  };

  class ProductItemReport extends BaseReport {
    itemListView(reportData) {
      validParams(reportData);
      const {
        baseParams = {},
        productsInfo
      } = reportData;
      const {
        productSortation,
        productList
      } = productsInfo;
      const productsInfoParams = {
        list_name: productSortation.id ? productSortation.sortation.sortation.title : 'All Products',
        items: productList.map(({
          reportSkuId,
          spuSeq,
          productMinPrice
        }, index) => ({
          sku_id: reportSkuId,
          spu_id: spuSeq,
          position: index + 1,
          collection_id: nullishCoalescingOperator(get(productSortation, 'sortation.sortation.sortationId'), ''),
          collection_name: getTagBrandTypeReportCollectionName(nullishCoalescingOperator(get(productSortation, 'sortation.sortation.title'), '')),
          currency: getCurrencyCode(),
          price: convertPrice(productMinPrice),
          quantity: 1
        }))
      };
      const customParams = { ...productsInfoParams
      };
      super.viewItemList({
        selector: `.__sl-custom-track-${productSortation.id ? productSortation.id : 'all-products'}`,
        ...baseParams,
        customParams
      });
    }

    itemView(reportData) {
      validParams(reportData);
      const {
        baseParams = {},
        productInfo = {},
        extInfo = {}
      } = reportData;
      const {
        reportSkuId,
        spuSeq,
        productMinPrice,
        index,
        soldOut
      } = productInfo;
      const productInfoParams = {
        sku_id: reportSkuId,
        spu_id: spuSeq,
        currency: getCurrencyCode(),
        price: convertPrice(productMinPrice),
        position: index + 1,
        status: soldOut ? 102 : 101
      };
      const params = {
        page: this.page,
        ...baseParams,
        ...productInfoParams,
        ...extInfo
      };
      super.view({
        selector: `.__sl-custom-track-product-item-${spuSeq}`,
        customParams: params
      });
    }

    itemSelect(reportData) {
      validParams(reportData);
      const {
        baseParams = {},
        productInfo
      } = reportData;
      const {
        id,
        skuId,
        price,
        index,
        name,
        moduleType
      } = productInfo;
      const productInfoParams = {
        content_ids: id,
        sku_id: skuId,
        content_name: name,
        currency: getCurrencyCode(),
        value: convertPrice(price),
        position: index + 1
      };
      const params = { ...baseParams,
        ...productInfoParams
      };

      if (this.page === 101) {
        Object.assign(params, { ...pageItemMap[101],
          module_type: nullishCoalescingOperator(sectionTypeEnum[moduleType], moduleType)
        });
      }

      super.selectContent({
        customParams: params
      });
    }

  }

  _exports.default = ProductItemReport;

  function hdProductItemSelect(reportData) {
    const hdReport = new ProductItemReport();
    const {
      baseParams = {},
      productInfo
    } = reportData;
    hdReport.itemSelect({
      baseParams: {
        component_ID: findSectionId('[data-plugin-product-item-a]'),
        ...baseParams
      },
      productInfo
    });
  }

  _exports.hdProductItemSelect = hdProductItemSelect;

  function hdProductItemView(params) {
    const hdReport = new ProductItemReport();
    const {
      sectionClass,
      moreInfo
    } = params;
    hdReport.view({
      selector: `${sectionClass} .product-item`,
      customParams: { ...pageItemMap[hdReport.page],
        ...moreInfo
      }
    });
  }

  _exports.hdProductItemView = hdProductItemView;
  return _exports;
}();