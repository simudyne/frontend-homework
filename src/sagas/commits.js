import { call, put, takeLatest } from 'redux-saga/effects'

import * as types from '../constants/actionTypes'

export function* fetchCommits(action) {
  try {
    const commits = yield call(requestCommits, action.repository)
    yield put({ type: types.FETCH_COMMITS_SUCCESS, commits })
  } catch(error) {
    yield put({ type: types.FETCH_COMMITS_FAILURE, error })
  }
}

const headers = new Headers()
headers.append('Content-Type', 'application/json')

const config = {
  method: 'GET',
  headers,
  mode: 'cors',
  cache: 'default'
}

export function requestCommits(repository) {
  const request = new Request(`https://api.github.com/repos/${repository}/commits`)
  return fetch(request, config).then(response => {
    if (response.status === 200)
      return response.json()

    if (response.status === 404)
      throw new Error(`Repository ${repository} doesn't exist`)

    throw new Error('An error occurred while loading the commits.')
  })
}

export const commitsSaga = [
  takeLatest(types.FETCH_COMMITS_REQUEST, fetchCommits)
]
