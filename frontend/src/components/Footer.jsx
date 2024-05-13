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
                    <p className="p-2">Head Office : Lucknow, Uttar Pradesh</p>
                </div>
                <div className="f12">
                    <h2>Helpful Links</h2>
                    <div className="links">
                        <Link to="/">Home</Link>
                        <Link to="/PetrolPump">Book Slot</Link>
                        <Link to="/PetrolPump">CNG</Link>
                        <Link to="/PetrolPump">EV Charging</Link>
                        <Link to="/PetrolPumpLogin">Pump Login</Link>
                    </div>
                </div>
                <div className="f13">
                    <h2>Get in Touch</h2>
                    <p onClick={sendEmail}>Quickfill@gmail.com</p>
                    <p>Support team: 10am - 6pm</p>
                </div>
                <div className="f14">
                    <h2>Our Team</h2>
                    <div className="links">
                        <Link to="https://www.linkedin.com/in/abhishekgupta0703/" className="linkedin">Abhishek Gupta </Link>
                        <Link to="" className="linkedin">Alok Singh </Link>
                        <Link to="" className="linkedin">Pranjal Bajpai </Link>
                        <Link to="" className="linkedin">Shweta Yadav </Link>
                    </div>
                </div>
            </div>
            <div className="f2">All Rights Reserved © 2024 | Quick Fill</div>
            <style jsx="true">
                {`
          .footer {
            width: 100%; 
            background:url(https://e-amrit.niti.gov.in/assets/admin/dist/img/new-fronend-img/bg-footer.png);
            background-color: #112d4e;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            color: #fff;
            h2{
                font-size:30px;
                margin:10px 0;
            }
            .f1 {
              display: flex;
              justify-content: center;
              gap:10px;
              .f11{
                width:30%;
                margin:10px auto 20px;
                p{
                    margin:0;
                }
                .p-2{
                    margin-top:20px;
                }
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
                    color:white;
                    // background:white;
                    width:fit-content;
                    padding: 3px 5px;
                    border: none;
                    border-radius: 5px;
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
