import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest' // Добавьте эту строку
import TheCard from '../src/components/TheCard.vue'

describe('TheCard Component', () => {
  // 1. Тест рендеринга пропса number
  it('renders and reacts to number prop changes', async () => {
    // 1. Проверка начального рендеринга
    const wrapper = mount(TheCard, {
      props: { number: 10 }
    })
    expect(wrapper.find('.front').text()).toBe('10')

    // Проверка реакции на изменение пропса
    await wrapper.setProps({ number: 20 })
    expect(wrapper.find('.front').text()).toBe('20')
    })

  // 2. Тест default слота
  it('renders default slot content', () => {
    const wrapper = mount(TheCard, {
      props: { number: 1 },
      slots: { default: 'Main Content' }
    })

    expect(wrapper.find('.card_title').text()).toBe('Main Content')
  })

  // 3. Тест named slot (href)
  it('renders href slot content', () => {
    const wrapper = mount(TheCard, {
      props: { number: 1 },
      slots: { href: '<a href="#test">Link</a>' }
    })

    const link = wrapper.find('.back_href a')
    expect(link.exists()).toBe(true)
    expect(link.attributes('href')).toBe('#test')
    expect(link.text()).toBe('Link')
  })

  // 4. Тест переключения чекбокса
  it('toggles checkbox state', async () => {
    const wrapper = mount(TheCard, {
      props: { number: 5 }
    })

    const checkbox = wrapper.find('input[type="checkbox"]')
    expect(checkbox.element.checked).toBe(false)

    await checkbox.setValue(true)
    expect(checkbox.element.checked).toBe(true)
  })

  // 5. Снапшот-тест
  it('matches snapshot', () => {
    const wrapper = mount(TheCard, {
      props: { number: 7 },
      slots: {
        default: 'Title',
        href: '<button>Click</button>'
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})