import fetch from 'isomorphic-fetch';
import querystring from 'querystring';

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

export function getMovies(query) {
  let url = query ? `/api/movie/search/?${querystring.stringify({query})}` : `/api/movie/popular`;

  return dispatch => {
    return fetch(url)
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
