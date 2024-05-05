import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChartExample = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        label: 'Line Chart',
        data: [102, 110, 180, 160, 270, 290],
        // data: waveData,
        fill: false,
        // fill: true, // Fill the area under the curve
        cubicInterpolationMode: 'monotone',
        borderColor: 'rgba(75, 192, 192, 1)', // Line color
      },
    ],
  };

  const options = {
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
        labels: {
          enabled: true,
        },
      },
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChartExample;
