window.SLM = window.SLM || {};

window.SLM['cart/script/report/cartReport.js'] = window.SLM['cart/script/report/cartReport.js'] || function () {
  const _exports = {};
  const Cookie = window['js-cookie']['default'];
  const { TradeReport } = window['SLM']['theme-shared/utils/tradeReport/index.js'];
  const { ClickType } = window['SLM']['theme-shared/utils/report/const.js'];
  const currencyUtil = window['SLM']['theme-shared/utils/newCurrency/index.js'].default;
  const { Owner, Action } = window['@yy/sl-theme-shared']['/utils/logger/sentryReport'];
  const { convertPrice } = window['SLM']['theme-shared/utils/currency/getCurrencyCode.js'];
  const LoggerService = window['SLM']['commons/logger/index.js'].default;
  const { Status: LoggerStatus } = window['SLM']['commons/logger/index.js'];
  const logger = LoggerService.pipeOwner(`${Owner.Cart} report/cartReport.js`);
  const cartToken = Cookie.get('t_cart');

  class CartReport extends TradeReport {
    setRemoveItemParams(params, extraItems) {
      logger.info(`normal 主站购物车 数据上报 设置移除商品 params setRemoveItemParams`, {
        data: {
          cartToken,
          params,
          extraItems
        },
        action: Action.EditCart,
        status: LoggerStatus.Start
      });
      const res = {
        productItems: [],
        value: 0
      };

      if (Array.isArray(params)) {
        params.forEach(({
          skuId,
          num,
          price,
          name,
          skuAttr,
          itemNo,
          customCategoryName
        }) => {
          res.value += currencyUtil.unformatCurrency(convertPrice(price)) * num;
          res.productItems.push({
            skuId: itemNo || skuId,
            quantity: num,
            price: convertPrice(price || 0).toString(),
            name,
            variant: (skuAttr || []).join(','),
            customCategoryName
          });
        });
      } else {
        const product = {
          skuId: (params && params.itemNo ? params.itemNo : undefined) || (params && params.skuId ? params.skuId : undefined),
          quantity: params && params.num ? params.num : undefined,
          price: convertPrice(params.price || 0).toString(),
          name: params && params.name ? params.name : undefined,
          variant: (params && params.skuAttr ? params.skuAttr : []).join(','),
          customCategoryName: params && params.customCategoryName ? params.customCategoryName : ''
        };
        res.value += currencyUtil.unformatCurrency(convertPrice(params.price)) * (params && params.num ? params.num : 0);
        res.productItems.push(product);
      }

      if (Array.isArray(extraItems)) {
        extraItems.forEach(({
          skuId,
          num,
          price,
          name,
          skuAttr,
          itemNo,
          customCategoryName
        }) => {
          res.value += currencyUtil.unformatCurrency(convertPrice(price)) * num;
          res.productItems.push({
            skuId: itemNo || skuId,
            quantity: num,
            price: convertPrice(price || 0).toString(),
            name,
            variant: (skuAttr || []).join(','),
            customCategoryName
          });
        });
      }

      res.value = currencyUtil.formatCurrency(res.value || 0).toString();
      logger.info(`normal 主站购物车 数据上报 设置移除商品 params setRemoveItemParams`, {
        data: {
          cartToken,
          params,
          extraItems,
          integratedParams: res
        },
        action: Action.EditCart,
        status: LoggerStatus.Success
      });
      return res;
    }

    selectContent({
      skuId,
      name,
      price,
      skuAttrs,
      itemNo,
      ...rest
    }) {
      const value = { ...rest,
        skuId: itemNo || skuId,
        name,
        price: convertPrice(price || 0).toString(),
        variant: skuAttrs,
        itemNo
      };
      const data = {
        actionType: ClickType.SelectContent,
        value
      };
      logger.info(`normal 主站购物车 数据上报 选中商品 selectContent`, {
        data: {
          cartToken,
          integratedParams: data
        },
        action: Action.EditCart,
        status: LoggerStatus.Start
      });
      this.touch(data);
    }

    removeItem(params, extraItems) {
      try {
        const data = {
          actionType: ClickType.RemoveFromCart,
          value: this.setRemoveItemParams(params, extraItems)
        };
        logger.info(`normal 主站购物车 数据上报 移除商品 removeItem`, {
          data: {
            cartToken,
            params,
            extraItems,
            integratedParams: data
          },
          action: Action.EditCart,
          status: LoggerStatus.Start
        });
        this.touch(data);
      } catch (e) {
        logger.error(`normal 主站购物车 数据上报 移除商品 上报报错 removeItem`, {
          data: {
            cartToken,
            params,
            extraItems
          },
          error: e,
          action: Action.EditCart,
          errorLevel: 'P0'
        });
      }
    }

    viewCart(cartInfo) {
      logger.info(`mini 主站购物车 数据上报 viewCart`, {
        data: {
          cartToken,
          cartInfo
        },
        action: Action.InitCart,
        status: LoggerStatus.Start
      });

      if (!cartInfo.activeItems) {
        return;
      }

      const params = {
        amount: convertPrice(cartInfo.realAmount || 0),
        items: []
      };
      const {
        activeItems
      } = cartInfo;
      activeItems.map(activeItem => {
        params.items = [...params.items, ...activeItem.itemList.map(item => {
          return { ...item,
            price: currencyUtil.unformatCurrency(convertPrice(item.price)).toString()
          };
        })];
        return activeItem;
      });
      logger.info(`mini 主站购物车 数据上报 viewCart`, {
        data: {
          cartToken,
          reportInfo: { ...params,
            actionType: ClickType.ViewCart
          }
        },
        action: Action.InitCart,
        status: LoggerStatus.Start
      });

      try {
        this.reportViewCart({
          params,
          actionType: ClickType.ViewCart
        });
      } catch (error) {
        logger.error(`mini 主站购物车 数据上报 viewCart 失败`, {
          data: {
            cartToken,
            reportInfo: { ...params,
              actionType: ClickType.ViewCart
            }
          },
          error,
          action: Action.ReportCart,
          status: LoggerStatus.Failure
        });
      }
    }

  }

  const cartReport = new CartReport();
  _exports.default = cartReport;
  return _exports;
}();