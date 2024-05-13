import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom"



export default function ProfilePage() {
  const token = localStorage.getItem("token");
  const userInfo = JSON.parse(token);
  const userId = userInfo._id;
  const [userData, setUserData] = useState(null);
  const [evSlots, setEvSlots] = useState([]);
  const [cngSlots, setCngSlots] = useState([]);

  useEffect(
    () => {
      const fetchUserProfile = async () => {
        try {
          // Fetch user profile and slots data from the backend
          const response = await axios.get("http://localhost:5000/Profile", {
            params: {userId} // Send userId as a query parameter
          });

          // Update state with user profile and slots data
          setUserData(response.data.userProfile); // Assuming 'userProfile' is the key for user profile data
          setEvSlots(response.data.evSlots);
          setCngSlots(response.data.cngSlots); // Combine EV and CNG slots
        } catch (error) {
          console.error("Error fetching user profile:", error.message);
          // Handle error (e.g., redirect to login page or display error message)
        }
      };

      fetchUserProfile();
    },
    [token, userId]
  );


  const isSlotExpired = (bookedAt, slotTiming) => {
    // console.log(bookedAt, slotTiming);
    let currentTime = new Date();
    let currentYear = currentTime.getFullYear();
    let currentMonth = currentTime.getMonth();
    let currentDay = currentTime.getDate();
    let currentHour = currentTime.getHours();
    let currentMinute = currentTime.getMinutes();
    let bookTime = new Date(bookedAt);
    let bookYear = bookTime.getFullYear();
    let bookMonth = bookTime.getMonth();
    let bookDay = bookTime.getDate();
    let bookHour = slotTiming.slice(8, 10);
    let bookMinute = slotTiming.slice(11, 13);
    if (currentYear < bookYear) {
      return 1;
    } else if (currentYear > bookYear) {
      return 0;
    } else {
      if (currentMonth < bookMonth) {
        return 1;
      } else if (currentMonth > bookMonth) {
        return 0;
      } else {
        if (currentDay < bookDay) {
          return 1;
        } else if (currentDay > bookDay) {
          return 0;
        } else {
          if (currentHour < bookHour) {
            return 1;
          } else if (currentHour > bookHour) {
            return 0;
          } else {
            if (currentMinute <= bookMinute) {
              return 1;
            } else {
              return 0;
            }
          }
        }
      }
    }
  };

  return (
    <div className="profile-container">
      <Shape1 />
      <Shape2 />
      <div className="profile-inner">
        <div className="user-profile">
          {userData && <>
            <div className="img"><img src="https://th.bing.com/th/id/OIP.zmZs_QkaybAwMDzn_OCeoQAAAA?rs=1&pid=ImgDetMain" alt="" /></div>
            <div className="user-info">
              <h2>{userData.name}</h2>
              <h3>{userData.email}</h3>
              <Link to='/PetrolPump' className="btn-1">Find Pump</Link>

            </div></>}
        </div>
        <div className="booked-slots">
          <div className="ev-slots">
            <h2>EV Slots</h2>
            {evSlots.length ? <div className="slots-data">
              <table>
                <thead>
                  <tr>
                    <th>Time Slot</th>
                    <th>Vehicle No</th>
                    <th>Pump Name</th>
                    <th>Booked At</th>
                    <th>Booked On</th>
                  </tr>
                </thead>

                <tbody>
                  {evSlots.slice().reverse().map(slot =>
                    
                    <tr
                      key={slot._id}
                      className={ 
                        isSlotExpired(slot.bookedAt, slot.timeSlot)
                          ? "active"
                          : "expired "
                      }
                    >
                      <td>{slot.timeSlot}</td>
                      <td>{slot.vehicleNo}</td>
                      <td>{slot.pumpId.name}</td>
                      <td>{slot.bookedAt.slice(11, 19)}</td>
                      <td>{slot.bookedAt.slice(0, 10)}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div> : <div className='no-data'>No Bookings Yet!</div>}
          </div>
          <div className="cng-slots">
            <h2>CNG Slots</h2>
            {cngSlots.length ? <div className="slots-data">
              <table>
                <thead>
                  <tr>
                    <th>Time Slot</th>
                    <th>Vehicle No</th>
                    <th>Pump Name</th>
                    <th>Booked At</th>
                    <th>Booked On</th>
                  </tr>
                </thead>

                <tbody>
                  {cngSlots.slice().reverse().map(slot =>
                    <tr
                      key={slot._id}
                      className={
                        isSlotExpired(slot.bookedAt, slot.timeSlot)
                          ? "active"
                          : "expired"
                      }
                    >
                      <td>{slot.timeSlot}</td>
                      <td>{slot.vehicleNo}</td>
                      <td>{slot.pumpId.name}</td>
                      <td>{slot.bookedAt.slice(11, 19)}</td>
                      <td>{slot.bookedAt.slice(0, 10)}</td>
                    </tr>
                  )}
                </tbody>

              </table>
            </div> : <div className='no-data'>No Bookings Yet!</div>}
          </div>
        </div>
      </div>
      <style jsx='true' >

        {
          `.profile-container{
           min-height:calc(100vh - 80px);
           background:#eee;
            display:flex;
            align-items:center;
            justify-content:center;
            overflow:hidden;
            position:relative;

            .profile-inner{
              width:70vw;
              height:80vh;
              display:flex;
              align-items:center;
              justify-content:center;
              gap:50px;
              z-index:1;
              h2{
                margin:0 20px 5px;
              }
            }
            .user-profile{
              height:80vh;
              width:30vw;
              background:white;
              border-radius:15px;
              display:flex;
              align-items:center;
              flex-direction:column;
              gap:30px;
              overflow:hidden;
              box-shadow:rgba(0, 0, 0, 0.4) 0px  6px 20px 0px ;

              .img,
              .user-info{
                text-align:center;
                margin-top:45px;
                // height:50vh;
                width:100%;
                padding-top:15px;
                img{
                  object-fit:cover;
                  aspect-ratio:1;
                  max-width:200px;
                  max-height:200px;
                  border-radius:50%;
                  border:4px solid #fff;
                  box-shadow: 0 0 20px rgba(0,0,0,.3) ;
                }
                a{
                  text-decoration:none;
                  color:white;
                  padding:10px 0;
                  border-radius:25px;
                  width:90%;
                  display:block;
                  margin:auto;
                  background:orangered;
                }
                }
                
            }
            .black{
              color:black;
              width:100;
              text-align:center;
            }
            .booked-slots{
               width:60vw;
               height:80vh;
               display:flex;
               flex-direction:column;
               gap:30px;
               background:transparent;
              .ev-slots,
              .cng-slots{
               padding:15px 20px;
               height:40vh;
               background:white;
               border-radius:15px ;
               box-sizing:border-box ;

              box-shadow:rgba(0, 0, 0, 0.4) 0px  6px 20px 0px ;

              }
              .slots-data{

                height:25vh;
                overflow-x:hidden;
                overflow-y:scroll;

                table{
                  width:100%;
                  
                 }
                 thead{
                  background:white;
                  border-radius:15px 15px 0 0;
                 }
                 tbody{
                  background:white;
                  border-radius:0 0 15px 15px;
                 }
                 tr{
                  background:white;
                  border-radius:0 0 15px 15px;
                 }
                 th,td{
                    text-align:center;
                    font-size:17px;
                 }
        
                 tr.expired{
                  background-color: #ffcccc;
                 }
                 tr.active {
                  background-color: #ccffcc;
                 }
              }
            }

          }`
        }
      </style>
    </div>
  )
}

const Shape1 = () => (
  <svg
    className=" shape1 "
    width="765"
    height="352"
    viewBox="0 0 765 352"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M-233.567 243.494C-233.567 243.494 -192.563 139.13 -133.479 118.445C-84.3687 101.251 -48.7519 155.405 -1.18896 134.314C47.9318 112.533 25.2003 38.0036 76.0346 20.5795C128.975 2.43373 155.956 79.8324 210.867 69.0092C275.621 56.2461 267.911 -15.1528 329.258 -39.4731C391.104 -63.9909 432.024 -44.6718 497.161 -58.2395C581.608 -75.8293 691.003 -208 691.003 -208"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M-198.142 351.446C-198.142 351.446 -215.983 270.082 -156.926 249.4C-107.838 232.209 -37.0917 306.522 10.4495 285.434C59.5477 263.655 76.7688 193.419 127.58 175.997C180.496 157.854 191.203 187.805 246.09 176.984C310.815 164.224 276.625 71.699 337.945 47.3818C399.762 22.8672 492.184 91.1712 557.292 77.6067C641.701 60.0211 726.004 -99.9998 726.004 -99.9998"
      stroke="currentColor"
      strokeOpacity="0.37"
      strokeWidth="2"
      strokeDasharray="4 2.5"
    />
    <style jsx="true">
      {`.shape1{
        position:absolute;
        top:0;
        bottom:0;
        left:0;
        z-index:0;
        color:blue;
      }`}
    </style>
  </svg>
);

const Shape2 = () => (
  <svg
    className=" shape2 "
    width="765"
    height="616"
    viewBox="0 0 765 616"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1413_1802)">
      <path
        d="M2 308C2 138.449 139.449 1 309 1H763V615H309C139.449 615 2 477.551 2 308V308Z"
        fill="transparent"
      />
      <path
        d="M88.3318 766.511C88.3318 766.511 80.9409 654.626 125.572 610.73C162.67 574.244 217.971 608.05 252.008 568.698C287.159 528.058 234.829 470.327 273.387 432.897C313.543 393.918 370.941 452.433 416.001 419.237C469.138 380.091 431.731 318.789 476.86 270.64C522.356 222.1 567.607 222.135 620.748 182.098C689.642 130.192 732.267 -35.9998 732.267 -35.9998"
        stroke="currentcolor"
        strokeWidth="2"
      />
      <path
        d="M150.839 825.443C150.839 825.443 100.019 759.446 144.628 715.563C181.706 679.089 277.378 716.159 311.396 676.819C346.528 636.19 332.169 565.313 370.708 527.896C410.844 488.929 433.295 511.459 478.334 478.276C531.447 439.145 461.081 370.018 506.186 321.884C551.658 273.359 664.378 295.754 717.494 255.732C786.355 203.846 794.41 23.1564 794.41 23.1564"
        stroke="red"
        strokeOpacity="1"
        strokeWidth="2"
        strokeDasharray="4 2.5"
      />
    </g>
    <style jsx="true">
      {`.shape2{
        position:absolute;
        top:17%;
        bottom:0;
        right:-5%;
        color:blue;
        z-index:0;
      }`}
    </style>
  </svg>
);