// CNGAvailability.js
import React from "react";

const CNGAvailability = ({cng}) => {
    return (
        <div className="cng-refuel">
            <h3>CNG Availability</h3>
            <p>Available: {cng.available ? "Yes" : "No"}</p>
            <p>Gas Pressure: {cng.pressure}</p>
            <p>Gas Capacity: {cng.capacity}</p>
            <p>Current Queue:{cng.queue}</p>
            <button>Book Your Slot</button>
            <style jsx="true">{`
                        .cng-refuel{
                            text-align: center;
                            margin: 10px 0;
                            padding: 20px;
                            border: 1px solid #ddd;
                            box-shadow: 0  4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                            width: 40%;
                            h3{
                                color:#0069d9 !important;
                                font-size:30px !important;
                                font-weight:750 !important;
                            }
                            p{
                                font-size: 24px;
                                line-height: 22px;  
                                font-weight:800px;
                                color:green;
                            }
                            button{
                                background: #0069d9 ;
                                color: white;
                                outline: none;
                                cursor: pointer;
                                border:none;
                                padding:13px 15px;
                                font-size:18px;
                                border-radius:10px;
                            }
                        }
            `}</style>
        </div>
    );
};

export default CNGAvailability;
