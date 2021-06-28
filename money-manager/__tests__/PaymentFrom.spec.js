import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
// import VueRouter from 'vue-router'
import PaymentForm from '../src/components/PaymentForm.vue'
import 'regenerator-runtime/runtime.js'

const localVue = createLocalVue()
localVue.use(Vuex)
// const router = new VueRouter()
// localVue.use(VueRouter)

describe('Components / PaymentForm.vue', () => {
  let actions
  let getters
  let store

  beforeEach(() => {
    actions = {
      loadCategories: jest.fn()
    }
    getters = {
      getCategoryList: () => 0
    }
    store = new Vuex.Store({
      actions,
      getters
      // router
    })
  })

  it('Проверка action::loadCategories', async () => {
    const wrapper = shallowMount(
      PaymentForm,
      {
        store,
        localVue,
        mocks: {
          $route: {
            params: {
              category: 'Food'
            },
            query: {
              value: 300
            }
          }
        }
      })
    await wrapper.setProps({ showFrom: true })
    expect(actions.loadCategories).toHaveBeenCalled()
  })
  it('Проверка visible add category form', async () => {
    const wrapper = shallowMount(
      PaymentForm,
      {
        store,
        localVue,
        mocks: {
          $route: {
            params: {
              category: 'Food'
            },
            query: {
              value: 300
            }
          }
        }
      })
    await wrapper.setProps({ showFrom: true })
    const button = wrapper.find('#show-add-category-form')
    await button.trigger('click')
    expect(wrapper.get('form#add-category').isVisible()).toBe(true)
  })
})
