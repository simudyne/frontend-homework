import * as React from 'react'
import { Commit } from './Commit'
import renderer from 'react-test-renderer'
import sampleData from '../data/commits'

describe('Commit component', () => {

  it('Should render correctly', () => {
    sampleData.forEach(commit => {
      const tree = renderer.create(<Commit data={commit}/>).toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})