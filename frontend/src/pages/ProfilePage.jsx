//PrfilePage.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import Profile from "./Profile";

const ProfilePage = () => {
  const token = localStorage.getItem("token");
  const userInfo = JSON.parse(token);
  const userId = userInfo._id;
  const [userData, setUserData] = useState(null);
  const [evSlots, setEvSlots] = useState([]);
  const [cngSlots, setCngSlots] = useState([]);

  const [selectedButton, setSelectedButton] = useState("left");

  const handleButtonClick = button => {
    setSelectedButton(button);
  };
  useEffect(
    () => {
      const fetchUserProfile = async () => {
        try {
          // Fetch user profile and slots data from the backend
          const response = await axios.get("http://localhost:5000/Profile", {
            params: { userId } // Send userId as a query parameter
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
  ); // Include token and userId in the dependency array to fetch data on mount and when they change

  // Function to check if a slot is expired based on its time
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
    // console.log( bookHour,  bookMinute );
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
      {userData
        ? <div className="user-details">
            <div className="user-info">
              <div className="circle">
                {userData.name.slice(0, 1)}
              </div>
              <div className="ne">
                <h2>
                  {userData.name}
                </h2>
                <p>
                  {userData.email}
                </p>
              </div>
            </div>
            <div className="slot-box">
              <h3>Your Slots Details</h3>
              <div className="button-container">
                <button
                  className="button"
                  onClick={() => handleButtonClick("left")}
                >
                  EV Slots
                </button>
                <button
                  className="button"
                  onClick={() => handleButtonClick("right")}
                >
                 CNG Slots
                </button>
            </div>
            <div className="data-container">
              {evSlots && selectedButton === "left" &&
                <ul>
                  {evSlots.slice().reverse().map(slot =>
                    <li
                      key={slot._id}
                      className={
                        isSlotExpired(slot.bookedAt, slot.timeSlot)
                          ? "active"
                          : "expired"
                      }
                    >
                      EV:-{slot.timeSlot}
                      <span>{slot.vehicleNo}</span>
                      <span>{slot.bookedAt}</span>
                    </li>
                  )}
                </ul>}
              {cngSlots && selectedButton === "right" &&
                <ul>
                  {cngSlots.slice().reverse().map(slot =>
                    <li
                      key={slot._id}
                      className={
                        isSlotExpired(slot.timeSlot) ? "expired" : "active"
                      }
                    >
                      CNG:-{slot.timeSlot}
                      <span>{slot.vehicleNo}</span>
                    </li>
                  )}
                </ul>}
            </div></div>
            {/* <Profile/> */}
          </div>
        : <p>Loading...</p>}
      <style jsx="true">{`
        .profile-container {
          padding: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f9f9f9;
        }
        .button-container {
          display: flex;
          width: 100%;
          justify-content: space-between;
          margin-bottom: 20px;
        }
        .button {
          width: 50%;
          padding: 10px;
          background-color: #0069d9;
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        
        .button:hover {
          background-color: #0056b3;
        }
        
        .data-container {
          min-height:350px;
          width: 100%;
          min-width: 475px;
        }
        .profile-card {
          background-color: #fff;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
          width: 400px;
          max-width: 90%;
          animation: fadeInUp 0.5s ease-in-out;
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .user-details {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .circle {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          border: 2px solid #0069d9;
          background-color: #a860ff;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
          margin: 10px;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 48px;
          transition: transform 0.3s ease-in-out;
        }
        .circle:hover {
          transform: scale(1.1);
        }
        h2 {
          color: #333;
          font-size: 24px;
          font-weight: bold;
          margin: 5px;
        }

        p {
          color: #555;
          font-size: 16px;
          font-weight: bold;
          margin: 5px;
        }

        .user-info {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          background-color: #fff8ec;
          border-radius: 10px;
          box-shadow: 0 0 10px #555;
        }

        .ne {
          flex: 0 0 80%;
        }

        .slot-box {
          background: #f0f0f0;
          padding: 10px;
          margin-top: 20px;
          border-radius: 5px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .slot-box h3 {
          color: #a800d4;
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .slot-box ul {
          list-style-type: none;
          padding: 0;
        }

        .slot-box li {
          margin-bottom: 10px;
          padding: 10px;
          border-radius: 5px;
          background-color: #f5f5f5;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
        }

        .slot-box li.expired {
          background-color: #ffcccc;
        }

        .slot-box li.active {
          background-color: #ccffcc;
        }
      `}</style>
    </div>
  );
};

export default ProfilePage;
