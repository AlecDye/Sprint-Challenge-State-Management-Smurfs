import React from "react";
import "./App.css";

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { smurfReducer as reducer } from '../reducers';

// Components
import SmurfForm from './SmurfForm';
import SmurfList from './SmurfList';

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Smurfing Around</h1>
        <SmurfForm />
        <SmurfList />
      </div>
    </Provider>
  );
}

export default App;
