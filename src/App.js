import './App.css';
import React, { useState, useEffect } from "react";
import Graphs from './components/graphs';
import ThresholdForm from './components/thresholdForm';
import AllStatus from './components/allStatus';
import { SmartPlantBackend } from './components/utils';

function App() {

  const [thresholds, setThresholds] = useState({});

  useEffect(() => {
    const getThresholds = async () => {
      const retrievedThresholds = await SmartPlantBackend.get('/thresholds');
      setThresholds(retrievedThresholds.data);
    }
    getThresholds();
  }, []);

  if (Object.keys(thresholds).length === 0) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="App" style={{display: "flex", flexDirection: 'row', gap: '20px'}}>
        <Graphs thresholds={thresholds} />
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <ThresholdForm thresholds={thresholds} setThresholds={setThresholds} />
          <AllStatus />
        </div>
    </div>
  );
}

export default App;
