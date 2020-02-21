import React from "react";
import "./App.css";

import { connect } from 'react-redux';

// Components
import SmurfForm from './SmurfForm';
import SmurfList from './SmurfList';

function App() {
  return (
    <div className="App">
      <h1>Smurfing Around</h1>
      <SmurfForm />
      <SmurfList />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    smurfList: state.smurfList
  }
}

export default connect(mapStateToProps, {})(App);
