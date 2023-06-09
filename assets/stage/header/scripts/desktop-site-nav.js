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
        setCalcMenuDropdownPos(element);
        element.classList.add('actived');
        setSecondMenuMaxHeight(e);
        setActivedMask(true);
      });
      element.addEventListener('mouseleave', function () {
        element.classList.remove('actived');
        setActivedMask(false);
      });
    });
  };

  function setCalcMenuDropdownPos(element) {
    const $mainHeader = element.closest('.header__main');
    const $menuNav = element.closest('.desktop-site-nav');
    const isMegamenu = element.classList.contains('site-nav--is-megamenu');

    if ($mainHeader && $menuNav) {
      const headerHeight = $mainHeader.offsetHeight;
      const menuNavHeight = element.offsetHeight;
      const delta = headerHeight - menuNavHeight;
      const {
        navigationLayout
      } = $menuNav.dataset;
      let submenuDropdownTop = menuNavHeight + Math.floor(delta / 2);

      if (navigationLayout.endsWith('-line')) {
        submenuDropdownTop = menuNavHeight;
      }

      if (isMegamenu) {
        submenuDropdownTop = headerHeight;
      }

      element.style.setProperty('--menu-dropdown-top', `${submenuDropdownTop}px`);
    }
  }

  function setActivedMask(flag) {
    const $nav = document.querySelector('.desktop-site-nav');
    const useNavEffectdata = $nav.dataset.navigationEffect;

    if (useNavEffectdata !== 'true') {
      return;
    }

    const {
      insert,
      remove
    } = setHeaderMask();

    if (flag) {
      insert();
    } else {
      remove();
    }
  }

  function setHeaderMask() {
    const maskClass = 'header-wrapper-effect-mask';
    const $headerWrapperMask = document.createElement('div');
    $headerWrapperMask.classList.add(maskClass);
    return {
      insert: () => {
        if (document.querySelector(`.${maskClass}`)) {
          return;
        }

        const $headerWrapper = document.querySelector('.header-sticky-wrapper');
        $headerWrapper.parentElement.insertBefore($headerWrapperMask, $headerWrapper.nextElementSibling);
        handleSameLevel().insert();
      },
      remove: () => {
        const $mask = document.querySelector(`.${maskClass}`);
        if (!$mask) return;

        if ($mask.parentElement) {
          $mask.parentElement.removeChild($mask);
        }

        handleSameLevel().remove();
      }
    };
  }

  function handleSameLevel() {
    const zIndex = 122;
    const $announcementBar = document.querySelector('.announcement-bar__container .announcement-bar__swiper');
    const $toolbar = document.querySelector('.header__top');
    return {
      insert: () => {
        if ($announcementBar) {
          $announcementBar.style.zIndex = zIndex;
        }

        if ($toolbar) {
          const toolbarPos = window.getComputedStyle($toolbar).getPropertyValue('position');

          if (toolbarPos === 'static') {
            $toolbar.style.position = 'relative';
            $toolbar.style.backgroundColor = `rgba(var(--color-page-background))`;
          }

          $toolbar.style.zIndex = zIndex;
        }
      },
      remove: () => {
        if ($announcementBar) {
          $announcementBar.style.removeProperty('z-index');
        }

        if ($toolbar) {
          const toolbarPos = window.getComputedStyle($toolbar).getPropertyValue('position');

          if (toolbarPos === 'relative') {
            $toolbar.style.position = 'static';
            $toolbar.style.removeProperty('background-color');
          }

          $toolbar.style.removeProperty('z-index');
        }
      }
    };
  }

  function setSecondMenuMaxHeight(e) {
    const $nav = document.querySelector('.desktop-site-nav');
    const useNavEffectdata = $nav.dataset.navigationEffect;
    const windowHeight = window.innerHeight;
    const {
      target
    } = e;
    const maxHeight = windowHeight - target.getBoundingClientRect().bottom - 50;
    const megamenuList = target.getElementsByClassName('megamenu');
    const unmegamenuList = target.getElementsByClassName('unmegamenu-container');
    [...unmegamenuList, ...megamenuList].forEach(el => {
      if (useNavEffectdata === 'true') {
        el.style.setProperty('--max-height', `${maxHeight}px`);
      } else {
        el.style.maxHeight = `${maxHeight}px`;
      }
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