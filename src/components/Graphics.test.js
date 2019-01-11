import * as React from 'react'
import { shallow, mount } from 'enzyme'
import { Form, Header, Message } from 'semantic-ui-react'
import { Graphics } from './Graphics'
import { Commit } from './Commit'
import renderer from 'react-test-renderer'
import sampleData from '../data/commits'

const props = {
  commits: [],
  fetching: false,
  repository: null,
  error: null,
  getCommits: jest.fn()
}

describe('Graphics component', () => {

  it('Should render correctly on initial state', () => {
    const tree = renderer.create(<Graphics {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Should render correctly while commits are being requested', () => {
    const fetching = {...props, fetching: true}
    const tree = renderer.create(<Graphics {...fetching} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Should render correctly when commits request is successful', () => {
    const success = {...props, commits: sampleData, repository: 'repo'}
    const tree = renderer.create(<Graphics {...success} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Should render correctly when commits request is failed', () => {
    const failure = {...props, error: 'error'}
    const tree = renderer.create(<Graphics {...failure} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('getCommits has been called on form submit event', () => {
    const wrapper = shallow(<Graphics {...props} />)
    wrapper.find(Form).simulate('submit')
    expect(props.getCommits).toHaveBeenCalled()
    expect(props.getCommits.mock.calls.length).toBe(1)
    wrapper.find(Form).simulate('submit')
    expect(props.getCommits.mock.calls.length).toBe(2)
  })

  it('header is toggled depending on repository prop value', () => {
    const header = {...props, repository: 'repo'}
    const wrapper = mount(<Graphics {...header} />)
    expect(wrapper.find(Header).exists()).toBe(true)
    expect(wrapper.find(Header).text()).toBe('Commits on repo')
    wrapper.setProps({repository: null})
    expect(wrapper.find(Header).exists()).toBe(false)
  })

  it('error message is toggled depending on error prop value', () => {
    const error = {...props, error: 'error'}
    const wrapper = mount(<Graphics {...error} />)
    expect(wrapper.find(Message).exists()).toBe(true)
    expect(wrapper.find(Message).text()).toBe('error')
    wrapper.setProps({error: null})
    expect(wrapper.find(Message).exists()).toBe(false)
  })

  it('commits graphic is toggled depending on commits prop value', () => {
    const graphic = {...props, commits: sampleData}
    const wrapper = mount(<Graphics {...graphic} />)
    expect(wrapper.find(Commit).exists()).toBe(true)
    expect(wrapper.find(Commit).length).toBe(13)
    wrapper.setProps({commits: null})
    expect(wrapper.find(Message).exists()).toBe(false)
  })
})