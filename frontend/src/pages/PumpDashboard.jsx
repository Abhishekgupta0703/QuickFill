import React, {useState, useEffect} from "react";
import axios from "axios";



function PumpDashboard() {
    const pumpToken = localStorage.getItem("pumpToken");
    const pumpInfo = JSON.parse(pumpToken);
    const pumpId = pumpInfo._id;
    const [pumpData, setPumpData] = useState(null);
    const [evSlots, setEvSlots] = useState([]);
    const [cngSlots, setCngSlots] = useState([]);



    useEffect(
        () => {
            const fetchPumpProfile = async () => {
                try {

                    const response = await axios.get("http://localhost:5000/PumpDashboard", {
                        params: {pumpId} // Send userId as a query parameter
                    });

                    // Update state with user profile and slots data
                    setPumpData(response.data.pumpProfile);// Assuming 'userProfile' is the key for user profile data
                    setEvSlots(response.data.evSlots);
                    setCngSlots(response.data.cngSlots); // Combine EV and CNG slots
                } catch (error) {
                    console.error("Error fetching user profile:", error.message);
                    // Handle error (e.g., redirect to login page or display error message)
                }
            };

            fetchPumpProfile();
        },
        [pumpToken, pumpId]
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
        <div className='dashboard-container'>


            {pumpData ? (
                <>
                    <div className="pump-slots">
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
                    <div className="pump-profile">
                        <h2>{pumpData.name}</h2>
                        <h3>{pumpData.location}</h3>
                    </div>
                </>) : (<h1>Loading...</h1>)
            }
            <style jsx="true">
                {`
                  .dashboard-container {
                  width: 100%;
                  height: calc(95vh - var(--navbar-height));
                  display: flex;
                  flex-direction: row;
                  justify-content: center;
                  align-items: center;
                  border-radius: 8px;
                  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 6px -4px, rgb(77, 77, 77)  0px 3px 6px;
                  overflow: hidden;

                  .pump-slots{
                    width:70%;
                    height: 100%;
                    background:#ddd;
                  
                    background: white;
                    padding: 2px 20px;
                  }
          
                  .pump-slots h3 {
                    color: #a800d4;
                    font-size: 30px;
                    font-weight: 750;
                    margin: 10px 0 0;
                  }
          
                  .pump-slots ul {
                    list-style-type: none;
                    padding: 0;
                  }
          
                  .pump-slots li {
                    margin-bottom: 10px;
                    padding: 5px;
                    border-radius: 5px;
                  }
          
                  .pump-slots li.expired {
                    background-color: #ffcccc; /* Red background for expired slots */
                  }
          
                  .pump-slots li.active {
                    background-color: #ccffcc; /* Green background for active slots */
                  }
                  .pump-profile{
                    width: 30%;
                    height: 100%;
                    background: #fafafa
                  }}
             ` }
            </style>
        </div>
    )
}

export default PumpDashboard