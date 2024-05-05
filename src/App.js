import { ConfigProvider } from 'antd';
import theme from './theme/theme';
import AppRoutes from './AppRoutes';
import './App.scss';
import './styles/main.scss';

const App = () => {
  return (
    <div className="App">
      <ConfigProvider theme={theme}>
        <AppRoutes />
      </ConfigProvider>
    </div>
  );
};

export default App;
