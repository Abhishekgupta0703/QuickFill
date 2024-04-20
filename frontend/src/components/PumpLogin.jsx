import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom'; // Import useNavigate for navigation
import {toast} from "react-hot-toast";
import axios from 'axios';

const PetrolPumpLogin = () => {
    const [pd, setPd] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate for navigation

    useEffect(() => {
        const auth = localStorage.getItem("pumpToken");
        if (auth) {
            navigate("/PumpDashboard");
        }
    }, [navigate])

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/PumpLogin', {
                pd,
                password
            });
            const result = await response.data;
            console.warn(result);

            if (result.error) {
                toast.error(result.error);
            } else {
                localStorage.setItem("pumpToken", JSON.stringify(result));
                toast.success("Logged In Successfully!");
                navigate('/PumpDashboard');
            }
        } catch (error) {
            console.error('Error logging in:', error.message);
            // Display error message to the user
        }
    };

    return (
        <div className="login-container">
            <h2>Petrol Pump Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Pump Id"
                    value={pd}
                    onChange={(e) => setPd(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default PetrolPumpLogin;
