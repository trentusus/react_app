import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { newTracker, trackPageView } from "@snowplow/browser-tracker";
import { LinkClickTrackingPlugin } from '@snowplow/browser-plugin-link-click-tracking';
import { PerformanceTimingPlugin } from '@snowplow/browser-plugin-performance-timing';
import { GaCookiesPlugin } from '@snowplow/browser-plugin-ga-cookies';
import { ConsentPlugin } from '@snowplow/browser-plugin-consent';
import { ErrorTrackingPlugin } from '@snowplow/browser-plugin-error-tracking';
import { FormTrackingPlugin } from '@snowplow/browser-plugin-form-tracking';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//https://com-snplow-sales-gcp-prod1.mini.snplow.net
newTracker('sp1', 'https://collector-sales-aws.snowplow.io', { 
  appId: 'my-app-id', 
  plugins: [trackPageView, 
    LinkClickTrackingPlugin,
    ErrorTrackingPlugin,
    FormTrackingPlugin],
});