// AddPetrolPump.jsx

import React, {useState} from 'react';
import {toast} from "react-hot-toast";
import {Link, useNavigate} from "react-router-dom";

// AddPetrolPump component for adding a new petrol pump to the system
const AddPetrolPump = () => {
    // Use the useNavigate hook to navigate between routes
    const navigate = useNavigate();

    // Initialize state for the petrol pump form data
    const [formData, setFormData] = useState({
        pd: '',
        name: '',
        email: '',
        location: '',
        charger: {
            available: false,
            percent: 0,
            time: 0,
            slots: 0,
            queue: 0,
        },
        cng: {
            available: false,
            nozzles: 0,
            fillingRate: 0,
            capacity: 0,
            queue: 0,
        },
    });

    // Handle input changes for the form elements
    const handleChange = e => {
        const {name, value} = e.target;

        // Update state based on the input name and value
        if (name.includes('charger')) {
            const [parentName, childName] = name.split('.');
            setFormData(prevState => ({
                ...prevState,
                [parentName]: {
                    ...prevState[parentName],
                    [childName]: value,
                },
            }));
        } else if (name.includes('cng')) {
            const [parentName, childName] = name.split('.');
            setFormData(prevState => ({
                ...prevState,
                [parentName]: {
                    ...prevState[parentName],
                    [childName]: value,
                },
            }));
        } else {
            setFormData(prevState => ({
                ...prevState,
                [name]: value,
            }));
        }
    };

    // Handle form submission
    const handleSubmit = async e => {
        e.preventDefault();

        try {
            // Send a POST request to the server with the form data
            const response = await fetch('http://localhost:5000/AddPetrolPump', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // Handle the server response
            const result = await response.json();
            console.log(result);

            if (result.error) {
                // Display an error toast if the server returns an error
                toast.error(result.error);
            } else {
                // Display a success toast if the petrol pump is added successfully
                toast.success("Added Successfully!");

                // Reset the form data
                setFormData({
                    pd: '',
                    name: '',
                    email:'',
                    location: '',
                    charger: {
                        available: false,
                        percent: 0,
                        time: 0,
                        slots: 0,
                        queue: 0,
                    },
                    cng: {
                        available: false,
                        nozzles: 0,
                        fillingRate: 0,
                        capacity: 0,
                        queue: 0,
                    }
                });

                // Navigate back to the AddPetrolPump route
                navigate("/AddPetrolPump");
            }
        } catch (error) {
            // Display an error alert if there's an error adding the petrol pump
            console.error('Error adding petrol pump:', error);
            alert('Error adding petrol pump', error);
        }
    };

    // Return the JSX for the AddPetrolPump component
    return (
        <div className="container">
            <h1 className="title">Add Petrol Pump</h1>
            <div className="card">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>ID:</label>
                        <input type="text" name="pd" value={formData.pd} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="text" name="email" value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Location:</label>
                        <input type="text" name="location" value={formData.location} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Charger Availability:</label>
                        <select name="charger.available" value={formData.charger.available} onChange={handleChange}>
                            <option value={true}>Available</option>
                            <option value={false}>Not Available</option>
                        </select>
                    </div>
                    {formData.charger.available && (
                        <>
                            <div className="form-group">
                                <label>Charger Speed (Percent):</label>
                                <input type="number" name="charger.percent" value={formData.charger.percent} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Charger Speed (Time in minutes):</label>
                                <input type="number" name="charger.time" value={formData.charger.time} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Charger Slots:</label>
                                <input type="number" name="charger.slots" value={formData.charger.slots} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Charger Queue:</label>
                                <input type="number" name="charger.queue" value={formData.charger.queue} onChange={handleChange} />
                            </div>
                        </>
                    )}
                    <div className="form-group">
                        <label>CNG Availability:</label>
                        <select name="cng.available" value={formData.cng.available} onChange={handleChange}>
                            <option value={true}>Available</option>
                            <option value={false}>Not Available</option>
                        </select>
                    </div>
                    {formData.cng.available && (
                        <>
                            <div className="form-group">
                                <label>CNG Nozzles:</label>
                                <input type="number" name="cng.nozzles" value={formData.cng.nozzles} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label>CNG Filling Rate:</label>
                                <input type="number" name="cng.fillingRate" value={formData.cng.fillingRate} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label>CNG Capacity:</label>
                                <input type="number" name="cng.capacity" value={formData.cng.capacity} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label>CNG Queue:</label>
                                <input type="number" name="cng.queue" value={formData.cng.queue} onChange={handleChange} />
                            </div>
                        </>
                    )}
                    <button type="submit">Add Petrol Pump</button>
                </form>
                <style jsx="true">{`
                .container {
                    padding: 20px;
                }
                .form-group {
                    margin-bottom: 15px;
                }
                label {
                    display: block;
                    color:black;
                    margin-bottom: 5px;
                }
                input{
                    width:93%;
                    
                }
                select {
                    width: 100%;
                    padding: 8px;
                    border-radius: 5px;
                    border: 1px solid #ccc;
                }
                button {
                    background-color: #0069d9;
                    color: #fff;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 5px;
                    cursor: pointer;
                }
            `}</style>
            </div>
        </div>
    )
};

export default AddPetrolPump;
