import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import APropos from './pages/aPropos';
import Header from './components/Header/index';
import Footer from './components/Footer';
import Error from './components/Error';
import GlobalStyle from './styles/globlaStyles'
 
ReactDOM.render(
    <React.StrictMode>
        <Router>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/A-propos/" element={<APropos />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </Router>
    </React.StrictMode>,
document.getElementById('root')
)