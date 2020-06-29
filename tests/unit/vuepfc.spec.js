import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import App from '../../example/App.vue'
import vuepfc from '../../lib'
const localVue = createLocalVue()

localVue.use(vuepfc)

describe('Click App.vue button', () => {
  it('button click should increment the count', () => {
    const wrapper = shallowMount(App, { localVue })
    expect(wrapper.vm.count).to.equal(0)
    const button = wrapper.find('button')
    button.trigger('click')
    expect(wrapper.vm.count).to.equal(1)
  })
  it('fast click only increment one time', (done) => {
    const wrapper = shallowMount(App, { localVue })
    expect(wrapper.vm.count).to.equal(0)
    const button = wrapper.find('button')
    button.trigger('click')
    setTimeout(() => {
      button.trigger('click')
      expect(wrapper.vm.count).to.equal(1)
      done()
    }, 400)
  })
  it('delay 500ms click increment two times', (done) => {
    const wrapper = shallowMount(App, { localVue })
    expect(wrapper.vm.count).to.equal(0)
    const button = wrapper.find('button')
    button.trigger('click')
    setTimeout(() => {
      button.trigger('click')
      expect(wrapper.vm.count).to.equal(2)
      done()
    }, 600)
  })
})
