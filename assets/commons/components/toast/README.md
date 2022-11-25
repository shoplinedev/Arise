### 属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 提示内容 | string | - |
| className | 自定义 CSS class | string | - |
| duration | 自动关闭的延时，单位秒。设为 0 时不自动关闭(单位：ms) | number | 1500 |
| onClose | 关闭时触发的回调函数 | function | - |

### 实例方法

| 方法名 | 说明 | 可选参数 |
| --- | --- | --- |
| open | 打开 toast | (content, duration) |
| close | 关闭 toast | - |

### 基本用例


```javascript
// 通过实例传递默认参数
const toast = new Toast({
  content: 'content',
  className: 'test',
  duration: 4500,
  onClose: () => {
    console.log('close')
  }
})

toast.open()

// 也可以在实际触发开启时覆盖默认参数
// 只会存在一个 toast，后面执行的 toast 会覆盖前面的
toast.open('内容二', 1000)

// 关闭对应 toast 实例的方法
toast.close()


// 单例模式：避免同一个页面渲染多个，同时兼容之前的写法，通过调用静态方法实现
const toast1 = Toast.init({
  content: 'content',
  duration: 4500,
})

const toast2 = Toast.init({
  content: 'content',
  duration: 1500,
})

toast1.show()
toast2.show()

// loading
Toast.loading({
  target: '.container', // 默认挂载在 body 下面，可传选择器值挂载到指定容器
  content: 'content',
  className: 'test',
  duration: 4500,
  onClose: () => {
    console.log('close')
  }
})

```


