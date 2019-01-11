import { call, put, take, takeLatest } from 'redux-saga/effects'

import * as types from '../constants/actionTypes'

export function* fetchCommits(action) {
  const { repository } = action
  try {
    const commits = yield call(requestCommits, repository)
    yield put({ type: types.FETCH_COMMITS_SUCCESS, commits })
  } catch(error) {
    yield put({ type: types.FETCH_COMMITS_FAILURE, error: error.message })
  }
}

export function requestCommits(repository) {

  const headers = new Headers()
  headers.append('Content-Type', 'application/json')
  const config = {
    method: 'GET',
    headers,
    mode: 'cors',
    cache: 'default'
  }
  const request = new Request(`https://api.github.com/repos/${repository}/commits`)

  return fetch(request, config).then(response => {
    if (response.status === 200)
      return response.json()
    if (response.status === 404)
      throw new Error(`Repository ${repository} doesn't exist`)
    if (response.status === 409)
      throw new Error(`Repository ${repository} is empty`)

    throw new Error('An error occurred while loading the commits.')
  })
}

export const commitsSaga = [
  takeLatest(types.FETCH_COMMITS_REQUEST, fetchCommits)
]
