import React from "react";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js'; 

ChartJS.register(...registerables);

const Graph = ({title, labels, data}) => {
  const parsedData = {
    labels,
    datasets: [
      {
        label: title,
        data,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ]
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
    }
  };

  return <Line options={options} data={parsedData} />
}

export default Graph;