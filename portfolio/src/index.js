import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import Layout from './components/layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Layout>
  <App />
  </Layout>
  </React.StrictMode>
);
