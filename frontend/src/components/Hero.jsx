import React from "react";
import heroImg from '../assets/petrol-pump.png'
import {Link} from "react-router-dom";
function Hero() {
    return (
        <div className="container">
            <div className="left">
                <h1>Quick Fill</h1>
                <p>
                    Your one stop solution to all your gas refueling problems. Find nearby
                    gas stations and book your slot in advance. Whether you have a CNG
                    vehicle or an EV, we've got you covered!
                </p>
                <div class="left-btns">
                    <Link to='/Book' className="btn">Book Your Slot</Link>
                </div>
            </div>
            <div className="right">
                <img src={heroImg} alt="" />
            </div>
            <style jsx="true">{`
        .container {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-item: center;
          gap:80px;
          background: #f4f6f9;
        }
        .left {
          max-width: 40%;
          gap:50px;
          h1 {
            font-weight: 900;
            font-size: 70px;
            color: #0069d9;
          }
          p {
            font-size: 22px;
            margin-bottom: 50px;
            color:#444;
          }
          .left-btns{
            display:flex;
            gap:30px;
          }
          .btn {
            text-decoration:none;
            padding: 15px 25px;
            border-radius: 15px;
            font-size: 18px;
            font-weight: 500;
            background-color: orangered;
            color: white;
            border: none;
          }
          .btn:hover {
            color: white;
            background-color: #0069d9;
            border: none;
          }
          
        }.right{
            max-width:40%;
            img{
                width:100%;
          }
      `}</style>
        </div>
    );
}

export default Hero;
