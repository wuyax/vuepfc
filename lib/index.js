import debounce from 'lodash.debounce'

function install(Vue) {
  /**
   * 回调函数构造器
   * @param {any} value function or object
   */
  const callback = (binding = {}) => {
    const { modifiers, value } = binding
    return debounce(
      e => {
        if (modifiers.stop) {
          // 停止冒泡
          e.stopPropagation()
        } else if (modifiers.prevent) {
          // 阻止默认行为
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
   * 自定义指令，阻止快速连续点击
   * v-pfc='{wait: 300, callback: callbackFunc}'
   * v-pfc='callBackFun'
   */
  Vue.directive('pfc', {
    inserted: function(el, binding) {
      // 构建回调函数
      callbackRepo = callback(binding)
      el.addEventListener('click', callbackRepo)
    },
    unbind: function(el) {
      el.removeEventListener('click', callbackRepo)
    }
  })
}

// 通过script标签形式引入
if (typeof window !== 'undefined' && window.Vue) {
  // 安装
  install(window.Vue)
}

export default {
  install
}
