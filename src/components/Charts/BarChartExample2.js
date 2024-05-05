import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Bar Chart',
    },
  },
};

const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const data = {
  labels,
  datasets: [
    {
      axis: 'y',
      label: 'Dataset 1',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      backgroundColor: 'rgb(149, 164, 252)',
    },
  ],
};

const BarChartExample2 = () => {
  return <Bar options={options} data={data} />;
};
export default BarChartExample2;
