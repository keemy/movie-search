import fetch from 'isomorphic-fetch'

export const ACTION_1 = 'ACTION_1'
export const ACTION_2 = 'ACTION_2'


export function mySyncAction1(actionData) {
  return {
    type: ACTION_1,
    actionData
  }
}

export function mySyncAction2(actionData) {
  return {
    type: ACTION_2,
    actionData
  }
}

function myAsyncAction1(actionData) {
  return dispatch => {
    dispatch(mySyncAction1(actionData))
  //   return fetch(`something`)
  //     .then(response => response.json())
  //     .then(json => dispatch(mySyncAction2(json)))
  }
}

// export function myAsyncAction2(actionData) {
//   return (dispatch, getState) => {
//     let state = getState();
//     return dispatch(mySyncAction2(actionData))
//   }
// }
