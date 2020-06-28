import debounce from 'lodash.debounce'

function install(Vue) {
  /**
   * 指令绑定的值
   * @param {any} value function or object
   */
  const callback = (binding = {}) => {
    const { modifiers, value } = binding
    return debounce(
      e => {
        if (modifiers.stop) {
          e.stopPropagation()
        } else if (modifiers.prevent) {
          e.preventDefault()
        }
        if (typeof value === 'function') {
          value(e)
        } else {
          const { callback } = value
          typeof callback === 'function' && callback(e)
        }
      },
      value && (value.wait || 500),
      {
        leading: true,
        trailing: false
      }
    )
  }
  // 回调函数仓库
  let callbackRepo = () => {}
  /**
   * 自定义指令，连续点击问题
   * v-pfc='{wait: 300, callback: callbackFunc}'
   * v-pfc='callBackFun'
   */
  Vue.directive('pfc', {
    inserted: function(el, binding) {
      // 监听键盘收起事件
      callbackRepo = callback(binding)
      el.addEventListener('click', callbackRepo)
    },
    unbind: function(el) {
      el.removeEventListener('click', callbackRepo)
    }
  })
}

// 通过script标签引入
if (typeof window !== 'undefined' && window.Vue && window.store) {
  // window.cmlConfig 是可选的参数
  install(window.Vue, window.store, window.cmlConfig)
}

export default {
  install
}
