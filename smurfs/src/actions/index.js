import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const UPDATE_SMURF = 'UPDATE_SMURF'
export const POST_DATA = 'POST_DATA';

export const getData = () => dispatch => {
    dispatch({ type: FETCH_DATA });
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            console.log('Fetching successful', res.data);
            dispatch({ type: UPDATE_SMURF, payload: res.data })
        })
        .catch(err => {
            console.error('Fetch error from API', err);
        })
}

//? postData needs a payload from SmurfForm?
export const postData = value => dispatch => {
    dispatch({ type: POST_DATA, payload: value });
    axios
        .post('http://localhost:3333/smurfs', value)
        .then(res => {
            console.log('Post request successful', res);
            dispatch({ type: UPDATE_SMURF, payload: res.data })
        })
        .catch(err => {
            console.log('Post request failed', err);
        })
}