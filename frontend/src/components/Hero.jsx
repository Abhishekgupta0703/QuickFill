import React from "react";
import heroImg from '../assets/Quickfill Hero.png'
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
                <div className="left-btns">
                    <Link to='/PetrolPump' className="btn">Book Your Slot</Link>
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
          background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABnSURBVHja7M5RDYAwDEXRDgmvEocnlrQS2SwUFST9uEfBGWs9c97nbGtDcquqiKhOImLs/UpuzVzWEi1atGjRokWLFi1atGjRokWLFi1atGjRokWLFi1af7Ukz8xWp8z8AAAA//8DAJ4LoEAAlL1nAAAAAElFTkSuQmCC") repeat 0 0;
            -webkit-animation: bg-scrolling-reverse 0.92s infinite;
            -moz-animation: bg-scrolling-reverse 0.92s infinite;            
            -o-animation: bg-scrolling-reverse 0.92s infinite;            
            animation: bg-scrolling-reverse 0.92s infinite;           
            -webkit-animation-timing-function: linear;
            -moz-animation-timing-function: linear;
            -o-animation-timing-function: linear;
            animation-timing-function: linear;
        }
        .left {
          flex:0 0 35%;
          gap:40px;
          h1 {
            margin:20px auto;
            font-weight: 900;
            font-size: 70px;
            color: #3f72af;
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
           flex:0 0 58%;
            img{
                width:100%;
          }
      `}</style>
        </div>
    );
}

export default Hero;
