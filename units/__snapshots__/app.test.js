import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import App from '../../src/App.vue'

describe('App Component', () => {
  it('renders header with correct content', () => {
    const wrapper = mount(App)
    const header = wrapper.find('header')
    expect(header.find('h1').text()).toBe('Advent Calendar')
    expect(header.find('p').text()).toBe('Мои рекомендации фантастики')
  })

  it('renders footer with correct content', () => {
    const wrapper = mount(App)
    const footer = wrapper.find('footer p')
    expect(footer.text()).toBe('From Krasnodar with love')
  })

  it('renders container div with correct class', () => {
    const wrapper = mount(App)
    const container = wrapper.find('.container')
    expect(container.exists()).toBe(true)
  })

  it('renders correct number of cards based on dataCards', () => {
    const wrapper = mount(App)
    const cards = wrapper.findAllComponents({ name: 'TheCard' })
    expect(cards.length).toBe(24)
  })

  it('passes correct props to TheCard components', () => {
    const wrapper = mount(App)
    const cards = wrapper.findAllComponents({ name: 'TheCard' })

    expect(cards[0].props('number')).toBe(1)
    expect(cards[1].props('number')).toBe(2)
    expect(cards[2].props('number')).toBe(3)
  })

  it('renders correct slot content in TheCard components', () => {
    const wrapper = mount(App)
    const cards = wrapper.findAllComponents({ name: 'TheCard' })

    expect(cards[0].text()).toContain('Европа')
    expect(cards[1].text()).toContain('Всё везде и сразу')
    expect(cards[2].text()).toContain('Монстры')
  })

  it('renders correct href slot content in TheCard components', () => {
    const wrapper = mount(App)
    const links = wrapper.findAll('a')

    expect(links[0].attributes('href')).toBe('https://www.kinopoisk.ru/film/623379/')
    expect(links[1].attributes('href')).toBe('https://www.kinopoisk.ru/film/1322324/')
    expect(links[2].attributes('href')).toBe('https://www.kinopoisk.ru/film/516472/')
    expect(links[0].text()).toBe('Ссылка')
  })

  it('matches snapshot', () => {
    const wrapper = mount(App)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
