import {requestCommits, fetchCommits} from './commits';
import expect from 'expect';
import sampleResponse from '../data/commits'

const repository = 'repository'

describe('Commits saga', () => {

  beforeAll(() => {
    global.Headers = jest.fn().mockImplementation(() => ({append: () => {}}))
    global.Request = jest.fn()
  })

  it('requestCommits returns sample data successfully', async () => {
    global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve(sampleResponse)
    }))
    const result = await requestCommits(repository)
    expect(result).toEqual(sampleResponse)
  })

  it('requestCommits returns error on 404', async () => {
    global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 404
    }))
    try {
      await requestCommits(repository)
      expect(true).toBe(false)
    } catch(error) {
      expect(error.message).toBe(`Repository ${repository} doesn't exist`)
    }
  })

  it('requestCommits returns error on 409', async () => {
    global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 409
    }))
    try {
      await requestCommits(repository)
      expect(true).toBe(false)
    } catch(error) {
      expect(error.message).toBe(`Repository ${repository} is empty`)
    }
  })

  it('requestCommits returns error on 500', async () => {
    global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 500
    }))
    try {
      await requestCommits(repository)
      expect(true).toBe(false)
    } catch(error) {
      expect(error.message).toBe('An error occurred while loading the commits.')
    }
  })
})
