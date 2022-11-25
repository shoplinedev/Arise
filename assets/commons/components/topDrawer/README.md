### 基本用例
```html
<div class="header-menu__slot">
  <!-- 在需要弹出下拉框的位置使用 snippet -->
  <!-- 下拉框位置是根据父节点做绝对定位 -->
  <!-- 传入 id -->
  {{#snippet 'global-top-drawer' id="header-mobile-menu-drawer"}}
    {{snippet 'header-mobile-menu' main_menu=main_menu}}
  {{/snippet}}
</div>
```

```javascript
import TopDrawer, {DRAWER_EVENT_NAME, DRAWER_OPERATORS} from '../../commons/components/topDrawer';

// 通过实例传递默认参数
const id = 'header-mobile-menu-drawer'
const instance = new TopDrawer(id, {

  // 内部的关闭按钮，会自动绑定关闭事件 | string | defautl = '.j-top-drawer-close'
  closeBtnSelector: '.inner-close-btn', 

  // 是否全屏模式 | boolean | defautl = false
  fullscreen: false,
})

// 展开
// 直接调用实例方法
instance.open()
// 发事件
window.SL_EventBus.emit(DRAWER_EVENT_NAME, { id: id, operator: DRAWER_OPERATORS.OPEN })

// 关闭
// 直接调用实例方法
instance.close()
// 发事件
window.SL_EventBus.emit(DRAWER_EVENT_NAME, { id: id, operator: DRAWER_OPERATORS.CLOSE })

// 弹窗是否展开
if (instance.isOpen) {
  // ...
}

// 动态设置 max-height, width
instance.setMaxHeight(200)
instance.setWidth(200)

```


