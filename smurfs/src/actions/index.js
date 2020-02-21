import axios from 'axios';

export const FETCH_DATA = "FETCH_DATA";

export const getData = () => dispatch => {
    dispatch({ type: FETCH_DATA });
    axios
        .get('')
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.error('Fetch error from API', err);
        })
}