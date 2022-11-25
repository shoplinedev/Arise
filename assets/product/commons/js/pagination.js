window.SLM = window.SLM || {};

window.SLM['product/commons/js/pagination.js'] = window.SLM['product/commons/js/pagination.js'] || function () {
  const _exports = {};
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const BTN_TYPE = {
    LINK: 'link',
    PRE: 'pre',
    NEXT: 'next',
    ELLIPSIS: 'ellipsis'
  };

  const template = source => {
    const temp = source.map(item => {
      switch (item.type) {
        case BTN_TYPE.PRE:
          return `
          <span class="pagination_pre pagination_item" data-current=${item.current} data-pagenum="${item.pagenum}">
            <a>
              <span class="pagination_icon_arrow_color">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 1L3 6L8 11" stroke-width="1.5" stroke-linecap="round" stroke="currentColor"></path>
                </svg>
              </span>
            </a>
          </span>
        `;

        case BTN_TYPE.NEXT:
          return `
          <span class="pagination_next pagination_item" data-current=${item.current} data-pagenum="${item.pagenum}">
            <a>
              <span class="pagination_icon_arrow_color">
                <svg width="12" height="12" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.49995 9.3995L6.9497 4.94975L2.49995 0.5" stroke="currentColor" stroke-linecap="round"></path>
                </svg>
              </span>
            </a>
          </span>
        `;

        case BTN_TYPE.ELLIPSIS:
          return '<span>...</span>';

        case BTN_TYPE.LINK:
          return `
          <span class="${item.active ? 'pagination_item on' : 'pagination_item'}" data-current=${item.current} data-pagenum="${item.pagenum}">
            <a>${item.pagenum}</a>
          </span>
        `;

        default:
          return '';
      }
    });
    return temp.join('');
  };

  const pageResponeBody = ({
    type = BTN_TYPE.LINK,
    pagenum,
    current,
    active
  }) => {
    return {
      type,
      current,
      pagenum,
      active
    };
  };

  const render = options => {
    const {
      $el,
      pageSize,
      total,
      current,
      isMobile
    } = options;
    const threshold = isMobile ? 5 : 7;
    const lastPageNum = Math.ceil(total / pageSize);
    const exist = 1;
    const boundaryThreshold = threshold - exist;
    const afterThreshold = lastPageNum - threshold + 2;
    const source = [];
    if (lastPageNum <= 0) return;

    if (lastPageNum <= threshold) {
      for (let i = 1; i <= lastPageNum; i += 1) {
        if (i === 1 && i !== current) {
          source.push(pageResponeBody({
            type: BTN_TYPE.PRE,
            pagenum: current - 1,
            current
          }));
        }

        source.push(pageResponeBody({
          type: BTN_TYPE.LINK,
          pagenum: i,
          current,
          active: i === current
        }));

        if (i === lastPageNum && lastPageNum !== current) {
          source.push(pageResponeBody({
            type: BTN_TYPE.NEXT,
            pagenum: current + 1,
            current
          }));
        }
      }
    } else if (current < boundaryThreshold) {
      for (let i = 1; i <= boundaryThreshold; i += 1) {
        if (i === 1 && i !== current) {
          source.push(pageResponeBody({
            type: BTN_TYPE.PRE,
            pagenum: current - 1,
            current
          }));
        }

        source.push(pageResponeBody({
          type: BTN_TYPE.LINK,
          pagenum: i,
          current,
          active: i === current
        }));
      }

      source.push(pageResponeBody({
        type: BTN_TYPE.ELLIPSIS
      }));
      source.push(pageResponeBody({
        type: BTN_TYPE.LINK,
        pagenum: lastPageNum,
        current
      }));
      source.push(pageResponeBody({
        type: BTN_TYPE.NEXT,
        pagenum: current + 1,
        current
      }));
    } else if (current > afterThreshold) {
      source.push(pageResponeBody({
        type: BTN_TYPE.PRE,
        pagenum: current - 1,
        current
      }));
      source.push(pageResponeBody({
        type: BTN_TYPE.LINK,
        pagenum: 1,
        current
      }));
      source.push(pageResponeBody({
        type: BTN_TYPE.ELLIPSIS
      }));

      for (let i = boundaryThreshold - 1; i >= 0; i -= 1) {
        const tempNum = lastPageNum - i;
        source.push(pageResponeBody({
          type: BTN_TYPE.LINK,
          pagenum: tempNum,
          current,
          active: tempNum === current
        }));

        if (tempNum === lastPageNum && tempNum !== current) {
          source.push(pageResponeBody({
            type: BTN_TYPE.NEXT,
            pagenum: current + 1,
            current
          }));
        }
      }
    } else {
      const exit = isMobile ? 1 : 2;
      source.push(pageResponeBody({
        type: BTN_TYPE.PRE,
        pagenum: current - 1,
        current
      }));
      source.push(pageResponeBody({
        type: BTN_TYPE.LINK,
        pagenum: 1,
        current
      }));
      source.push(pageResponeBody({
        type: BTN_TYPE.ELLIPSIS
      }));

      for (let i = current - exit, len = current + exit; i <= len; i += 1) {
        source.push(pageResponeBody({
          type: BTN_TYPE.LINK,
          pagenum: i,
          current,
          active: i === current
        }));
      }

      source.push(pageResponeBody({
        type: BTN_TYPE.ELLIPSIS
      }));
      source.push(pageResponeBody({
        type: BTN_TYPE.LINK,
        pagenum: lastPageNum,
        current
      }));
      source.push(pageResponeBody({
        type: BTN_TYPE.NEXT,
        pagenum: current + 1,
        current
      }));
    }

    const str = template(source);

    if (str) {
      $el.html(str);
    }
  };

  const currentPageChange = async options => {
    const {
      onChange,
      pagenum
    } = options;
    await onChange(pagenum);
    render({ ...options,
      current: pagenum,
      pagenum: undefined
    });
  };

  const init = options => {
    const is_mobile = SL_State.get('request.is_mobile');
    const {
      $el,
      onChange,
      pageSize = 10,
      total = 0,
      isMobile = is_mobile,
      current = 1,
      isLoadRender
    } = options;

    if ($el && typeof onChange === 'function') {
      $el.on('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
        const {
          target
        } = event;
        const items = $(target).parents('span.pagination_item');
        const item = items[0] || items.prevObject[0];

        if ($(item).hasClass('pagination_item')) {
          const itemData = $(item).data();
          const attribute = itemData !== null && itemData !== undefined ? itemData : {};
          const hash = {
            $el,
            pageSize,
            total,
            isMobile,
            ...attribute
          };
          return currentPageChange({ ...hash,
            onChange
          });
        }
      });

      if (isLoadRender) {
        render({
          $el,
          pageSize,
          total,
          current,
          isMobile
        });
      }
    }
  };

  _exports.default = {
    init,
    render
  };
  return _exports;
}();