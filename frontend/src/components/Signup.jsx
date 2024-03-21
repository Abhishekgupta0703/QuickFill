import React, {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import {toast} from "react-hot-toast";

export default function Signup() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem("user");
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
                localStorage.setItem("user", JSON.stringify(result));
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
        <div className="container">
            <h1 className="title"> Register</h1>
            <div class="card">
                <form onSubmit={submitHandle}>
                    <input
                        type="text"
                        placeholder="Enter your name..."
                        name="name"
                        onChange={handleInputChange}
                        value={formData.name}
                    />
                    <input
                        type="email"
                        placeholder="Enter your email..."
                        name="email"
                        onChange={handleInputChange}
                        value={formData.email}
                    />
                    <input
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        onChange={handleInputChange}
                        value={formData.password}
                    />
                    <div class="buttons">
                        <Link to={"/login"} className="link">
                            Login
                        </Link>
                        <button type="submit" className="submit-button">
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
