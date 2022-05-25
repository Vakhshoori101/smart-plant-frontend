import React, { useState, useEffect } from "react";
import { SmartPlantBackend } from "./utils";

const FormInput = ({val, thresholds, onChange}) => (
  <label style={{fontSize: 12}}>{`${val}: `}
    <input
      type="text"
      value={thresholds[val]}
      onChange={onChange}
    />
  </label>
)

const ThresholdForm = () => {
  const [thresholds, setThresholds] = useState({});

  useEffect(() => {
    const getThresholds = async () => {
      const retrievedThresholds = await SmartPlantBackend.get('/thresholds');
      setThresholds(retrievedThresholds.data);
    }
    getThresholds();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await SmartPlantBackend.put('/thresholds', thresholds);
    alert('Thresholds Updated!');
  }

  if (Object.keys(thresholds).length === 0) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <h3>Change Thresholds</h3>
      <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: "column"}}>
        <FormInput
          val={'minMoisture'}
          thresholds={thresholds}
          setThresholds={setThresholds}
          onChange={(e) => setThresholds({...thresholds, minMoisture: e.target.value})}
        />
        <FormInput
          val={'maxMoisture'}
          thresholds={thresholds}
          setThresholds={setThresholds}
          onChange={(e) => setThresholds({...thresholds, maxMoisture: e.target.value})}
        />
        <FormInput
          val={'minLight'}
          thresholds={thresholds}
          setThresholds={setThresholds}
          onChange={(e) => setThresholds({...thresholds, minLight: e.target.value})}
        />
        <FormInput
          val={'maxLight'}
          thresholds={thresholds}
          setThresholds={setThresholds}
          onChange={(e) => setThresholds({...thresholds, maxLight: e.target.value})}
        />
        <FormInput
          val={'minTemperature'}
          thresholds={thresholds}
          setThresholds={setThresholds}
          onChange={(e) => setThresholds({...thresholds, minTemperature: e.target.value})}
        />
        <FormInput
          val={'maxTemperature'}
          thresholds={thresholds}
          setThresholds={setThresholds}
          onChange={(e) => setThresholds({...thresholds, maxTemperature: e.target.value})}
        />
        <FormInput
          val={'minHumidity'}
          thresholds={thresholds}
          setThresholds={setThresholds}
          onChange={(e) => setThresholds({...thresholds, minHumidity: e.target.value})}
        />
        <FormInput
          val={'maxHumidity'}
          thresholds={thresholds}
          setThresholds={setThresholds}
          onChange={(e) => setThresholds({...thresholds, maxHumidity: e.target.value})}
        />
        <input type="submit" />
      </form>
    </div>
  )
}

export default ThresholdForm;