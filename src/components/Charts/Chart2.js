import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false, // Set display to false to hide the legend box
    },
    title: {
      display: true,
      text: 'Bar Chart',
    },
  },
  layout: {
    padding: {
      left: 24, // Add 24px of padding to the left
      right: 24, // Add 24px of padding to the right
      top: 24,
      bottom: 24,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 100, // Set the step size to 100
        suggestedMin: 0, // Set the minimum y-axis value
        suggestedMax: 300, // Set the maximum y-axis value

        tension: 0.4, // Adjust the tension for a smoother wave
        borderWidth: 2, // Adjust the line width
        pointRadius: 0, // Remove data points
      },
    },
  },
};

const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const data = {
  labels,
  datasets: [
    {
      label: '',
      // data: labels.map(() => Math.floor(Math.random() * (1000 - (-1000) + 1) + (-1000))),
      data: [0, 100, 200, 300],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

export function Chart2() {
  return <Line options={options} data={data} width={472} height={176} />;
}
