import ReactDOM from 'react-dom/client';
import { App } from './App';
import { MantineProvider } from '@mantine/core';
import './styles/reset.css';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './Redux';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { Api } from './api/Api';
import { MockApi } from './api/MockApi';

const isMockApi = false
const api = isMockApi
  ? new MockApi()
  : new Api()

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Provider store={store}>
    <MantineProvider>
      <App />
    </MantineProvider>
  </Provider>
);
