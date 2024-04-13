import React, {useState, useEffect} from 'react';

const Clock = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formattedDate = currentDateTime.toLocaleDateString(); // Get formatted date
    const formattedTime = currentDateTime.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', second: '2-digit'}).toUpperCase(); // Get formatted time

    return (
        <div className="clock">
            <p>{formattedTime}</p>
            <p>{formattedDate}</p>
            <style jsx="true">{
                `.clock {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    width: 100%;
                    height: 100%;
                    p{
                        padding: 0 5px;
                        font-size: 16px;
                        margin:5px 0;
                        color: #ff93ff;
                    }
                }
                `}
            </style>
        </div>
    );
};

export default Clock;
