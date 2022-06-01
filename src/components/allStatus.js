import React, { useState, useEffect } from "react";
import { SmartPlantBackend } from "./utils";
import Status from "./status";

const AllStatus = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const retrievedData = await SmartPlantBackend.get('/status/message');
      setData(retrievedData.data);
    }
    getData();
  }, []);

  if (data.length === 0) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <h3>States</h3>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flexStart', gap: '10px'}}>
        {Object.entries(data).map(([k,v]) => {
          return <Status message={v} />
        })}
      </div>
    </div>
  )
}

export default AllStatus;