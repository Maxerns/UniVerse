import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/HomePage/App.jsx';
import Gallery from './pages/Gallery/Gallery.jsx';
import About from './pages/About/About.jsx';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Gallery/>
    <About/>
  </React.StrictMode>
);

