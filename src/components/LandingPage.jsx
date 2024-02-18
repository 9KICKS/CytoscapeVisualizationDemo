import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/LandingPage.css";

const LandingPage = () => {
    const [address, setAddress] = useState('');

    return (
        <div>
            <h1>Enter Address</h1>
            <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter address"
            />
            <Link to={`/visualization?address=${address}`}>
                <button>Search</button>
            </Link>
        </div>
    );
};

export default LandingPage;
