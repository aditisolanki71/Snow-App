import { Line } from 'react-chartjs-2';
import './Chart.scss';

const LineChartUpdated = ({ title }) => {
  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
  ];
  const data = {
    // labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    labels: labels,
    dataSets: [
      {
        label: 'Abc',
        // data: labels.map(() =>
        //   faker.datatype.number({ min: -1000, max: 1000 })
        // ),
        data: labels?.map(() =>
          Math.floor(Math.random() * (1000 - -1000 + 1) + -1000)
        ),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  return (
    // <div className="chart_container">
    //   <div>
    //     <h3>{title}</h3>
    //   </div>
    //   <div>
    //     <span>chart</span>
    //     <h1>hey</h1>
    //     <h2>content</h2>
    //   </div>
    // </div>
    <Line data={data} />
    // <div>chart</div>
  );
};

export default LineChartUpdated;
