# vuepfc
**vuepfc**插件，提供一个非常有用的Vue指令，它用于阻止用户快速的连续点击行为。用户第一次点击的时候会立即调用`callback`,`wait`(500ms)时间内的重复调用都会被取消。

## Usage

```bash
npm install vuepfc --save
```

```js
// install plugin
import vuepfc from 'vuepfc'

Vue.use(vuepfc)
```

简单使用
```js
// template
<button v-pfc="clickMe">vue pfc</button>

// script
methods: {
  clickMe() {
    console.log('click')
  }
}
```

自定义时间间隔
`wait`默认时间是`500ms`，你可以根据需要修改该参数。
```js
// template
<button v-pfc="{wait: 300, callback: clickMe}">vue pfc</button>

// script
methods: {
  clickMe() {
    console.log('click')
  }
}
```

支持的修饰器
阻止冒泡：`v-pfc.stop = callback`

阻止默认行为：`v-pfc.prevent = callback`
