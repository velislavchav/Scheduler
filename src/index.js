import './reset.css';
import 'antd/dist/antd.css'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider as ReduxProvider } from "react-redux";
import configureStore from './redux/configureStore';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';

const store = configureStore()

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
