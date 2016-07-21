import fetch from 'isomorphic-fetch';
import querystring from 'querystring';

export const RECEIVE_MOVIE = 'RECEIVE_MOVIE'
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES'


export function receiveMovie(movie) {
  console.log( movie )
  return {
    type: RECEIVE_MOVIE,
    movie
  }
}

export function receiveMovies(movies) {
  return {
    type: RECEIVE_MOVIES,
    movies
  }
}

export function getMovie(movieId) {
  let url = `/api/movie/info/${movieId}`;

  return dispatch => {
    return fetch(url)
      .then(response => response.json())
      .then(json => {
        dispatch(receiveMovie(json));
      })
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
