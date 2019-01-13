import { combineReducers } from 'redux'
import commits from './commits'
import { reducer as formReducer } from "redux-form"


const reducers = combineReducers({
  commits,
  form: formReducer
})

export default reducers
