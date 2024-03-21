import React from "react";
import {Link} from "react-router-dom";
import {LuChevronsRight, LuLinkedin} from 'react-icons/lu'
function Footer() {
    function sendEmail() {
        window.location.href = "mailto:quickfill@gmail.com";
    }
    return (
        <div className="footer">
            <div className="f1">
                <div className="f11">
                    <h2>Quick Fill</h2>
                    <p>Your one stop solution to all your gas refueling problems.</p>
                    <p>Book your slot now!</p>
                </div>
                <div className="f12">
                    <h2>Helpful Links</h2>
                    <div className="links">
                        <Link to="/"><LuChevronsRight className="icons" /> Home</Link>
                        <Link to="/Book"><LuChevronsRight className="icons" /> Book Slot</Link>
                        <Link to="/CNG"><LuChevronsRight className="icons" /> CNG</Link>
                        <Link to="/EV"><LuChevronsRight className="icons" /> EV Charging</Link>
                        <Link to="/policies"><LuChevronsRight className="icons" /> Policies</Link>
                    </div>
                </div>
                <div className="f13">
                    <h2>Get in Touch</h2>
                    <p onClick={sendEmail}>Quickfill@gmail.com</p>
                    <p>Support team: 10am - 6pm</p>
                </div>
                <div className="f14">
                    <h2>Developed By:</h2>
                    <div className="links">
                        <Link to="" className="linkedin">  <LuLinkedin className="li-icons" /> Abhishek Gupta </Link>
                        <Link to="" className="linkedin">  <LuLinkedin className="li-icons" /> Alok Singh </Link>
                        <Link to="" className="linkedin">  <LuLinkedin className="li-icons" /> Pranjal Bajpai </Link>
                        <Link to="" className="linkedin">  <LuLinkedin className="li-icons" /> Shweta Yadav </Link>
                    </div>
                </div>
            </div>
            <div className="f2">All Rights Reserved © 2024</div>
            <style jsx="true">
                {`
          .footer {
            width: 100%;
            background: #0069d9;
            .f1 {
              display: flex;
              justify-content: center;
              gap:10px;
              .f11{
                width:30%;
                margin:10px auto 20px
              }
              .f12, .f13, .f14{
                width:20%;
                margin:10px auto 20px
              }
              .links{
                display:flex;
                gap:5px;
                flex-direction:column;
                a{
                    color:white;
                    display:flex;
                    text-decoration:none;
                }
                .icons{
                    padding:1px 0 0;
                }
                .linkedin{
                    color:orangered;
                    background:white;
                    width:fit-content;
                    padding: 3px 5px;
                    border: none;
                    border-radius: 5px;
                }
                .li-icons{
                    padding:0 5px;
                    color:orangered;
                }
              }
            }
            .f2 {
              text-align: center;
              padding: 12px 0;
              width: 100%;
              border-top: 2px solid gray;
              font-size: 1rem;
            }
          }
        `}
            </style>
        </div>
    );
}

export default Footer;
