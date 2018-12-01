import * as types from './types';

const initialState = {
  data: [],
  error: null,
  fetching: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_COMMITS_REQUEST:
      return { ...state, fetching: true, error: null };

    case types.FETCH_COMMITS_SUCCESS:
      return { ...state, fetching: false, data: action.commits };

    case types.FETCH_COMMITS_FAILURE:
      return { ...state, fetching: false, error: action.error };

    default:
      return state;
  }
};

export default reducer;
