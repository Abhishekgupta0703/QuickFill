// AddPetrolPump.jsx
import React, {useState} from 'react';
import {toast} from "react-hot-toast";
import {Link, useNavigate} from "react-router-dom";


const AddPetrolPump = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        pd: '',
        name: '',
        location: '',
        charger: {
            available: false,
            speed: {percent: 0, time: 0},
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


    const handleChange = e => {
        const {name, value} = e.target;
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

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/PetrolPumps', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const result = await response.json();
            console.warn(result);
            if (result.error) {
                toast.error(result.error);

            } else {
                toast.success("Added Successfully!");
                setFormData({
                    pd: '',
                    name: '',
                    location: '',
                    charger: {
                        available: false,
                        speed: {percent: 0, time: 0},
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
                })
                navigate("/AddPetrolPump");
            }
        } catch (error) {
            console.error('Error adding petrol pump:', error);
            alert('Error adding petrol pump');
        }
    };

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
                                <input type="number" name="charger.speedPercent" value={formData.charger.speedPercent} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Charger Speed (Time in minutes):</label>
                                <input type="number" name="charger.speedTime" value={formData.charger.speedTime} onChange={handleChange} />
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
                    color:white;
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
