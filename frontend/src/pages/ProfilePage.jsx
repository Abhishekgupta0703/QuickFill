//PrfilePage.jsx
import React, {useState, useEffect} from "react";
import axios from "axios";

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const token = localStorage.getItem("token");
  const userInfo = JSON.parse(token);
  const userId = userInfo._id;
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
console.log( bookHour,  bookMinute );
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
          <div className="circle" />
          <h2>
            {userData.name}
          </h2>
          <p>
            {userData.email}
          </p>
          <div className="slot-box">
            <h3>Your Slots Details</h3>
            {evSlots &&
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
            {cngSlots &&
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
          </div>
          {/* Add more user details as needed */}
        </div>
        : <p>Loading...</p>}
      <style jsx="true">{`
        .user-details {
          margin: 20px;
        }

        .circle {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          border: 2px solid #0069d9;
          background-color: #fff;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
          margin: 0 auto;
        }

        h2 {
          color: #0069d9;
          font-size: 30px;
          font-weight: 750;
          text-align: center;
          margin: 10px 0 0;
        }

        p {
          color: #0069d9;
          font-size: 16px;
          font-weight: 800;
          text-align: center;
          margin: 1px;
        }

        .slot-box {
          background: white;
          padding: 2px 20px;
        }

        .slot-box h3 {
          color: #a800d4;
          font-size: 30px;
          font-weight: 750;
          margin: 10px 0 0;
        }

        .slot-box ul {
          list-style-type: none;
          padding: 0;
        }

        .slot-box li {
          margin-bottom: 10px;
          padding: 5px;
          border-radius: 5px;
        }

        .slot-box li.expired {
          background-color: #ffcccc; /* Red background for expired slots */
        }

        .slot-box li.active {
          background-color: #ccffcc; /* Green background for active slots */
        }
      `}</style>
    </div>
  );
};

export default ProfilePage;
