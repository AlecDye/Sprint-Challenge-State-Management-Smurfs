import React, { useState } from 'react';
import { connect } from 'react-redux';

// // ? import 'getData' here?
import { getData, postData } from '../actions'
//? import postData here?

const SmurfForm = props => {
    console.log('SmurfForm', props)

    const [name, setName] = useState('')
    const [age, setAge] = useState(null)
    const [height, setHeight] = useState('')

    const handleGetData = event => {
        event.preventDefault();
        props.getData();
    }
    //? const handlePostData? handleSubmit?
    const handleSubmit = event => {
        event.preventDefault();
        props.postData({ name: name, age: age, height: height, id: Date.now() });
        // console.log('handleSubmit', props)
    }
    const handleNameChange = event => {
        event.preventDefault();
        setName(event.target.value);
    }
    const handleAgeChange = event => {
        event.preventDefault();
        setAge(event.target.value);
    }
    const handleHeightChange = event => {
        event.preventDefault();
        setHeight(event.target.value);
    }

    return (
        <>
            <button
                className='display-smurfs-btn'
                onClick={handleGetData}
            >Show me Smurfs</button>
            <form className='create-smurf-container'>
                <input
                    onChange={handleNameChange}
                    className='name-input'
                    type='text' name='name'
                    value={props.name}
                    placeholder='Smurf Name' />
                <input
                    onChange={handleAgeChange}
                    className='age-input'
                    type='number'
                    name='age'
                    value={props.age}
                    placeholder='Age' />
                <input
                    onChange={handleHeightChange}
                    className='height-input'
                    type='text'
                    name='height'
                    value={props.height}
                    placeholder='Height (cm)' />
                <button
                    className='submit-smurf-btn'
                    onClick={handleSubmit}
                >Make a Smurf</button>
            </form>
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