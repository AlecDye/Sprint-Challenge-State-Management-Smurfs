import React from 'react';
import { connect } from 'react-redux';

import Smurf from './Smurf';

const SmurfList = props => {
    console.log('SmurfList', props)
    return (
        <>
            <h2>Smurf Census 2020</h2>
            {props.smurfList.map((smurf, index) => (
                <Smurf key={index} smurf={smurf} />

            ))}
        </>
    )
}

//? function mapStateToProps

export default SmurfList;