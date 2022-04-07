import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { NavContextProvider } from './store/NavContext';

ReactDOM.render(
  <NavContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </NavContextProvider>,
  document.getElementById('root')
);
