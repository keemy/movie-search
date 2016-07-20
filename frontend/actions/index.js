import fetch from 'isomorphic-fetch'

export const ACTION_1 = 'ACTION_1'
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES'


export function mySyncAction1(actionData) {
  return {
    type: ACTION_1,
    actionData
  }
}

export function receiveMovies(movies) {
  return {
    type: RECEIVE_MOVIES,
    movies
  }
}

export function getMovies(actionData) {
  return dispatch => {
    return fetch(`/api/movie/popular`)
      .then(response => response.json())
      .then(json => {
        dispatch(receiveMovies(json.results));
      })
  }
}

// export function myAsyncAction2(actionData) {
//   return (dispatch, getState) => {
//     let state = getState();
//     return dispatch(mySyncAction2(actionData))
//   }
// }
