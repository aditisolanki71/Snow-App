import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);
const state = {
  labels: [
    'Sprint 1',
    'Sprint 2',
    'Sprint 3',
    'Sprint 4',
    'Sprint 5',
    'Sprint 6',
    'Sprint 7',
    'Sprint 8',
    'Sprint 9',
    'Sprint 10',
    'Sprint 11',
    'Sprint 12',
  ],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: '#A8C5DA',
      borderColor: '#A8C5DA',
      borderWidth: 1,

      data: [25, 38, 33, 28, 40, 31, 20, 25, 32, 11, 18, 25],
      barThickness: 25,
      borderRadius: 5,
    },
  ],
};

const options = {
  title: {
    display: true,
    text: 'Average Rainfall per month',
    fontSize: 20,
  },
  legend: {
    display: true,
    position: 'right',
  },
  scales: {
    x: {
      grid: {
        display: false, // Set display to false to hide vertical grid lines
      },
    },
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 10,
        suggestedMin: 0,
        suggestedMax: 50,
      },
      // gridLines: {
      //   display: false, // Set display to false to hide horizontal grid lines
      // },
      // grid: {
      //   display: false, // Set display to false to hide horizontal grid lines
      // },
    },
  },
  height: 200, // Set the height of the chart here
  // width: 800,
  // width: 100%
  layout: {
    padding: {
      left: 24,
      right: 24,
      top: 24,
      bottom: 24,
    },
  },
  maintainAspectRatio: false,
};

const BarChart = () => {
  return (
    <div style={{ height: '400px', width: '100%' }}>
      <Bar data={state} options={options} />
    </div>
  );
};

export default BarChart;
