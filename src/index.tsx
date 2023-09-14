import ReactDOM from 'react-dom/client';
import { App } from './App';
import { ConfigProvider } from 'antd';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <ConfigProvider theme={{
    token: { colorPrimary: '#00b96b' } }}
  >
    <App />
  </ConfigProvider>
);
