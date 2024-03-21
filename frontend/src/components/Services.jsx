import React from "react";
import pumpImage from '../assets/gas-pump.png'
function Services() {
    return (
        <div className="container c2">
            <h1>Our Services and Expertise</h1>
            <div className="boxes">
                <div className="box">
                    <img src={pumpImage} alt="" />
                    <p>Find nearby gas stations</p>
                </div>
                <div className="box">
                    <img src={pumpImage} alt="" />
                    <p>Book slot for your CNG vehicles</p>
                </div>
                <div className="box">
                    <img src={pumpImage} alt="" />
                    <p>Find EV charging stations</p>
                </div>
                <div className="box">
                    <img src={pumpImage} alt="" />
                    <p>Generate tokens for free</p>
                </div>
            </div>
            <style jsx="true">
                {`
          .c2 {
            width: 100%;
            display:block;
            gap: 80px;
            text-align:center;
            background:#0069d9;
            padding:1px 0;
            height:auto;
            h1{
                margin:50px auto;
                font-size: 45px;
                font-weight: 800;
                color: white;
            }
            .boxes{
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-item: center;
                gap:4%;
                margin-bottom:70px;
                .box{
                    width:17%;
                    background-color: white;
                    transition: all 0.2s ease-in-out;
                    border-radius: 15px;
                    gap: 10px;
                    padding: 15px;
                    font-size: 18px;
                    font-weight: 600;
                    color:black;
                    img{
                        width:80%;
                    }
                }
            }
            
          }
        `}
            </style>
        </div>
    );
}

export default Services;
