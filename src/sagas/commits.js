import { call, put, takeLatest } from 'redux-saga/effects'

import * as types from '../constants/actionTypes'

export function* fetchCommits() {
  try {
    const commits = yield call(requestCommits)
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

const request = new Request('https://api.github.com/repos/juallom/frontend-homework/commits')

export function requestCommits() {
  return fetch(request, config).then(response => {
    if (response.status === 200) {
      return response.json()
    }
    throw new Error('An error occurred while loading the commits.')
  })
}

export const commitsSaga = [
  takeLatest(types.FETCH_COMMITS_REQUEST, fetchCommits)
]
