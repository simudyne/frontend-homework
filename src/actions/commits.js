import * as types from '../constants/actionTypes'

export const fetchCommitsRequest = () => ({
  type: types.FETCH_COMMITS_REQUEST,
})

export const fetchCommitsSuccess = ticks => ({
  type: types.FETCH_COMMITS_SUCCESS,
  commits,
})

export const fetchCommitsFailure = error => ({
  type: types.FETCH_COMMITS_FAILURE,
  error,
})
