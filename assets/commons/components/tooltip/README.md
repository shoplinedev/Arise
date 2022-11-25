### 属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| selector | JQ 选择器名 | string | - |
| title | 提示文字(支持传递dom字符串) | string | dom | - |
| color | 背景颜色 | string | #000 |
| trigger | 触发方式，可选：hover | click  | string | hover |
| zIndex | 层级 | number | - |

### 实例方法

| 方法名 | 说明 | 可选参数 |
| --- | --- | --- |
| toggle | 切换属性参数（目前只支持 title ) | ({ title: 新的值 }) |
| show | 显示 tooltip | 要显示的 title 值 |
| hide | 隐藏 tooltip | - |
| destroy | 销毁 | - |

### 基本用例

```javascript
import '../commons/components/tooltip.scss';
import Tooltip from '../commons/components/tooltip.js';

const tooltip = new Tooltip({
  selector: '.selector',
  trigger: 'hover',
  title: '测试',
  color: '#000',
  zIndex: 999
})

// 切换显示新的值
tooltip.toggle({ title: '新的值' })

// 显示 tooltip
tooltip.show('<span style="color: red">hahahhah</span>')

// 隐藏 tooltip
tooltip.hide()

// 销毁 tooltip
tooltip.destroy()


// 挂载到 jq 原型上，作为插件使用
Tooltip.install()

$('.selector').tooltip({
  trigger: 'hover',
  title: '测试',
  color: '#000',
  zIndex: 999
})
```
