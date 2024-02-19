import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/LandingPage.css";

const LandingPage = () => {
    const [address, setAddress] = useState('');

    return (
        <div className="landing-page-container">
            <div className="form-container">
                <h1>Check the Address for <br/> Presence in the Database</h1>
                <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter address"
                />
                <Link to={`/visualization?address=${address}`}>
                    <button>Check Address</button>
                </Link>
            </div>
        </div>
    );
};

export default LandingPage;
