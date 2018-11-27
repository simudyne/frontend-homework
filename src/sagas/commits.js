import { call, put, takeLatest } from 'redux-saga/effects'

import * as types from '../constants/actionTypes'

export function* fetchCommits() {
  const commits = yield call(requestCommits)
  yield put({ type: types.FETCH_COMMITS_SUCCESS, commits })
}

export function requestCommits() {
  return [
    { sha: '👹' },
    { sha: '👐' },
    { sha: '🦵🦵 ' }
  ]
}

export const commitsSaga = [
  takeLatest(types.FETCH_COMMITS_REQUEST, fetchCommits)
]
