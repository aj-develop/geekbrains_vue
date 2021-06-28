import { mount } from '@vue/test-utils'
import Button from '../src/components/Button.vue'

describe('Components / Button.vue', () => {
  const wrapper = mount(Button)
  const button = wrapper.find('#add-new-cost')

  it('Проверка наличия кнопки', () => {
    expect(wrapper.get('button#add-new-cost').isVisible()).toBe(true)
  })

  it('Проверка, что событие показа формы было вызвано', () => {
    button.trigger('click')
    expect(wrapper.emitted().clicked).toBeTruthy()
  })
})
