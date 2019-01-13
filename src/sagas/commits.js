import { call, put, takeLatest } from 'redux-saga/effects'

import * as types from '../constants/actionTypes'
import {getCommits} from '../api/commits'


// export function* fetchCommits({payload}) {

//   const commits = yield call(requestCommits, payload)

//   yield put({ type: types.FETCH_COMMITS_SUCCESS, commits })
// }

export function* fetchCommits({payload}) {
	try {
		const commits = yield call(getCommits, payload)
		yield put({ type: types.FETCH_COMMITS_SUCCESS, commits: commits.data })
	}
	catch(err) {
		yield put({ type: types.FETCH_COMMITS_FAILURE, 
			error: `An error ocurred when trying to retrieve ${payload.repository} repository commits list from ${payload.username}`
		})
	}
}

export const commitsSaga = [
  takeLatest(types.FETCH_COMMITS_REQUEST, fetchCommits)
]
