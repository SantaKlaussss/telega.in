import ReactDOM from 'react-dom/client';
import { App } from './App';
import { ConfigProvider } from 'antd';
import './styles/reset.css';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './Redux';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Provider store={store}>
    <ConfigProvider >
      <App />
    </ConfigProvider>
  </Provider>
);
