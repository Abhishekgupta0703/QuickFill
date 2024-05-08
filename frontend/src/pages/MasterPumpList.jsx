import React, {useEffect, useState} from 'react'
import axios from 'axios';

function MasterPumpList() {

    const [petrolPumps, setPetrolPumps] = useState([]);

    useEffect(() => {
        const fetchPetrolPumps = async () => {
            try {
                const response = await axios.get('http://localhost:5000/masterGetPumps');
                setPetrolPumps(response.data.petrolPumps);
            } catch (error) {
                console.error('Error fetching petrol pumps:', error);
            }
        };

        fetchPetrolPumps();
    }, []);

    return (
        <div className='container'>
            <h1>Master Admin Dashboard</h1>
            <h2>List of Petrol Pumps</h2>
            <table>
                <thead>
                    <tr>
                        <th>Pump ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Location</th>
                        <th>CNG</th>
                        <th>EV</th>
                        {/* Add more table headers for other details */}
                    </tr>
                </thead>
                <tbody>
                    {petrolPumps.map(pump => (
                        <tr key={pump._id}>
                            <td>{pump.pd}</td>
                            <td>{pump.name}</td>
                            <td>{pump.email}</td>
                            <td>{pump.location}</td>
                            <td>{pump.cng?.available?"Yes":"No"}</td>{/*  some problem */}
                            <td>{pump.ev?.available?"Yes":"No"}</td>{/*  some problem */}
                            {/* Add more table cells for other details */}
                        </tr>
                    ))}
                </tbody>
            </table>
            <style jsx="true" >
                {`
                table{
                    max-width:1400px;
                  width:100%;
                  margin:0 auto;
                  
                  
                 }
                 thead{
                  background:white;
                  border-radius:15px 15px 0 0;
                  tr{
                    background:navy;
                    color:white;
                  }
                  th{
                    font-size:20px;
                    padding:10px 0;
                  }
                 }
                 tbody{
                  background:white;
                  border-radius:0 0 15px 15px;
                 
                 tr{
                  background:white;
                  border-radius:0 0 15px 15px;
                 }
                 th,td{
                    text-align:center;
                    font-size:17px;
                 }
        
                 tr:nth-child(even) {
                  background-color: #999ccc;
                 }
                 tr:nth-child(odd){
                  background-color: #2cc;
                 }
                 }`}
            </style>
        </div>
    );
};

export default MasterPumpList