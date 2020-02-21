import axios from 'axios';

export const FETCH_DATA = "FETCH_DATA";

export const getData = () => dispatch => {
    dispatch({ type: FETCH_DATA });
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.error('Fetch error from API', err);
        })
}