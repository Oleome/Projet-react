import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import APropos from './pages/a_propos';
import Error from './pages/error';
import Header from './layout/Header/index';
import Footer from './layout/Footer/index';
import FicheLogement from './pages/fiche_logement';
 
ReactDOM.render(
    <React.StrictMode>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/a_propos/" element={<APropos />} />
            <Route path="/fiche_logement/:key" element={<FicheLogement />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </Router>
    </React.StrictMode>,
document.getElementById('root')
)