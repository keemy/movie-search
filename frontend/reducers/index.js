import { combineReducers } from 'redux'

import { ACTION_1, RECEIVE_MOVIES } from '../actions'

function movies(state = [], action) {
  switch (action.type) {
    case RECEIVE_MOVIES:
      return action.movies
    default:
      return state
  }
}

const rootReducer = combineReducers({
  movies
})

export default rootReducer
