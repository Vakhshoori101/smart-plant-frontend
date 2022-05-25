import React, { useState, useEffect } from "react";
import Graph from './graph';
import { SmartPlantBackend } from "./utils";


const Graphs = () => {

  const [data, setData] = useState({});

  useEffect(() => {
    const getData = async () => {
      const retrievedData = await SmartPlantBackend.get('/data');
      setData(retrievedData.data);
    }
    getData();
  }, []);

  if (Object.keys(data).length === 0) {
    return <h1>Loading...</h1>
  }

  return (
    <div style={{display: "flex", flexDirection: "column", maxWidth: "700px", flexGrow: 1}}>
      {Object.entries(data).map(([k,v]) => {
        if (k !== 'stamp') {
          return <Graph title={k} labels={data.stamp} data={v} />
        }
      })}
    </div>
  )
}

export default Graphs;