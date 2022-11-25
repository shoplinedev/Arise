window.SLM = window.SLM || {};

window.SLM['commons/sales/simpleRender.js'] = window.SLM['commons/sales/simpleRender.js'] || function () {
  const _exports = {};
  const { nullishCoalescingOperator } = window['SLM']['theme-shared/utils/syntax-patch.js'];
  const nc = nullishCoalescingOperator;

  function getPathByString(pathString) {
    let path = [];

    if (pathString instanceof Array) {
      path = pathString.reduce((o, p) => {
        if (typeof p === 'string') {
          return o.concat(p.split(/\[?\.|\]?\.|\[/));
        }

        return o;
      }, []);
    } else if (typeof pathString === 'string') {
      path = pathString.split(/\[?\.|\]?\.|\[/);
    }

    return path;
  }

  function getJsonByPath(path, obj) {
    if (obj instanceof Object) {
      const key = path.shift();

      if (path.length) {
        return getJsonByPath(path, obj[key]);
      }

      return obj[key];
    }

    return obj;
  }

  function Render(dependencies) {
    this.dependencies = dependencies.map(({
      defualtValue,
      path,
      selector,
      action
    }, index) => {
      const selectorString = getPathByString(selector).join(' ');
      return {
        value: undefined,
        path: getPathByString(path),
        selector: selectorString,
        node: document.querySelector(selectorString),
        action: () => {
          const that = this.dependencies[index];

          if (!that.node || !that.node.isConnected) {
            that.node = document.querySelector(selectorString);
          }

          if (that.node) {
            if (action) {
              try {
                action(that.node, nc(that.value, defualtValue));
              } catch (err) {
                throw err;
              }
            } else {
              that.node.innerHTML = nc(that.value, defualtValue);
            }
          }
        }
      };
    });
  }

  Render.prototype.run = function run(obj) {
    this.dependencies.forEach(dependency => {
      const {
        path,
        value,
        action
      } = dependency;
      const newValue = getJsonByPath([...path], obj);

      if (value !== newValue) {
        dependency.value = newValue;
        action();
      }
    });
  };

  Render.prototype.force = function force() {
    this.dependencies.forEach(({
      action
    }) => {
      action();
    });
  };

  _exports.default = Render;
  return _exports;
}();