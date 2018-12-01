import { commitsSaga } from '../components/Graphics/saga';
import { all } from 'redux-saga/effects';

export function* rootSaga() {
  yield all([...commitsSaga]);
}
