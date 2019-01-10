import * as types from '../constants/actionTypes'

const initialState = {
  repository: null,
  data: [],
  error: null,
  fetching: false,
}

const commits = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_COMMITS_REQUEST:
      return { ...state, data: [], repository: action.repository, fetching: true, error: null }

    case types.FETCH_COMMITS_SUCCESS:
      return { ...state, fetching: false, data: action.commits }

    case types.FETCH_COMMITS_FAILURE:
      return { ...state, fetching: false, error: action.error }

    default:
      return state
  }
}

export default commits
