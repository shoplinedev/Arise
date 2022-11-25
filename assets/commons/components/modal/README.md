## modal 组件

这里提供了两个组件版本 `Modal`、`ModalWithHtml`

### `Modal` - 通用基础弹窗组件

### Usage

假设 `collections` 需要使用到弹窗，可以通过如下形式引入:

```html
<!-- 这里假设是处在 template 目录下的页面文件 -->
<div class="container">
  ...
</div>
<!-- 需要放在路由文件底部 -->
{{snippet 'product/commons/base-modal' modalId=123 animationType="fade" children=(snippet 'product/commons/base-modal-children')}}
<!-- 或者使用 slot 方式 -->
{{#snippet 'product/commons/base-modal' modalId=123 animationType="fade"}}
  {{snippet 'product/commons/base-modal-children'}}
{{/snippet}}
```

可以通过以下方式引入脚本代码给我们的代码片段绑定事件（最好是在我们的业务页面内引入）

```js
import Modal './modal'

const modal = new Modal({
  modalId: 123
})

// 初始化
modal.init()

// 以下方法建议在需要手动调用的时候开启
// 显示弹窗
modal.show()
// 隐藏弹窗
modal.hide()
```

引入 `base-modal` 代码片段后，需要关注几个属性传参：

- **children**

描述：即将插入到弹窗 `body` 的代码片段，建议使用 `slot` 形式的插入

- **closable**

描述：是否显示右上角的关闭按钮
可选值：`true/false`
默认值: `true`

- **maskClosable**

描述：点击蒙层是否可以关闭弹窗
可选值: `true/false`
默认值: `true`

- **animationType**

描述：弹窗的显示/关闭的动画类型
可选值：`mp-modal__fade/mp-modal__popup`
默认值：`mp-modal__fade`

- **zIndex**

描述：弹窗的 `z-index` 值
可选值：数值类型即可
默认值：1000

- **containerClassName**

描述: 弹窗内 `mp-modal__container` 的样式名称

- **bodyClassName**

描述：弹窗内 `mp-modal__body` 的样式名称

### children context

我们在使用 `children` 属性时，由于是引入外部的代码片段，使用的是 `snippet` helper，它的 `context` 是具有共享父级 `snippet` 的变量行为，具体表现为：

`collections.html`:

```html
{{assign 'var1' 123}}
{{#snippet 'product/commons/base-modal' modalId=123 animationType="fade"}}
  {{snippet 'product/commons/base-modal-children'}}
{{/snippet}}
```

`product/commons/base-modal-children.html`:

```html
<span>{{var1}}<span>
```

结果是 `var1` -> `123`

### `ModalWithHtml` - 内置`html`结构版本的弹窗

与 `Modal` 的区别，在某些情况下，我们的弹窗内容可能是动态插入的、不固定的 `html` 结构；

```js
import { ModalWithHtml } from './modal'
const modal = new ModalWithHtml({
  // 弹窗的 z-index
  zIndex: 1000,
  // 弹窗的 container 样式
  containerClassName: '',
  // 是否显示右上角的 `x` 按钮
  closable: true,
  // 点击弹窗的蒙层是否可以关闭弹窗
  maskClosable: true,
  // 弹窗的 body 样式
  bodyClassName: '',
  // 弹窗的内容
  content: '',
  // 关闭弹窗后是否从 body 中移除（默认情况下，我们将弹窗都插入到 body 中）
  destroyedOnClosed: false,
  // 弹窗关闭后的方法
  afterClose: () => {},
})

// 显示弹窗
modal.show()
// 关闭弹窗
modal.hide()
// 给弹窗设置内容
modal.setContent(`<div>内容</div>`)
```

## Reference

- 更改关于 `snippet` 的用法，可查看 [snippet helper](https://shopline.yuque.com/docs/share/283093e4-46b1-478a-9cf9-54b88f27c102#lF9tJ)