import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom'; // Import useNavigate for navigation
import {toast} from "react-hot-toast";
import axios from 'axios';
import {LuMail, LuLock} from 'react-icons/lu'
import './login.css'
const PetrolPumpLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate for navigation

    useEffect(() => {
        const auth1 = localStorage.getItem("token");
        const auth2 = localStorage.getItem("master");
        const auth3=localStorage.getItem("pumpToken");
        if (auth1) {
            navigate("/");
        }
        if (auth2) {
            navigate("/AddPetrolPump");
        }
        if (auth3) {
            navigate("/PumpDashboard");
        }
    }, [navigate])

    const submitHandle = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/PumpLogin', {
                email,
                password
            });
            const result = await response.data;
            console.log(result);

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
        <div className="login">
        <div className="login-inner">
            <div className="left">
                <img src="https://cdni.iconscout.com/illustration/premium/thumb/login-3305943-2757111.png" alt="" />
            </div>
            <div className="right"><h1>Petrol Pump Login</h1>
                <form onSubmit={submitHandle}>
                    <div className="input-box">
                        <LuMail className="login-icons" />
                        <input
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-box">
                        <LuLock className="login-icons" />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">
                        LOGIN
                    </button>
                </form>

            </div>
        </div>
    </div>
    );
};

export default PetrolPumpLogin;
