// PetrolPumop.jsx
import React, {useState, useEffect} from "react";
import Select from "react-select";
import {Link, useParams, useNavigate} from "react-router-dom";
import ChargerAvailability from "../components/ChargerAvailability";
import CNGAvailability from "../components/CNGAvailability";

const PetrolPump = () => {
    const {id} = useParams(); // Get id from URL
    const [selectedPump, setSelectedPump] = useState(null);
    const [petrolPumps, setPetrolPumps] = useState([]);
    const navigate = useNavigate();

    // Get the token from local storage
const token = localStorage.getItem('token');

// Parse the token to get user information
const userInfo = JSON.parse(token);

// Extract userId from user information
const userId = userInfo._id;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/PetrolPumps`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setPetrolPumps(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        if (selectedPump && selectedPump.value) {
            navigate(`/PetrolPumps/${selectedPump.value}`);
        } else {
            console.error('No pump selected.');
        }
    };

    const selectPump = {
        pd: 0,
        name: "Select Petrol Pump",
        label: "Select Petrol Pump",
        value: "00000",
        location: "Petrol Pump Near You",
        charger: {
            available: false,
            intensity: "Select A Pump",
            slots: "Select A Pump",
            queue: "Select A Pump"
        },
        cng: {
            available: false,
            pressure: "Select A Pump",
            capacity: "Select A Pump",
            queue: "Select A Pump"
        }
    };

    const currentPump = petrolPumps.find(pump => pump._id === id);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);

    const openRazorpay = () => {
        var options = {
            "key": "rzp_test_2nFoeUFeOXBMIC", // Enter the Key ID generated from the Dashboard
            "amount": "500", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Acme Corp",
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": "order_Nz0y7TyPfcBXBg", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": "http://localhost:5000/verify-order",
            "prefill": {
                "name": "Gaurav Kumar",
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000"
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        var rzp1 = new window.Razorpay(options);
        rzp1.open();
    };

    return (
        <div className="booking-container">
            <div className="booking">
                <div className="b1">
                    <div className="b11">
                        <Select
                            options={petrolPumps.map(pump => ({
                                value: pump._id,
                                label: pump.name
                            }))}
                            value={selectedPump}
                            onChange={setSelectedPump}
                            placeholder="Select a petrol pump"
                            className="search-bar"
                        />
                    </div>
                    <button onClick={handleSearch}>Search</button>
                </div>
            </div>
            {currentPump ? (
                <div className="pump-details">
                    <h2>Book Your Slot At</h2>
                    <h1 className="pump-name">
                        {currentPump.name}
                    </h1>
                    <h3>
                        {currentPump.location}
                    </h3>
                    <div className="all-det">
                        <ChargerAvailability charger={currentPump.charger}
                            userId={userId} 
                            pumpId={currentPump._id}
                        />
                        <CNGAvailability cng={currentPump.cng} />
                    </div>
                    <Link to="/Booking" className="bth">
                        Back to Home
                    </Link>
                </div>
            ) : (
                <div className="pump-details">
                    <h2>Book Your Slot At</h2>
                    <h1 className="pump-name">
                        {selectPump.name}
                    </h1>
                    <h3>
                        {selectPump.location}
                    </h3>
                    <div className="all-det">
                        <ChargerAvailability charger={selectPump.charger} />
                        <CNGAvailability cng={selectPump.cng} />
                    </div>
                    <Link to="/Booking" className="bth">
                        Back to Home
                    </Link>
                    <button id="rzp-button1" onClick={openRazorpay}>
                        Pay with Razorpay
                    </button>
                </div>
            )}
            <style jsx="true">
                {`
                    .booking-container {
                        width: 100%;
                        height: calc(95vh - var(--navbar-height));

                        .b1 {
                            display: flex;
                            flex-direction: row;
                            justify-content: center;

                            .b11 {
                                width: 500px;
                                margin: 15px;
                                z-index: 0;
                            }

                            button {
                                background: #0069d9;
                                color: white;
                                padding: 8px 25px;
                                border: none;
                                cursor: pointer;
                                font-size: 14pt;
                                margin: 15px;
                            }
                        }

                        .pump-details {
                            background: white;
                            margin: 15px;
                            padding: 10px;
                        }

                        h2 {
                            margin: 15px auto 0;
                            text-align: center;
                            color: #0097d3;
                            font-size: 28px;
                        }

                        h1 {
                            margin: -5px auto;
                            text-align: center;
                            font-size: 45px;
                            font-weight: 800;
                            color: orangered;
                        }

                        h3 {
                            text-align: center;
                            margin: 0 auto;
                            font-size: 20px;
                            color: grey;
                        }

                        .all-det {
                            display: flex;
                            flex-wrap: wrap;
                            flex-direction: row;
                            justify-content: center;
                            margin: 5px;
                        }
                    }

                    .bth {
                        display: block;
                        width: fit-content;
                        margin: 20px auto;
                        text-align: center;
                        text-decoration: none;
                        padding: 13px 20px;
                        border: none;
                        outline: none;
                        border-radius: 18px;
                        cursor: pointer;
                        background-color: orange;
                        color: white;
                        font-size: 20px;
                        transition: all 0.3s ease;
                    }
                `}
            </style>
        </div>
    );
};

export default PetrolPump;
