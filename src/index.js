import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './pages/home/index';
import Survey from './pages/survey';
import Header from './components/Header/index'
import Error from './components/Error';
 
ReactDOM.render(
    <React.StrictMode>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/survey" element={<Survey />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
    </React.StrictMode>,
document.getElementById('root')
)