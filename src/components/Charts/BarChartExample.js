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
      label: 'Dataset 1',
      data: [220, 280, 290, 300, 220, 280],
      backgroundColor: 'rgb(149, 164, 252)',
      barThickness: 15,
      maxBarThickness: 20,
    },
  ],
};

const BarChartExample = () => {
  return <Bar options={options} data={data} />;
};
export default BarChartExample;
