import 'bootstrap/dist/css/bootstrap.min.css'; // ✅ Bootstrap CSS
import 'react-toastify/dist/ReactToastify.css'; // ✅ Toastify CSS

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/kannada-milana-sathi-connect-main">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
