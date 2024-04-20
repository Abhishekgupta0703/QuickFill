import React, {useState} from 'react'

function Profile() {
  const [selectedButton, setSelectedButton] = useState("left");

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };
  return (
    <div className="container">
    <div className="button-container">
      <button className="button" onClick={() => handleButtonClick("left")}>
        Left Button
      </button>
      <button className="button" onClick={() => handleButtonClick("right")}>
        Right Button
      </button>
    </div>
    <div className="data-container">
      {/* Render data lines based on the selected button */}
      {selectedButton === "left" ? (
        <div>
          <p>Data Line 1 for Left Button</p>
          <p>Data Line 2 for Left Button</p>
          <p>Data Line 3 for Left Button</p>
        </div>
      ) : (
        <div>
          <p>Data Line 1 for Right Button</p>
          <p>Data Line 2 for Right Button</p>
          <p>Data Line 3 for Right Button</p>
        </div>
      )}
    </div>
      <style jsx="true" >
      
        {
          `.container {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
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
            width: 100%;
          }
          
          .data-container > div {
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            background-color: #f9f9f9;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
          }
          
          .data-container > div p {
            margin: 5px 0;
          }
          
          .data-container > div.hidden {
            transform: translateX(-100%);
          }
          `
        }
    </style>
  </div>
  )
}

export default Profile