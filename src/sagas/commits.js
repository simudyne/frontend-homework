import { put, takeLatest } from 'redux-saga/effects'
import * as types from '../constants/actionTypes'
import axios from "axios";
import { fetchCommitsFailure, fetchCommitsSuccess } from "../actions";

const sampleEndpoint = 'https://api.github.com/repos/reduxjs/redux/commits?page=1&per_page=100'

export function* fetchCommits() {
  try {
    // yield select
    const res = yield axios.get(sampleEndpoint)
    yield put(fetchCommitsSuccess(res.data))
  } catch (err) {
    yield put(fetchCommitsFailure(err.response.data.message))
  }
}

export const commitsSaga = [
  takeLatest(types.FETCH_COMMITS_REQUEST, fetchCommits)
]
