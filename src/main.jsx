import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// RTK
import { Provider } from 'react-redux';
import store from './app/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
