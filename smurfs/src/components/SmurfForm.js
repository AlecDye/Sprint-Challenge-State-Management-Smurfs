import React from 'react';
import { connect } from 'react-redux';

// // ? import 'getData' here?
import { getData, postData } from '../actions'
//? import postData here?

const SmurfForm = props => {
    console.log('SmurfForm', props)
    const handleGetData = event => {
        event.preventDefault();
        props.getData();
    }
    //? const handlePostData? handleSubmit?
    const handleSubmit = event => {
        event.preventDefault();
        props.postData();
        console.log('handleSubmit', props)
    }
    return (
        <>
            <button
                className='display-smurfs-btn'
                onClick={handleGetData}
            >Show me Smurfs</button>
            <div className='create-smurf-container'>
                <input
                    className='name-input'
                    type='text' name='name'
                    value={props.name}
                    placeholder='Smurf Name' />
                <input
                    className='age-input'
                    type='number'
                    name='age'
                    value={props.age}
                    placeholder='Age' />
                <input
                    className='height-input'
                    type='text'
                    name='height'
                    value={props.height}
                    placeholder='Height (cm)' />
                <button
                    className='submit-smurf-btn'
                    onClick={handleSubmit}
                >Make a Smurf</button>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        smurfList: state.smurfList,
        isFetchingData: state.isFetchingData
    }
}

export default connect(mapStateToProps, { getData, postData })(SmurfForm);