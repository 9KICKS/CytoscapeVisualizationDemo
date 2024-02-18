import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import CytoscapeVisualization from './components/CytoscapeVisualization';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/visualization" element={<CytoscapeVisualization />} />
            </Routes>
        </Router>
    );
}

export default App;
