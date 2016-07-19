import { combineReducers } from 'redux'
import { ACTION_1, ACTION_2 } from '../actions'

function myReducer(state = { }, action) {
  switch (action.type) {
    case ACTION_1:
    case ACTION_2:
      // need Object.assign({},...) because immutable.
      return Object.assign({}, state, {
        // action.newStateInfo
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  myReducer
})

export default rootReducer
