import * as types from '../constants/actionTypes'

export const fetchCommitsRequest = (repository) => ({
  type: types.FETCH_COMMITS_REQUEST,
  repository
})
