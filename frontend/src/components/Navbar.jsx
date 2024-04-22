import React from "react";
import {Link, useNavigate} from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
    const navigate = useNavigate();
    const auth1 = localStorage.getItem("token");
        const auth2 = localStorage.getItem("master");
        const auth3=localStorage.getItem("pumpToken");
    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem("token");
        localStorage.removeItem("pumpToken");
        localStorage.removeItem("master");
        navigate("/");
    };

    return (
        <nav className="sticky-top">
            <div className="nav-logo">Quick Fill</div>

            <ul className="nav-list">
                <li className="list-item">
                    <Link to="/" className="nav-link">
                        <h4>Home</h4>
                    </Link>
                </li>
                <li className="list-item">
                    <Link to="/" className="nav-link">
                        <h4>Services</h4>
                    </Link>
                </li>
                <li className="list-item">
                    <Link to="/" className="nav-link">
                        <h4>Our Team</h4>
                    </Link>
                </li>

                {auth1 ? (
                    <>
                        <li className="list-item">
                            <Link to="/PetrolPump" className="nav-link">
                                <h4>Book Slot</h4>
                            </Link>
                        </li>
                        <li className="list-item">
                            <Link to="/Profile" className="nav-link" >
                                <h4>Profile</h4>
                            </Link>
                        </li>
                        <li className="list-item">
                            <Link to="/logout" className="nav-link" onClick={logout}>
                                <h4>Logout</h4>
                            </Link>
                        </li>
                    </>
                ) : auth2 ? (<>
                        <li className="list-item">
                        <Link to="/AddPetrolPump" className="nav-link">
                            <h4>Add Pump</h4>
                        </Link></li>
                    <li className="list-item">
                        <Link to="/logout" className="nav-link" onClick={logout}>
                            <h4>Loguot</h4>
                        </Link>
                    </li>
                    </>
                ) :auth3? (
                            <>
                               <li className="list-item">
                        <Link to="/PumpDashboard" className="nav-link">
                            <h4>Dashboard</h4>
                        </Link></li>
                    <li className="list-item">
                        <Link to="/logout" className="nav-link" onClick={logout}>
                            <h4>Loguot</h4>
                        </Link>
                    </li>
                        
                            </>) : (
                                <>
                            <li className="list-item">
                                <Link to="/login" className="nav-link">
                                    <h4>Login</h4>
                                </Link>
                            </li>
                                </>
                    )}
            </ul>
        </nav>
    );
}
