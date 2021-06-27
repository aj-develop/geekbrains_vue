import { mount } from '@vue/test-utils'
import Button from '../src/components/Button.vue'
// import PaymentForm from '../src/components/PaymentForm.vue'

describe('Components / Button.vue', () => {
  it('add-new-cost button click', () => {
    const wrapperButton = mount(Button)
    console.log(wrapperButton)
    // console.log(wrapperButton.find('#add-new-cost'))
    // button.find('#add-new-cost').trigger('click')
    // const paymentForm = mount(PaymentForm)
    // expect(paymentForm.find('#payment-form').exists()).toBe(true)
  })
})
