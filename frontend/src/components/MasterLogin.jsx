import React, {useEffect, useState} from "react"
import {useNavigate} from 'react-router-dom';
import {toast} from "react-hot-toast";
import axios from 'axios';
import {LuMail, LuLock} from 'react-icons/lu'
import './login.css'
const MasterLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const auth1 = localStorage.getItem("token");
        const auth2 = localStorage.getItem("master");
        const auth3 = localStorage.getItem("pumpToken");
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
        if (!email || !password) {
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
        <div className="login">
            <div className="login-inner">
                <div className="left">
                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/login-3305943-2757111.png" alt="" />
                </div>
                <div className="right"><h1>Master Login</h1>
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
    )
}


export default MasterLogin;