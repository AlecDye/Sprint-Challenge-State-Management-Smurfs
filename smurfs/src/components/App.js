import React from "react";
import "./App.css";

// Components
import SmurfForm from './SmurfForm';
import SmurfList from './SmurfList';

export const SmurfContext = createContext();

function App() {
  return (
    <div className="App">
      <h1>Smurfing Around</h1>
      <SmurfForm />
      <SmurfList />
    </div>
  );
}

export default App;
