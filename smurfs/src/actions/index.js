import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const UPDATE_SMURF = 'UPDATE_SMURF'

export const getData = () => dispatch => {
    dispatch({ type: FETCH_DATA });
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            console.log(res.data);
            dispatch({ type: UPDATE_SMURF, payload: res.data })
        })
        .catch(err => {
            console.error('Fetch error from API', err);
        })
}

//? sendData needs a payload from SmurfForm?
// export const sendData = () => dispatch => {
//     dispatch({ type: SEND_DATA });
//     axios
// }