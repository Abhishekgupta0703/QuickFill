import React, {useEffect, useState} from "react"
import {useNavigate} from 'react-router-dom';
import {toast} from "react-hot-toast";
import axios from 'axios';

const MasterLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

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

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!email ||!password) {
            toast.error("Please enter email and password");
        }
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            toast.error("Please enter a valid email address");
        }
        try {
            const response = await axios.post('http://localhost:5000/masterLogin', {
                email,
                password
            });
            const result = await response.data;
            console.log(result);
            if (result.error) {
                toast.error(result.error);
            } else {
                localStorage.setItem("master", JSON.stringify(result));
                toast.success("Logged In Successfully");
                navigate("/AddPetrolPump");
            }
        } catch (error) {
            console.error('Error logging in:', error.message);
        }
    }

    return (
        <div className="container">
            <h2 className="title"> Master Login</h2>
           <div className="card">
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" disabled={loading} className="submit-button">Login</button>
            </form></div>
        </div>
    )
}

export default MasterLogin;