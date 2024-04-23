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
        password: '',
        location: '',
        charger: {
            available: false,
            percent: '',
            time: '',
            slots: '',
            queue: '',
        },
        cng: {
            available: false,
            nozzles: '',
            fillingRate: '',
            capacity: '',
            queue: '',
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
                    email: '',
                    password: '',
                    location: '',
                    charger: {
                        available: false,
                        percent: '',
                        time: '',
                        slots: '',
                        queue: '',
                    },
                    cng: {
                        available: false,
                        nozzles: '',
                        fillingRate: '',
                        capacity: '',
                        queue: '',
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
                        <input type="text" name="pd" value={formData.pd} placeholder='Station ID' onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <input type="text" name="email" value={formData.email} placeholder='Station Email' onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <input type="text" name="password" value={formData.password} placeholder='Password' onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <input type="text" name="name" value={formData.name} placeholder='Station Name' onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <input type="text" name="location" value={formData.location} placeholder='Location' onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <select name="charger.available" value={formData.charger.available} onChange={handleChange}>
                            <option value={true}>Charger Available</option>
                            <option value={false}>Charger Not Available</option>
                        </select>
                    </div>
                    {formData.charger.available && (
                        <>
                            <div className="form-group">
                                <input type="number" name="charger.percent"  placeholder='Charging Speed in %' value={formData.charger.percent} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <input type="number" name="charger.time" placeholder='Charging Time in Minutes' value={formData.charger.time} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <input type="number" name="charger.slots" placeholder='Total Chrging Ports' value={formData.charger.slots} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <input type="number" name="charger.queue" placeholder='Current Queue' value={formData.charger.queue}  onChange={handleChange} />
                            </div>
                        </>
                    )}
                    <div className="form-group">
                        <select name="cng.available" value={formData.cng.available} onChange={handleChange}>
                            <option value={true}>CNG Available</option>
                            <option value={false}>CNG Not Available</option>
                        </select>
                    </div>
                    {formData.cng.available && (
                        <>
                            <div className="form-group">
                                <input type="number" name="cng.nozzles"placeholder='Total CNG Nozzles' value={formData.cng.nozzles} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <input type="number" name="cng.fillingRate"placeholder='LTR CNG in 1 Min ' value={formData.cng.fillingRate} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <input type="number" name="cng.capacity" placeholder='Current Pressure' value={formData.cng.capacity}  onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <input type="number" name="cng.queue" placeholder='Current Queue'value={formData.cng.queue} onChange={handleChange} />
                            </div>
                        </>
                    )}
                    <button type="submit">Add Petrol Pump</button>
                </form>
                <style jsx="true">{`
                .container {
                    padding: 20px;
                    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1006%26quot%3b)' fill='none'%3e%3cpath d='M0 32.6C39.72 -2.32 71.3 29.5 140 16.9C160.14 13.2 157.56 2.43 177.69 0C227.56 -6.02 228.85 0 280 0C350 0 350 0 420 0C490 0 490 0 560 0C630 0 630 0 700 0C756 0 760.28 -10.34 812 0C830.28 3.66 826.12 28 840 28C853.63 28 849.09 3.59 867.02 0C919.09 -10.41 923.51 0 980 0C1050 0 1050 0 1120 0C1170.14 0 1181.44 -19.42 1220.27 0C1251.44 15.58 1229.15 68.97 1260 70C1319.01 71.97 1329.26 8.08 1400 6C1469.26 3.96 1493.92 17.66 1540 61.76C1563.92 84.66 1540 100.88 1540 140C1540 170.93 1554.02 176.74 1540 201.86C1514.95 246.74 1468.27 233.38 1461.86 280C1453.27 342.45 1488.29 349.29 1510 420C1527.36 476.56 1527.65 476.93 1540 534.55C1542.65 546.93 1545.71 552.99 1540 560C1535.34 565.71 1529.25 562.58 1519.26 560C1459.25 544.49 1459.08 523.82 1400 523.82C1350.66 523.82 1352.15 547.15 1302.42 560C1282.15 565.24 1281.21 560 1260 560C1190 560 1190 560 1120 560C1050 560 1050 560 980 560C931.96 560 916.42 583.63 883.92 560C846.42 532.72 858.11 458.18 840 458.18C822.81 458.18 847.04 535.49 813.33 560C777.04 586.4 756.66 560 700 560C630 560 630 560 560 560C508.34 560 506.64 566.87 456.67 560C436.64 557.25 437.89 540.75 420 540.75C404.74 540.75 407.35 557.67 390.38 560C337.35 567.29 335.19 560 280 560C210 560 210 560 140 560C70 560 36.8 593.2 0 560C-33.2 530.03 -4.33 495.43 0 433.66C0.58 425.43 8.04 428.14 9.82 420C24.89 351.31 37.47 343.93 33.7 280C32.56 260.74 4.61 272.77 0 253.62C-12.24 202.77 0 196.81 0 140C0 86.3 -30.28 59.23 0 32.6' stroke='rgba(151%2c 159%2c 252%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M560 18.67C522.28 27.56 527.5 85.41 527.5 140C527.5 157.04 546.25 148.08 560 161.93C615.76 218.08 617.08 218.16 666.52 280C687.08 305.72 682.19 337.04 700 337.04C718.68 337.04 732.76 312.64 739.49 280C753.08 214.12 754.65 204.03 740.65 140C734.9 113.71 723.7 115.27 700 99.35C633.38 54.6 608.53 7.23 560 18.67' stroke='rgba(51%2c 121%2c 194%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M280 250.83C270.72 250.83 268.39 264.08 264.78 280C249.21 348.66 236.29 354.61 241.64 420C243.9 447.56 261.91 465.9 280 465.9C296.82 465.9 307.91 446.42 311.46 420C320.41 353.47 317.35 346.39 305 280C301.62 261.8 290.83 250.83 280 250.83' stroke='rgba(51%2c 121%2c 194%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1260 213.5C1236.59 213.5 1223.56 249.66 1223.56 280C1223.56 299.96 1239.21 314.1 1260 314.1C1292.43 314.1 1330 302.46 1330 280C1330 252.16 1289.81 213.5 1260 213.5' stroke='rgba(151%2c 159%2c 252%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M0 80.55C49.14 58.52 74.18 61.82 140 77.24C201.06 91.55 242.62 93.67 253.75 140C266.97 195.05 204.44 206.6 188.7 280C174.42 346.6 170.42 357.96 193.7 420C216.07 479.6 234.46 474 280 523.28C299.15 544 323.08 549.57 323.08 560C323.08 567.93 301.54 560 280 560C210 560 210 560 140 560C70 560 54.15 575.85 0 560C-15.85 555.36 -8.96 536.62 0 519.02C26.66 466.62 48.52 475.09 71.23 420C97.78 355.58 117.49 337.83 98.52 280C81.88 229.28 32.78 249.48 0 202.9C-16.48 179.48 0 171.45 0 140C0 110.28 -20.86 89.9 0 80.55' stroke='rgba(51%2c 121%2c 194%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M315 140C287.94 78.63 274.08 38.15 302.7 0C326.58 -31.85 361.35 0 420 0C460.18 0 492.32 -25.03 500.37 0C514.82 44.97 448.38 83.1 465 140C478.19 185.15 516.8 167.1 560 204.1C598.54 237.1 628.48 238.7 628.48 280C628.48 333.92 597.1 339.53 560 394.55C549.9 409.53 534.07 403.92 534.07 420C534.07 460.39 536.63 507.5 560 507.5C590.77 507.5 595.78 455.15 642.35 420C665.78 402.32 671.83 401.85 700 401.85C719.5 401.85 729.63 402.21 737.69 420C765.46 481.28 784.25 513.25 771.67 560C765.41 583.25 735.84 560 700 560C630 560 630 560 560 560C550 560 549 564.05 540 560C479 532.55 473.63 536.68 420 497C379.03 466.68 350.79 462.94 350.79 420C350.79 357.48 384.43 352.34 420 286.09C422.01 282.34 425.96 283.61 425.96 280C425.96 273.56 424.71 271.94 420 266C369.23 201.94 346.59 211.63 315 140' stroke='rgba(51%2c 121%2c 194%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M700 42.9C669.73 42.9 636.67 11.73 636.67 0C636.67 -9.72 668.34 0 700 0C724.18 0 748.36 -9.18 748.36 0C748.36 12.27 725.58 42.9 700 42.9' stroke='rgba(151%2c 159%2c 252%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M797.1 140C805.86 110.33 816.48 91.64 840 91.64C868.16 91.64 881.01 107.94 900.45 140C938.11 202.12 969.66 222.04 954.21 280C939.43 335.44 889.41 366.8 840 366.8C804.49 366.8 793.44 327.98 784.36 280C771.99 214.58 778.04 204.51 797.1 140' stroke='rgba(151%2c 159%2c 252%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M980 63.91C951.79 34.21 928.42 19.63 928.42 0C928.42 -12.33 954.21 0 980 0C1050 0 1050 0 1120 0C1146.49 0 1158.24 -18.01 1172.97 0C1215.51 51.99 1233.89 69.76 1234.55 140C1235.21 209.76 1168.39 217.82 1175.62 280C1181.12 327.31 1211.68 355.12 1260 358.97C1323.87 364.06 1345.64 281.94 1400 297.87C1449.8 312.46 1468.33 364.17 1468.33 420C1468.33 457.48 1441.17 465.29 1400 484.49C1337.01 513.86 1326.99 493.32 1260 517.14C1220.79 531.08 1226.41 548.12 1187.59 560C1156.41 569.55 1153.8 560 1120 560C1050 560 1050 560 980 560C966.28 560 952.55 568.41 952.55 560C952.55 541.48 955.09 518.3 980 506.15C1038.82 477.46 1061.38 507.72 1120 478.33C1147.29 464.65 1151.82 447.36 1151.82 420C1151.82 400.25 1137.22 400.77 1120 384.1C1064.92 330.77 1022.03 341.7 1007.22 280C992.73 219.65 1069.21 202.01 1061.4 140C1055.6 93.97 1018.28 104.21 980 63.91' stroke='rgba(51%2c 121%2c 194%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1272.17 140C1272.17 92.14 1336.5 56 1400 56C1461.66 56 1522.5 92.34 1522.5 140C1522.5 195.59 1461.9 262.5 1400 262.5C1336.74 262.5 1272.17 195.39 1272.17 140' stroke='rgba(51%2c 121%2c 194%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M0 128.49C64.69 127.38 70.29 132.03 140 137.59C142.48 137.79 144.38 137.91 144.38 140C144.38 146.12 146.85 153.42 140 154C74.66 159.51 64.4 158.61 0 152.17C-5.6 151.61 0 146.08 0 140C0 134.25 -5.31 128.58 0 128.49' stroke='rgba(151%2c 159%2c 252%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M420 64.62C410.29 64.62 397.3 24.27 397.3 0C397.3 -8.04 408.65 0 420 0C427.78 0 435.56 -6.13 435.56 0C435.56 26.18 429.42 64.62 420 64.62' stroke='rgba(151%2c 159%2c 252%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1120 42C1099.2 42 1060 11.54 1060 0C1060 -9.46 1090 0 1120 0C1122.84 0 1125.68 -2.48 1125.68 0C1125.68 18.52 1132.04 42 1120 42' stroke='rgba(151%2c 159%2c 252%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1348.26 140C1348.26 120.63 1374.3 106 1400 106C1424.96 106 1449.58 120.71 1449.58 140C1449.58 162.5 1425.05 189.58 1400 189.58C1374.39 189.58 1348.26 162.42 1348.26 140' stroke='rgba(151%2c 159%2c 252%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M500.43 280C500.43 260.27 532.95 246.27 560 246.27C577.95 246.27 590.43 261.64 590.43 280C590.43 303.96 579.39 330.91 560 330.91C534.39 330.91 500.43 302.59 500.43 280' stroke='rgba(51%2c 121%2c 194%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M829.23 280C829.23 246.14 831.93 210 840 210C848.37 210 862.11 248.51 862.11 280C862.11 291.91 849.57 296.8 840 296.8C833.13 296.8 829.23 289.54 829.23 280' stroke='rgba(51%2c 121%2c 194%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1104.44 280C1104.44 256.65 1114.1 229.09 1120 229.09C1125.71 229.09 1127.67 255.21 1127.67 280C1127.67 287.84 1125.05 294.36 1120 294.36C1113.43 294.36 1104.44 289.29 1104.44 280' stroke='rgba(151%2c 159%2c 252%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M132.63 420C139.45 403.55 136.71 385 140 385C143.27 385 138.06 404.2 145.75 420C180.67 491.7 227.1 514.23 225.22 560C224.22 584.23 182.61 560 140 560C103.7 560 68.59 582.38 67.41 560C64.9 512.38 103.16 491.05 132.63 420' stroke='rgba(51%2c 121%2c 194%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M390.11 420C390.11 393 401.74 362.17 420 362.17C441.31 362.17 469.26 394.45 469.26 420C469.26 439.99 442.58 453.25 420 453.25C403.01 453.25 390.11 438.54 390.11 420' stroke='rgba(151%2c 159%2c 252%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1231.36 420C1231.36 410.36 1244.28 408.29 1260 403.85C1328.6 384.46 1339.64 366.49 1400 372.34C1422.97 374.57 1426.67 398.21 1426.67 420C1426.67 434.63 1417.3 442.5 1400 445.17C1333.96 455.36 1326.14 455.58 1260 445.71C1241.82 443 1231.36 431.29 1231.36 420' stroke='rgba(151%2c 159%2c 252%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M631.89 560C631.89 539.38 672.44 490 700 490C721.49 490 730 534.89 730 560C730 569.89 715 560 700 560C665.94 560 631.89 574.38 631.89 560' stroke='rgba(51%2c 121%2c 194%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1006'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
                    background-repeat: no-repeat;
                    background-size:cover;
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
