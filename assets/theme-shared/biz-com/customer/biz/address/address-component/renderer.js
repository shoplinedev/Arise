window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/biz/address/address-component/renderer.js'] = window.SLM['theme-shared/biz-com/customer/biz/address/address-component/renderer.js'] || function () {
  const _exports = {};
  const { FieldInteractionEnum, FieldNameEnum } = window['@sl/address-component']['/domain-model'];
  const { distinctUntil } = window['@sl/address-component'];
  const { mapAutofillToken, litAutofillControls } = window['@sl/address-renderer-autofill'];
  const { bind, shouldBind, contextBuilder } = window['@sl/address-autocomplete'];
  const Form = window['SLM']['theme-shared/utils/form/index.js'].default;
  const { ADDRESS_RULES, getFieldAttrs } = window['SLM']['theme-shared/biz-com/customer/biz/address/const/fields.js'];
  const { createAutocompleteService } = window['SLM']['theme-shared/biz-com/customer/biz/address/address-component/adapter.js'];
  const { getLanguage } = window['SLM']['theme-shared/biz-com/customer/utils/helper.js'];
  const PRESET_SELECT_OPTION = '--no-value--';
  const autocompleteService = createAutocompleteService();

  function createRenderer({
    host,
    rootId
  }) {
    let $currentRoot = document.getElementById(rootId);
    host.init().then(() => {
      distinctUntil(host, (prev, current) => {
        if (!prev) return true;
        return prev.addressInfo.countryCode !== current.addressInfo.countryCode;
      }, function initRender(ctx, model) {
        const {
          addressInfo,
          fieldTemplateSequence,
          fieldTemplateMap
        } = model;
        const $wipRoot = $currentRoot.cloneNode(false);
        fieldTemplateSequence.forEach(fieldName => {
          const $controlFrag = mountControl(ctx, host, fieldName);
          let $control = $controlFrag.firstChild;
          $wipRoot.appendChild($controlFrag);
          const subscription = distinctUntil(host, (_, current) => {
            const $ele = $control.querySelector('input,select');
            if (!$ele) return false;
            const sourceKey = $ele.tagName.toLowerCase() === 'input' ? fieldName : `${fieldName}Code`;
            return current.addressInfo[sourceKey] !== $ele.value;
          }, ctx => {
            const $controlFrag = mountControl(ctx, host, fieldName);
            const $wipControl = $controlFrag.firstChild;
            $control.parentNode.replaceChild($controlFrag, $control);
            $control = $wipControl;
          });
          ctx.done().finally(() => {
            subscription.unsubscribe();
          });
        });
        litAutofillControls(model).forEach(raw => {
          const $frag = strToFrag(raw);
          const $control = $frag.cloneNode(true);

          const onChangeHandler = event => {
            const {
              target
            } = event;
            host.updateFieldValue(target.name, target.value);
          };

          $control.firstChild.addEventListener('change', onChangeHandler);
          $wipRoot.appendChild($control);
        });
        $currentRoot.parentNode.replaceChild($wipRoot, $currentRoot);
        $currentRoot = $wipRoot;
        const form = Form.takeForm($currentRoot.id);
        form.init();
        form.setFields(fieldTemplateSequence.filter(fieldName => {
          const template = fieldTemplateMap[fieldName];
          return template && !!template.display;
        }).map(fieldName => {
          const template = fieldTemplateMap[fieldName];
          return {
            name: fieldName,
            value: template.interactionType === 2 ? addressInfo[fieldName] : addressInfo[`${fieldName}Code`] || PRESET_SELECT_OPTION,
            rules: [{
              required: template.required,
              message: template.remindCopywriter,

              async validator(_v) {
                let v = _v;

                if (typeof v === 'string') {
                  v = v.trim();
                }

                if (v === PRESET_SELECT_OPTION) {
                  v = '';
                }

                if (fieldName === 'mobile') {
                  return true;
                }

                return !!v;
              }

            }].concat(ADDRESS_RULES[fieldName] || [])
          };
        }));
        ctx.done().finally(() => {
          form.destroy();
        });
        const subscription = host.observeModel(model => {
          const {
            addressInfo
          } = model;
          fieldTemplateSequence.filter(fieldName => {
            const template = fieldTemplateMap[fieldName];
            return template && !!template.display;
          }).forEach(fieldName => {
            const template = fieldTemplateMap[fieldName];
            form.setLocalsValue(fieldName, template.interactionType === 2 ? addressInfo[fieldName] : addressInfo[`${fieldName}Code`] || PRESET_SELECT_OPTION);
          });
        });
        ctx.done().finally(() => {
          subscription.unsubscribe();
        });
      }, true);
    });
  }

  _exports.createRenderer = createRenderer;

  function mountControl(ctx, host, fieldName) {
    const model = host.getModel();
    const template = model.fieldTemplateMap[fieldName];
    const layout = model.fieldTemplateLayout[fieldName];
    const layoutClass = exportLayoutClassList(layout).join(' ');
    const $frag = strToFrag(`
      <div
        sl-form-item-name="${fieldName}"
        class="${layoutClass}"
        style="${!template.display ? 'position: absolute; left: -9999px' : ''}"
      >
        <div class="sl-input">
          <div class="sl-input__area">
            ${template.interactionType === FieldInteractionEnum.Select ? litSelectControl({
      model,
      fieldName
    }) : ''}
            ${template.interactionType === FieldInteractionEnum.Input ? litInputControl({
      model,
      fieldName
    }) : ''}
          </div>
        </div>
      </div>
      `);
    const $controlFrag = $frag.cloneNode(true);
    const $control = $controlFrag.firstChild;

    const onChangeHandler = event => {
      const {
        target
      } = event;
      host.updateFieldValue(fieldName, target.value);
    };

    $control.addEventListener('change', onChangeHandler);
    ctx.done().finally(() => {
      $control.removeEventListener('change', onChangeHandler);
    });

    if (shouldBind(model.addressInfo.countryCode, fieldName)) {
      const unbindCurrentAutocomplete = bind(contextBuilder().withAutocompleteService(autocompleteService).withRenderer(createAutocompleteRenderer($controlFrag.querySelector('.sl-input'), () => {
        $control.removeEventListener('change', onChangeHandler);
      })).withAutocompleteHooks({
        placeSelected(params) {
          const {
            candidates
          } = params;
          host.updateFieldsValueWithCandidates(candidates);
        }

      }).build(), model.addressInfo.countryCode, fieldName, $controlFrag.querySelector('input'));
      ctx.done().finally(() => {
        unbindCurrentAutocomplete();
      });
    }

    return $controlFrag;
  }

  function litInputControl(props) {
    const {
      model,
      fieldName
    } = props;
    const template = model.fieldTemplateMap[fieldName];
    const value = model.addressInfo[fieldName] || '';
    return `
    <input
        name="${fieldName}"
        type="${fieldName === FieldNameEnum.Mobile ? 'tel' : 'text'}"
        value="${value}"
        style="${!template.display ? 'position: absolute; left: -9999px' : ''}"
        class="sl-input__inpEle"
        placeholder=${template.placeholder}
        ${template.display ? '' : 'data-hidden="true"'}
        autocomplete="${mapAutofillToken(fieldName)}"
        ${getFieldAttrs(fieldName)}
      />
    <span class="placeholder">${template.placeholder}</span>
  `;
  }

  function litSelectControl(props) {
    const lang = getLanguage();
    const {
      model,
      fieldName
    } = props;
    const template = model.fieldTemplateMap[fieldName];
    const value = model.addressInfo[`${fieldName}Code`] || PRESET_SELECT_OPTION;

    const options = function getSelectOptionProps() {
      const traverser = model.fieldAddressBookTraverser[fieldName];
      const options = [];

      if (traverser) {
        traverser.traverse((_, addressBook) => {
          options.push({
            value: addressBook.code,
            text: addressBook.name,
            disabled: false,
            selected: addressBook.code === value
          });
        });
      }

      if (lang && lang.toLowerCase() === 'en') {
        options.sort(function (a, b) {
          if (!b.text) return -1;
          if (!a.text) return 1;
          return a.text.localeCompare(b.text);
        });
      }

      return options;
    }();

    return `
      <select
        name="${fieldName}"
        value="${value}"
        style="${!template.display ? 'display: none;' : ''}"
        autocomplete="none"
        placeholder="${template.placeholder}"
        class="sl-input__inpEle"
      >
        ${litSelectOption({
      value: PRESET_SELECT_OPTION,
      disabled: true,
      selected: !value || value === PRESET_SELECT_OPTION,
      text: template.placeholder
    })}
        ${options.map(option => litSelectOption(option)).join('')}
      </select>
      <span class="placeholder">${template.placeholder}</span>
      <i class="select-icon" style="${!template.display ? 'display: none;' : ''}">
        <svg class="{{ classes }}" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.499919 0.550231L4.94967 4.99998L9.39941 0.550232" stroke="currentColor" stroke-linecap="round"/>
        </svg>
      </i>
`;
  }

  function litSelectOption(props) {
    return `
    <option value="${props.value}" ${props.selected ? 'selected' : ''} ${props.disabled ? 'disabled' : ''}>
      ${props.text}
    </option>
  `;
  }

  function strToFrag(str) {
    return document.createRange().createContextualFragment(str.toString().replace(/\s\s+/g, ' ').trim());
  }

  function exportLayoutClassList(layout) {
    if (!layout) return [];
    return Object.entries(layout).map(([k, v]) => {
      return `col-${k}-${v}`;
    });
  }

  _exports.exportLayoutClassList = exportLayoutClassList;

  function createAutocompleteRenderer($control, onPredictionSelected) {
    const $frag = strToFrag(litAutocompleteContainer()).cloneNode(true);
    const $container = $frag.firstChild;
    let $list = $container.querySelector('ul');
    $control.appendChild($container);

    const emptyList = () => {
      const $clone = $list.cloneNode(false);
      $list.parentElement.replaceChild($clone, $list);
      $list = $clone;
    };

    return {
      mount(model) {
        const $clone = $list.cloneNode(false);
        const {
          predictions,
          predictionSelected
        } = model;
        predictions.forEach(prediction => {
          const $frag = strToFrag(litAutocompletePrediction(prediction)).cloneNode(true);
          $frag.firstChild.addEventListener('click', e => {
            if (typeof onPredictionSelected === 'function') {
              try {
                onPredictionSelected();
              } catch (_) {}
            }

            predictionSelected(prediction);
            e.preventDefault();
          });
          $clone.addEventListener('mousedown', e => {
            e.preventDefault();
          });
          $clone.appendChild($frag);
        });
        $list.parentElement.replaceChild($clone, $list);
        $list = $clone;
        $container.classList.remove('address-autocomplete--hidden');
      },

      unmount() {
        $container.classList.add('address-autocomplete--hidden');
        emptyList();
      }

    };
  }

  function litAutocompleteContainer() {
    return `
    <div class="address-autocomplete address-autocomplete--hidden">
      <div class="address-autocomplete__header">
        SUGGESTIONS
        <div class="address-autocomplete__close"></div>
      </div>
      <ul class="address-autocomplete__list"></ul>
      <div class="address-autocomplete__footer">powered by Google</div>
    </div>
  `;
  }

  function litAutocompletePrediction(prediction) {
    return `
  <li>${prediction.description || ''}</li>
  `;
  }

  return _exports;
}();