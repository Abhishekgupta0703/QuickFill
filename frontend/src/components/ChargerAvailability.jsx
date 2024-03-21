// ChargerAvailability.js
import React from "react";

const ChargerAvailability = ({charger}) => {
    return (
        <div className="ev-charger">
            <h3>Electric Charger Availability</h3>
            <p>Available: {charger.available ? "Yes" : "No"}</p>
            <p>Intensity: {charger.intensity}</p>
            <p>Slots: {charger.slots}</p>
            <p>Current Queue:{charger.queue}</p>
            <button>Book You Slot</button>
            <style jsx="true"> {`
                        .ev-charger{
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
                                background: green;
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
        </div >
    );
};

export default ChargerAvailability;
