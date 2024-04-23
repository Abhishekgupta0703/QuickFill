import React, {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import {toast} from "react-hot-toast";
import {LuMail, LuLock,LuUser} from 'react-icons/lu'
import './login.css'

export default function Signup() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem("token");
        if (auth) {
            navigate("/");
        }
    }, [navigate]);

    const submitHandle = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/signup", {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const result = await response.json();
            console.warn(result);

            if (result.error) {
                toast.error(result.error);
            } else {
                localStorage.setItem("token", JSON.stringify(result));
                toast.success("Registered Successfully!");
                navigate("/");
            }
        } catch (error) {
            console.error("Random", error);
        }
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="login">
            <div className="login-inner">
                <div className="left">
                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/login-3305943-2757111.png" alt="" />
                </div>
                <div className="right"><h1>Member Register</h1>
                    <form onSubmit={submitHandle}>
                        <div className="input-box">
                            <LuUser className="login-icons" />
                            <input
                                type="text"
                                placeholder="Name"
                                name="name"
                                onChange={handleInputChange}
                                value={formData.name}
                                autoComplete="off"
                            />
                        </div>
                        <div className="input-box">
                            <LuMail className="login-icons" />
                            <input
                                type="text"
                                placeholder="Email"
                                name="email"
                                onChange={handleInputChange}
                                value={formData.email}
                                autoComplete="off"
                            />
                        </div>
                        <div className="input-box">
                            <LuLock className="login-icons" />

                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                onChange={handleInputChange}
                                value={formData.password}
                                autoComplete="off"
                            />
                        </div>
                        <button type="submit">
                            Register
                        </button>
                    </form>
                    <p> Do you have an account? <Link to={"/login"} >
                        Login
                    </Link></p>

                </div>
            </div> </div>
    );
}
