import { Row, Col } from 'antd';
import './Charts.scss';
import BarChart from './BarChart';
import LineChart from './LineChart';
import TrendChart from './TrendChart';
import BarChart2 from './BarChart2';
import DoughnutChart from './DoughnutChart';
import DoughnutChart2 from './DoughnutChart2';
import BarChart3 from './BarChart3';
import ScatterChart from './ScatterChart';
import BarChart4 from './BarChart4';
import LineChart2 from './LineChart2';
import LineChartUpdated from './LineChartUpdated';
import LineChartExample from './LineChartExample';
import BarChartExample from './BarChartExample';
import BarChartExample2 from './BarChartExample2';
import DoughnutChartExample from './DoughnutChartExample';

const Charts = () => {
  return (
    <>
      <Row>
        <Col span={11} className="chart_left">
          {/* <BarChart /> */}
          <BarChartExample />
        </Col>
        <Col span={11} className="chart_right">
          {/* <LineChart /> */}
          <LineChartExample />
        </Col>
      </Row>
      <Row>
        <Col span={11} className="chart_left">
          <TrendChart />
        </Col>
        <Col span={11} className="chart_right">
          {/* <BarChart2 /> */}
          <BarChartExample2 />
        </Col>
      </Row>

      <Row>
        <Col span={11} className="chart_left">
          {/* <DoughnutChart /> */}
          <DoughnutChartExample />
        </Col>
        <Col span={11} className="chart_right">
          <DoughnutChart2 />
        </Col>
      </Row>
      <Row>
        <Col span={11} className="chart_left">
          <BarChart3 />
        </Col>
        <Col span={11} className="chart_right">
          <ScatterChart />
        </Col>
      </Row>
      <Row>
        <Col span={11} className="chart_left">
          <LineChart2 />
        </Col>
        <Col span={11} className="chart_right">
          <BarChart4 />
        </Col>
      </Row>
    </>
  );
};

export default Charts;
