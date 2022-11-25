window.SLM = window.SLM || {};

window.SLM['theme-shared/components/hbs/shared/components/rate/index.js'] = window.SLM['theme-shared/components/hbs/shared/components/rate/index.js'] || function () {
  const _exports = {};
  const { BASICSTAR, DEFAULTS, MULTICOLOR_OPTIONS } = window['SLM']['theme-shared/components/hbs/shared/components/rate/constants.js'];
  const { isMobileBrowser, checkPrecision, checkBounds, isDefined, getColor } = window['SLM']['theme-shared/components/hbs/shared/components/rate/utils.js'];
  const instanceMap = new WeakMap();

  function dataAttrOptions(node) {
    const {
      dataset
    } = node;
    return Object.keys(dataset).reduce((options, attr) => {
      const match = attr.match(rateyoAttrRegex);

      if (!match) {
        return options;
      }

      const rateyoAttr = match[1],
            option = rateyoAttr[0].toLowerCase() + rateyoAttr.slice(1);
      options[option] = dataset[attr];
      return options;
    }, {});
  }

  function RateYo(node, options = {}) {
    if (!(this instanceof RateYo)) {
      return new RateYo(node, options);
    }

    if (instanceMap.has(node)) {
      return instanceMap.get(node);
    }

    const that = this;
    this.node = node;
    const $node = $(node);
    options = { ...DEFAULTS,
      ...options,
      ...dataAttrOptions($node[0])
    };
    $node.empty().addClass('jq-ry-container');
    const $groupWrapper = $(document.createElement('div')).addClass('jq-ry-group-wrapper').appendTo($node);
    const $normalGroup = $(document.createElement('div')).addClass('jq-ry-normal-group').addClass('jq-ry-group').appendTo($groupWrapper);
    const $ratedGroup = $(document.createElement('div')).addClass('jq-ry-rated-group').addClass('jq-ry-group').appendTo($groupWrapper);
    let step;
    let starWidth;
    let percentOfStar;
    let spacing;
    let percentOfSpacing;
    let containerWidth;
    const minValue = 1;
    let currentRating = options.rating;
    let isInitialized = false;

    function showRating(ratingVal) {
      if (!isDefined(ratingVal)) {
        ratingVal = options.rating;
      }

      currentRating = ratingVal;
      const numStarsToShow = ratingVal / step;
      let percent = numStarsToShow * percentOfStar;

      if (numStarsToShow > 1) {
        percent += (Math.ceil(numStarsToShow) - 1) * percentOfSpacing;
      }

      setRatedFill(options.ratedFill);
      percent = options.rtl ? 100 - percent : percent;

      if (percent < 0) {
        percent = 0;
      } else if (percent > 100) {
        percent = 100;
      }

      $ratedGroup.css('width', `${percent}%`);
    }

    function setContainerWidth() {
      containerWidth = starWidth * options.numStars + spacing * (options.numStars - 1);
      percentOfStar = starWidth / containerWidth * 100;
      percentOfSpacing = spacing / containerWidth * 100;
      $node.width(containerWidth);
      showRating();
    }

    function setStarWidth(newWidth) {
      const starHeight = options.starWidth = newWidth;
      starWidth = window.parseFloat(options.starWidth.replace('px', ''));
      $normalGroup.find('svg').attr({
        width: options.starWidth,
        height: starHeight
      });
      $ratedGroup.find('svg').attr({
        width: options.starWidth,
        height: starHeight
      });
      setContainerWidth();
      return $node;
    }

    function setSpacing(newSpacing) {
      options.spacing = newSpacing;
      spacing = parseFloat(options.spacing.replace('px', ''));
      $normalGroup.find('svg:not(:first-child)').css(`margin-left`, newSpacing);
      $ratedGroup.find('svg:not(:first-child)').css('margin-left', newSpacing);
      setContainerWidth();
      return $node;
    }

    function setNormalFill(newFill) {
      return $node;
    }

    let {
      ratedFill
    } = options;

    function setRatedFill(newFill) {
      if (options.multiColor) {
        const ratingDiff = currentRating - minValue;
        const percentCovered = ratingDiff / options.maxValue * 100;
        const colorOpts = options.multiColor || {};
        const startColor = colorOpts.startColor || MULTICOLOR_OPTIONS.startColor;
        const endColor = colorOpts.endColor || MULTICOLOR_OPTIONS.endColor;
        newFill = getColor(startColor, endColor, percentCovered);
      } else {
        ratedFill = newFill;
      }

      options.ratedFill = newFill;
      return $node;
    }

    function setRtl(newValue) {
      newValue = !!newValue;
      options.rtl = newValue;
      setNormalFill(options.normalFill);
      showRating();
    }

    function setMultiColor(colorOptions) {
      options.multiColor = colorOptions;
      setRatedFill(colorOptions || ratedFill);
    }

    function setNumStars(newValue) {
      options.numStars = newValue;
      step = options.maxValue / options.numStars;
      $normalGroup.empty();
      $ratedGroup.empty();

      for (let i = 0; i < options.numStars; i++) {
        $(options.starSvg || BASICSTAR).appendTo($normalGroup);
        $(options.starSvg || BASICSTAR).appendTo($ratedGroup);
      }

      setStarWidth(options.starWidth);
      setNormalFill(options.normalFill);
      setSpacing(options.spacing);
      showRating();
      return $node;
    }

    function setMaxValue(newValue) {
      options.maxValue = newValue;
      step = options.maxValue / options.numStars;

      if (options.rating > newValue) {
        setRating(newValue);
      }

      showRating();
      return $node;
    }

    function setPrecision(newValue) {
      options.precision = newValue;
      setRating(options.rating);
      return $node;
    }

    function setHalfStar(newValue) {
      options.halfStar = newValue;
      return $node;
    }

    function setFullStar(newValue) {
      options.fullStar = newValue;
      return $node;
    }

    function round(value) {
      const remainder = value % step;
      const halfStep = step / 2;
      const isHalfStar = options.halfStar;
      const isFullStar = options.fullStar;

      if (!isFullStar && !isHalfStar) {
        return value;
      }

      if (isFullStar || isHalfStar && remainder > halfStep) {
        value += step - remainder;
      } else {
        value -= remainder;

        if (remainder > 0) {
          value += halfStep;
        }
      }

      return value;
    }

    function calculateRating(e) {
      const position = $normalGroup.offset();
      const nodeStartX = position.left;
      const nodeEndX = nodeStartX + $normalGroup.width();
      const {
        maxValue
      } = options;
      const {
        pageX
      } = e;
      let calculatedRating = 0;

      if (pageX < nodeStartX) {
        calculatedRating = minValue;
      } else if (pageX > nodeEndX) {
        calculatedRating = maxValue;
      } else {
        let calcPrcnt = (pageX - nodeStartX) / (nodeEndX - nodeStartX);

        if (spacing > 0) {
          calcPrcnt *= 100;
          let remPrcnt = calcPrcnt;

          while (remPrcnt > 0) {
            if (remPrcnt > percentOfStar) {
              calculatedRating += step;
              remPrcnt -= percentOfStar + percentOfSpacing;
            } else {
              calculatedRating += remPrcnt / percentOfStar * step;
              remPrcnt = 0;
            }
          }
        } else {
          calculatedRating = calcPrcnt * options.maxValue;
        }

        calculatedRating = round(calculatedRating);
      }

      if (options.rtl) {
        calculatedRating = maxValue - calculatedRating;
      }

      return parseFloat(calculatedRating);
    }

    function setReadOnly(newValue) {
      options.readOnly = newValue;
      $node.attr({
        readonly: true
      });
      unbindEvents();

      if (!newValue) {
        $node.removeAttr('readonly');
        bindEvents();
      }

      return $node;
    }

    function setRating(newValue) {
      let rating = newValue;
      let {
        maxValue
      } = options;

      if (typeof rating === 'string') {
        if (rating[rating.length - 1] === '%') {
          rating = rating.substr(0, rating.length - 1);
          maxValue = 100;
          setMaxValue(maxValue);
        }

        rating = parseFloat(rating);
      }

      checkBounds(rating, minValue, maxValue);
      rating = parseFloat(rating.toFixed(options.precision));
      checkPrecision(parseFloat(rating), minValue, maxValue);
      options.rating = rating;
      showRating();

      if (isInitialized) {
        $node.trigger('rateyo.set', {
          rating
        });
      }

      return $node;
    }

    function setOnInit(method) {
      options.onInit = method;
      return $node;
    }

    function setOnSet(method) {
      options.onSet = method;
      return $node;
    }

    function setOnChange(method) {
      options.onChange = method;
      return $node;
    }

    this.rating = function (newValue) {
      if (!isDefined(newValue)) {
        return options.rating;
      }

      setRating(newValue);
      return $node;
    };

    this.destroy = function () {
      if (!options.readOnly) {
        unbindEvents();
      }

      instanceMap.delete(node);
      $node.removeClass('jq-ry-container').children().remove();
      return $node;
    };

    this.method = function (methodName) {
      if (!methodName) {
        throw Error('Method name not specified!');
      }

      if (!isDefined(this[methodName])) {
        throw Error(`Method ${methodName} doesn't exist!`);
      }

      const args = Array.prototype.slice.apply(arguments, []);
      const params = args.slice(1);
      const method = this[methodName];
      return method.apply(this, params);
    };

    this.option = function (optionName, param) {
      if (!isDefined(optionName)) {
        return options;
      }

      let method;

      switch (optionName) {
        case 'starWidth':
          method = setStarWidth;
          break;

        case 'numStars':
          method = setNumStars;
          break;

        case 'normalFill':
          method = setNormalFill;
          break;

        case 'ratedFill':
          method = setRatedFill;
          break;

        case 'multiColor':
          method = setMultiColor;
          break;

        case 'maxValue':
          method = setMaxValue;
          break;

        case 'precision':
          method = setPrecision;
          break;

        case 'rating':
          method = setRating;
          break;

        case 'halfStar':
          method = setHalfStar;
          break;

        case 'fullStar':
          method = setFullStar;
          break;

        case 'readOnly':
          method = setReadOnly;
          break;

        case 'spacing':
          method = setSpacing;
          break;

        case 'rtl':
          method = setRtl;
          break;

        case 'onInit':
          method = setOnInit;
          break;

        case 'onSet':
          method = setOnSet;
          break;

        case 'onChange':
          method = setOnChange;
          break;

        default:
          throw Error(`No such option as ${optionName}`);
      }

      return isDefined(param) ? method(param) : options[optionName];
    };

    function onMouseEnter(e) {
      if (!options.hover) {
        return;
      }

      let rating = calculateRating(e).toFixed(options.precision);
      const {
        maxValue
      } = options;
      rating = checkPrecision(parseFloat(rating), minValue, maxValue);
      showRating(rating);
      $node.trigger('rateyo.change', {
        rating
      });
    }

    function onMouseLeave() {
      if (isMobileBrowser() || !options.hover) {
        return;
      }

      showRating();
      $node.trigger('rateyo.change', {
        rating: options.rating
      });
    }

    function onMouseClick(e) {
      let resultantRating = calculateRating(e).toFixed(options.precision);
      resultantRating = parseFloat(resultantRating);
      that.rating(resultantRating);
    }

    function onInit(e, data) {
      if (options.onInit && typeof options.onInit === 'function') {
        options.onInit.apply(this, [data.rating, that]);
      }
    }

    function onChange(e, data) {
      if (options.onChange && typeof options.onChange === 'function') {
        options.onChange.apply(this, [data.rating, that]);
      }
    }

    function onSet(e, data) {
      if (options.onSet && typeof options.onSet === 'function') {
        options.onSet.apply(this, [data.rating, that]);
      }
    }

    function bindEvents() {
      $node.on('mousemove', onMouseEnter).on('mouseenter', onMouseEnter).on('mouseleave', onMouseLeave).on('click', onMouseClick).on('rateyo.init', onInit).on('rateyo.change', onChange).on('rateyo.set', onSet);
    }

    function unbindEvents() {
      $node.off('mousemove', onMouseEnter).off('mouseenter', onMouseEnter).off('mouseleave', onMouseLeave).off('click', onMouseClick).off('rateyo.init', onInit).off('rateyo.change', onChange).off('rateyo.set', onSet);
    }

    setNumStars(options.numStars);
    setReadOnly(options.readOnly);

    if (options.rtl) {
      setRtl(options.rtl);
    }

    instanceMap.set(node, this);
    this.rating(options.rating, true);
    isInitialized = true;
    $node.trigger('rateyo.init', {
      rating: options.rating
    });
  }

  Object.defineProperty(RateYo.prototype, 'on', {
    value: function on(eventName, handler) {
      $(this.node).on(eventName, handler);
      return this;
    }
  });
  Object.defineProperty(RateYo.prototype, 'off', {
    value: function off(eventName, handler) {
      $(this.node).off(eventName, handler);
      return this;
    }
  });
  Object.defineProperty(RateYo, 'has', {
    value: function has(node) {
      return instanceMap.has(node);
    }
  });
  Object.defineProperty(RateYo, 'get', {
    value: function get(node) {
      return instanceMap.get(node);
    }
  });
  Object.defineProperty(RateYo, '_$', {
    get() {
      return $;
    }

  });
  _exports.default = RateYo;
  return _exports;
}();