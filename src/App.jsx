import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './App';
import Portfolio from './Portfolio';
import Contact from './Contact';


function App() {
    return (
        <Router>
            <nav className="hidden md:flex items-center gap-6 p-4 bg-white shadow">
                <a href="#accueil" className="nav-link">Accueil</a>
                <a href="#services" className="nav-link">Services</a>
                <a href="#realisations" className="nav-link">Réalisations</a>
                <Link to="/portfolio.js" className="nav-link">Portfolio</Link>
                <Link to="/contact.js" className="nav-link">Contact</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio.js" element={<Portfolio />} />
                <Route path="/contact.js" element={<Contact />} />
                <Route path="/mentions-legales" element={<MentionsLegales />} />

            </Routes>
        </Router>
    );
}

export default App;
