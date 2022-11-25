## checkbox组件
### 特性
- 统一的样式
- 统一的过渡动画

### 使用方式
1. 在需要所用的地方(section/snippet)引入，并传入id和初始状态(是否选中)
```
{{include
    'snippets/component/checkbox'
    id='trade_checkout_tips_checkbox-input'
    checked=true
    parentClass="checkbox_wrapper" // 可选参数，如指定，则在整个组件外包一层div，点击外层同样会触发checkbox的状态变更，通过parentClass对应的类名控制外层div样式
    children='<span>label</span>'  // 可选参数，值为html对应的字符串，对应的html将放置在checkbox元素后
}}
```
2. 逻辑处理代码处，监听`trade:checkbox-${id}`事件，当checkbox被点击时会自动发送emit事件，在回调函数中处理对应逻辑即可
```
    import TradeEventBus from '../event-bus/index';

    TradeEventBus.on(`trade:checkbox-${id}`,function(status){
        console.log(`isChecked:${status}`);
    })
```
3. 具体使用可参考：@theme/global/src/sections/trade/checkout_tips.html#11 
