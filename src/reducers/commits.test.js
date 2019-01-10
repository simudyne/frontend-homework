import reducer, {initialState} from './commits';
import * as types from '../constants/actionTypes';
import expect from 'expect';

const commits = [1, 2, 3]
const repository = 'repo'
const error = { message: 'Error Message' }

describe('Commits reducer', () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should handle FETCH_COMMITS_REQUEST', () => {
    const action = {
      type: types.FETCH_COMMITS_REQUEST,
      repository
    }
    const nextState = reducer(undefined, action)
    const secondState = reducer({...initialState, commits, repository, fetching: true}, action)
    expect(nextState).toEqual({...initialState, repository, fetching: true})
    expect(secondState).toEqual({...initialState, repository, fetching: true})
  })

  it('should handle FETCH_COMMITS_SUCCESS', () => {
    const action = {
      type: types.FETCH_COMMITS_SUCCESS,
      commits
    }
    const nextState = reducer({...initialState, repository, fetching: true}, action)
    expect(nextState).toEqual({...initialState, repository, commits, fetching: false})
  })

  it('should handle FETCH_COMMITS_FAILURE', () => {
    const action = {
      type: types.FETCH_COMMITS_FAILURE,
      error
    }
    const nextState = reducer({...initialState, repository, fetching: true}, action)
    expect(nextState).toEqual({...initialState, repository, error, fetching: false})
  })
})
