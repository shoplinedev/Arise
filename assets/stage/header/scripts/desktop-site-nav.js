window.SLM = window.SLM || {};

window.SLM['stage/header/scripts/desktop-site-nav.js'] = window.SLM['stage/header/scripts/desktop-site-nav.js'] || function () {
  const _exports = {};
  let isPad = document.ontouchmove !== undefined;

  if (window.__PRELOAD_STATE__) {
    isPad = window.__PRELOAD_STATE__.request.is_mobile;
  }

  const firstNavItem = '.site-nav--has-dropdown';
  const firstNavItemLink = '.site-nav__link--has-dropdown';

  const registryNavMouseenterHandler = () => {
    document.querySelectorAll(firstNavItem).forEach(element => {
      element.addEventListener('mouseenter', function (e) {
        element.classList.add('actived');
        setSecondMenuMaxHeight(e);
      });
      element.addEventListener('mouseleave', function () {
        element.classList.remove('actived');
      });
    });
  };

  function setSecondMenuMaxHeight(e) {
    const windowHeight = window.innerHeight;
    const {
      target
    } = e;
    const maxHeight = windowHeight - target.getBoundingClientRect().bottom - 50;
    const megamenuList = target.getElementsByClassName('megamenu');
    const unmegamenuList = target.getElementsByClassName('unmegamenu-container');
    [...unmegamenuList, ...megamenuList].forEach(el => {
      el.style.maxHeight = `${maxHeight}px`;
    });
  }

  if (isPad) {
    $(document).on('click', firstNavItemLink, function (e) {
      e.preventDefault();
      e.stopPropagation();
      const $parent = $(this).parent();

      if ($parent.hasClass('actived')) {
        window.location.href = e.target.href;
        $parent.removeClass('actived');
      } else {
        $parent.addClass('actived');
        $(firstNavItem).not($parent).removeClass('actived');
      }
    });
    $(document).on('click', 'body', function (e) {
      const that = $(e.target).parents(firstNavItem);

      if (!that.hasClass('site-nav--has-dropdown')) {
        $(firstNavItem).removeClass('actived');
      }
    });
  } else {
    registryNavMouseenterHandler();
    $(document).on('shopline:section:load', async e => {
      if (e.detail.sectionId === 'header') {
        registryNavMouseenterHandler();
      }
    });
  }

  return _exports;
}();