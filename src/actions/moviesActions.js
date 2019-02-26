
import * as types from './actionTypes';

function url() {
    return 'http://demo9595712.mockable.io/getTopFiveMovies';
}

export function receiveMovies(json) {
    return {type: types.RECEIVE_MOVIES, movies: json.components[1].items};
}

export function fetchMovies() {
    return dispatch => {
        return fetch(url(), {
            method: 'GET'
        })
            .then(response => response.json())
            .then(json => dispatch(receiveMovies(json)));
    };
}