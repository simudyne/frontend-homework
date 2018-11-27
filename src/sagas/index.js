import { all } from 'redux-saga/effects'

import { commitsSaga } from './commits'

export function* rootSaga() {
  yield all([
    ...commitsSaga,
  ])
}
