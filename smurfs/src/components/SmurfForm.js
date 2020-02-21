import React from 'react';
import { connect } from 'react-redux';

// // ? import 'getData' here?
import { getData } from '../actions'

const SmurfForm = props => {
    console.log('SmurfForm', props)
    const handleGetData = event => {
        event.preventDefault();
        props.getData();
    }
    return (
        <>
            <button
                onClick={handleGetData} >Show me Smurfs</button>
            <div>
                <input />
                <input />
                <input />
                <button>Make a Smurf</button>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        isFetchingData: state.isFetchingData
    }
}

export default connect(mapStateToProps, { getData })(SmurfForm);