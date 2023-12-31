import './index.css';

import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import App from '@app';

import { SystemConfig } from '@config';
import { Settings } from 'luxon';

Settings.defaultZone = new SystemConfig().getTimezone();

const element = document.getElementById('root');

if (element) {
  ReactDOM.createRoot(element).render(<App />);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
