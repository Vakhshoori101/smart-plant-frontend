import './App.css';
import React from "react";
import Graphs from './components/graphs';
import ThresholdForm from './components/thresholdForm';

function App() {

  return (
    <div className="App" style={{display: "flex", flexDirection: 'row', justifyContent: 'space-between'}}>
        <Graphs />
        <ThresholdForm />
    </div>
  );
}

export default App;
