import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Portfolio from "./portfolio";
import Contact from "./contact";

function App() {
    return (
        <Router>
            {/* 🧭 Barre de navigation */}
            <nav className="hidden md:flex items-center justify-center gap-6 p-4 bg-white dark:bg-gray-900 shadow fixed w-full top-0 z-50">
                <a href="#accueil" className="nav-link text-gray-700 dark:text-gray-100 hover:text-blue-600">Accueil</a>
                <a href="#services" className="nav-link text-gray-700 dark:text-gray-100 hover:text-blue-600">Services</a>
                <a href="#realisations" className="nav-link text-gray-700 dark:text-gray-100 hover:text-blue-600">Réalisations</a>
                <Link to="/portfolio" className="nav-link text-gray-700 dark:text-gray-100 hover:text-blue-600">Portfolio</Link>
                <Link to="/contact" className="nav-link text-gray-700 dark:text-gray-100 hover:text-blue-600">Contact</Link>
            </nav>

            {/* ⚙️ Routes */}
            <div className="pt-20"> {/* espace pour la nav fixe */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/portfolio.js" element={<Portfolio />} />
                    <Route path="/contact.js" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
