import React, {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import {toast} from "react-hot-toast";

export default function Login() {
    const [formData, setFormData] = useState({
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

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const submitHandle = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/login", {
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
                toast.success("Logged In Successfully!");
                navigate("/");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container">
            <h1 className="title"> Login</h1>
            <div class="card">
                <form onSubmit={submitHandle}>
                    <input
                        type="text"
                        placeholder="Enter email.."
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
                        <Link to={"/signup"} className="link">
                            Register
                        </Link>
                        <button type="submit" className="submit-button">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
