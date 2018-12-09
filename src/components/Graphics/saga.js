import { all, call, put, takeLatest } from 'redux-saga/effects';
import * as types from './types';
import axios from 'axios';
import moment from 'moment';

export function requestCommits() {
  return axios({
    method: 'get',
    url: 'http://api.github.com/repos/trekhleb/javascript-algorithms/commits'
  });
}

function aggregateCommitHistory(commitData) {
  let results = [];

  commitData.forEach(entry => {
    const author = entry.commit.author.name;
    const commitDate = moment(entry.commit.author.date).format('DD MMM YYYY');

    const idx = results.findIndex(
      entry =>
        entry.name === author &&
        moment(entry.commitDate).isSame(moment(commitDate))
    );

    if (idx == -1) {
      results.push({
        name: author,
        commitDate: moment(commitDate).toDate(),
        count: 1
      });
    } else {
      const oldCount = results[idx].count;
      results[idx] = {
        name: author,
        commitDate: moment(commitDate).toDate(),
        count: oldCount + 1
      };
    }
  });

  return results;
}

export function* fetchCommits() {
  try {
    const response = yield call(requestCommits);
    const commits = aggregateCommitHistory(response.data);

    yield put({ type: types.FETCH_COMMITS_SUCCESS, commits });
  } catch (error) {
    yield put({ type: types.FETCH_COMMITS_FAILURE, error });
  }
}

export const commitsSaga = [
  takeLatest(types.FETCH_COMMITS_REQUEST, fetchCommits)
];

export function* rootSaga() {
  yield all([...commitsSaga]);
}
