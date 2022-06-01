import React from "react";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js'; 

ChartJS.register(...registerables);

const Graph = ({title, labels, data, minThreshold, maxThreshold}) => {

  const parsedData = {
    labels,
    datasets: [
      {
        label: title,
        data,
        borderColor: 'green',
        backgroundColor: 'green',
      },
      {
        label: 'Min Threshold',
        data: Array(labels.length).fill(minThreshold),
        borderColor: 'red',
        backgroundColor: 'red',
      },
      {
        label: 'Max Threshold',
        data: Array(labels.length).fill(maxThreshold),
        borderColor: 'red',
        backgroundColor: 'red',
      }
    ],
    
  }

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
    scales: {
      x: {
        ticks: {
          callback: (val, index) => {
            // return ''
            // const d = new Date(labels[index]);
            // return `${d.getMonth() + 1}/${d.getDate()} ${d.getHours()}:${d.getMinutes()}`
            return index % 50 === 0 ? labels[index] : ''; 
          }
        }
      }
    },
    elements: {
      point: {
        radius: 0,
      }
    },
  };

  return <Line options={options} data={parsedData} />
}

export default Graph;