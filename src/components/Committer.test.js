import * as React from 'react'
import { shallow } from 'enzyme'
import { Committer } from './Committer'
import renderer from 'react-test-renderer'

const author = {
  login: 'JohnDoe',
  avatar_url: 'http://avatar.com/JohnDoe',
  html_url: 'http://github.com/JohnDoe'
}

const committer = {
  login: 'JaneDoe',
  avatar_url: 'http://avatar.com/JaneDoe',
  html_url: 'http://github.com/JaneDoe'
}

const commit = {
  author: { name: author.login, email: author.html_url },
  committer: { name: committer.login, email: committer.html_url }
}

describe('Committer component', () => {

  it('Should display author', () => {
    const props = { author }
    const comp = <Committer {...props} />
    const wrapper = shallow(comp)
    const tree = renderer.create(comp).toJSON()
    expect(wrapper.find('.author').exists()).toBe(true)
    expect(wrapper.find('.committer').exists()).toBe(false)
    expect(wrapper.find('.commit').exists()).toBe(false)
    expect(tree).toMatchSnapshot()
  })

  it('Should display committer', () => {
    const props = { committer }
    const comp = <Committer {...props} />
    const wrapper = shallow(comp)
    const tree = renderer.create(comp).toJSON()
    expect(wrapper.find('.author').exists()).toBe(false)
    expect(wrapper.find('.committer').exists()).toBe(true)
    expect(wrapper.find('.commit').exists()).toBe(false)
    expect(tree).toMatchSnapshot()
  })

  it('Should display commits author and committer', () => {
    const props = { commit }
    const comp = <Committer {...props} />
    const wrapper = shallow(comp)
    const tree = renderer.create(comp).toJSON()
    expect(wrapper.find('.author').exists()).toBe(false)
    expect(wrapper.find('.committer').exists()).toBe(false)
    expect(wrapper.find('.commit').exists()).toBe(true)
    expect(tree).toMatchSnapshot()
  })
})