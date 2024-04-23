import React, {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import {toast} from "react-hot-toast";
import {LuMail, LuLock} from 'react-icons/lu'

export default function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    useEffect(() => {
        const auth1 = localStorage.getItem("token");
        const auth2 = localStorage.getItem("master");
        const auth3 = localStorage.getItem("pumpToken");
        if (auth1) {
            navigate("/");
        }
        if (auth2) {
            navigate("/AddPetrolPump");
        }
        if (auth3) {
            navigate("/PumpDashboard");
        }
    }, [navigate]);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const submitHandle = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/login", {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const result = await response.json();
            console.log(result);

            if (result.error) {
                toast.error(result.error);
            } else {
                localStorage.setItem("token", JSON.stringify(result));
                toast.success("Logged In Successfully!");
                navigate("/PetrolPump");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="login">
            <div className="login-inner">
                <div className="left">
                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/login-3305943-2757111.png" alt="" />
                </div>
                <div className="right"><h1>Member Login</h1>
                    <form onSubmit={submitHandle}>
                        <div className="input-box">
                            <LuMail className="login-icons" />
                            <input
                                type="text"
                                placeholder="Email"
                                name="email"
                                onChange={handleInputChange}
                                value={formData.email}
                            />
                        </div>
                        <div className="input-box">
                            <LuLock className="login-icons" />
                            
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={handleInputChange}
                            value={formData.password}
                            autoComplete="off"
                        />
                        </div>
                        <button type="submit">
                            LOGIN
                        </button>
                    </form>
                       <p> Don't have an account? <Link to={"/signup"} >
                            Register
                        </Link></p>

                </div>
            </div> 
            <style jsx="true" >
                {
                    `
                    .login{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: calc(100vh - 80px);
                        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1005%26quot%3b)' fill='none'%3e%3cpath d='M129.23 140C129.23 121.2 36.8 141.69 0 101.82C-27.81 71.69 -29.47 21.44 0 0C40.53 -29.47 70 0 140 0C154.74 0 155.43 -3.97 169.47 0C225.43 15.84 226.43 39.62 280 39.62C316.7 39.62 312.57 10.59 350 0C382.57 -9.22 385 0 420 0C490 0 490 0 560 0C630 0 630 0 700 0C770 0 770 0 840 0C910 0 910 0 980 0C1050 0 1050 0 1120 0C1190 0 1190 0 1260 0C1330 0 1330 0 1400 0C1470 0 1505 -35 1540 0C1575 35 1540 70 1540 140C1540 210 1540 210 1540 280C1540 333.49 1564.02 350.37 1540 386.97C1518.08 420.37 1490.31 397.16 1448.13 420C1420.31 435.07 1417.07 436.32 1400 462.78C1371.92 506.32 1394.23 534.72 1357.83 560C1324.23 583.33 1308.91 560 1260 560C1190 560 1190 560 1120 560C1050 560 1050 560 980 560C910 560 910 560 840 560C770 560 770 560 700 560C640.77 560 629.5 577.13 581.54 560C559.5 552.13 575.33 510 560 510C540.42 510 541.9 549.22 511.72 560C471.9 574.22 465.86 560 420 560C390.44 560 360.89 576.42 360.89 560C360.89 528.92 386.51 509.32 420 465C439.4 439.32 466.67 437.67 466.67 420C466.67 406.42 444.5 404.54 420 402.5C351.17 396.76 330.72 435.16 280 404.44C229.61 373.91 251.56 340.74 217.78 280C181.56 214.88 169.24 152.73 140 152.73C114.26 152.73 139.2 224.51 107.82 280C69.2 348.27 30.9 400.26 0 400.26C-23.01 400.26 0 340.13 0 280C0 228.46 -28.05 207.3 0 176.92C36.57 137.3 129.23 158.75 129.23 140' stroke='rgba(151%2c 159%2c 252%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1120 102.67C1089.5 102.67 1060.92 111.37 1059.46 140C1056.4 200.04 1082.58 212.45 1110.97 280C1112.85 284.48 1115.49 284.06 1120 284.06C1124.51 284.06 1127.05 284.45 1129.03 280C1159.05 212.42 1187.02 199.4 1184 140C1182.51 110.74 1151.77 102.67 1120 102.67' stroke='rgba(51%2c 121%2c 194%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M560 248.89C548.03 248.89 544.23 263.98 544.23 280C544.23 301.07 546.91 323.08 560 323.08C578.13 323.08 606.67 299.7 606.67 280C606.67 262.6 579.25 248.89 560 248.89' stroke='rgba(151%2c 159%2c 252%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M980 403.03C975.95 403.03 971.76 411.63 971.76 420C971.76 427.49 975.95 434.74 980 434.74C984.01 434.74 987.89 427.48 987.89 420C987.89 411.63 984.02 403.03 980 403.03' stroke='rgba(51%2c 121%2c 194%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M0 510.59C7.78 510.59 28.97 543.59 28.97 560C28.97 568.3 5.35 569.13 0 560C-9.13 544.43 -6.71 510.59 0 510.59' stroke='rgba(51%2c 121%2c 194%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1502.94 560C1502.94 547.36 1529.41 518 1540 518C1547.94 518 1549.84 548.84 1540 560C1531.31 569.84 1502.94 568.36 1502.94 560' stroke='rgba(51%2c 121%2c 194%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M91 0C91 16.99 29.1 62.05 0 62.05C-16.4 62.05 -18.45 12.58 0 0C27.05 -18.45 91 -14.04 91 0' stroke='rgba(151%2c 159%2c 252%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M229.44 140C229.44 117.37 251.79 116.51 280 105.66C347.07 79.85 364.04 101.98 420 66.67C447.76 49.15 420.12 13.02 447.45 0C490.12 -20.32 503.72 0 560 0C630 0 630 0 700 0C770 0 770 0 840 0C910 0 910 0 980 0C1050 0 1050 0 1120 0C1190 0 1190 0 1260 0C1330 0 1330 0 1400 0C1470 0 1505 -35 1540 0C1575 35 1540 70 1540 140C1540 210 1540 210 1540 280C1540 313.82 1562.59 332.95 1540 347.64C1492.59 378.45 1466.81 381.57 1400 371C1326.81 359.42 1326.43 341.57 1260 303.33C1247.4 296.07 1241.94 293.25 1241.94 280C1241.94 253.58 1252.54 252.43 1260 224C1270.91 182.43 1278.67 179.46 1278.67 140C1278.67 127.46 1271.64 127.02 1260 120C1192.3 79.18 1193.13 53.73 1120 44.33C1053.13 35.73 1036.98 50.08 980 84C956.61 97.92 959.26 111.65 959.26 140C959.26 174.65 970.25 174.83 980 210C989.65 244.83 998.06 247.62 998.06 280C998.06 291.1 985.97 286.23 980 296.97C947.08 356.23 957.7 363.6 920.29 420C887.7 469.15 882.21 466.16 840 508.06C811.69 536.16 814.4 546.96 779.25 560C744.4 572.93 739.63 560 700 560C667.69 560 635.38 577.82 635.38 560C635.38 526.6 665.95 507.52 700 457.56C713.66 437.52 726.84 442.87 730.8 420C742.21 354.09 742.66 344.59 730.73 280C727.26 261.19 716.29 265.43 700 253.19C630.92 201.27 615.97 144.35 560 151.67C513.43 157.76 535.36 221.6 494.93 280C465.36 322.71 461.17 353.89 420 353.89C367.11 353.89 354.5 324.68 306.81 280C284.5 259.1 295.27 250.36 280 222.73C256.59 180.36 229.44 175.9 229.44 140' stroke='rgba(151%2c 159%2c 252%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M0 215.38C19.98 215.38 67.59 246.39 67.59 280C67.59 316.39 19.37 355.38 0 355.38C-14.42 355.38 0 317.69 0 280C0 247.69 -13.81 215.38 0 215.38' stroke='rgba(151%2c 159%2c 252%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1037.18 420C1071.84 372.45 1077.15 334.78 1120 334.78C1165.98 334.78 1169.54 375.33 1214.84 420C1239.54 444.35 1239.74 444.7 1260 472.83C1290.15 514.7 1315.66 531.66 1315.66 560C1315.66 575.25 1287.83 560 1260 560C1194 560 1192.97 562.95 1128 560C1122.97 559.77 1124.69 553.64 1120 553.64C1107.96 553.64 1107.59 559.41 1094.55 560C1037.59 562.59 1037.28 560 980 560C960.31 560 940.63 567.19 940.63 560C940.63 550.61 965.61 547.71 980 526.84C1013.88 477.71 1001.84 468.48 1037.18 420' stroke='rgba(51%2c 121%2c 194%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M32.67 0C32.67 6.1 10.45 22.27 0 22.27C-5.89 22.27 -6.62 4.51 0 0C9.71 -6.62 32.67 -5.04 32.67 0' stroke='rgba(151%2c 159%2c 252%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M560 58.95C535.5 58.95 516.08 18.45 516.08 0C516.08 -11.02 538.04 0 560 0C591.11 0 622.22 -12.4 622.22 0C622.22 17.08 588.57 58.95 560 58.95' stroke='rgba(151%2c 159%2c 252%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M648 140C648 114.7 668.58 84.85 700 84.85C755.25 84.85 821.33 116 821.33 140C821.33 162.93 757.43 178.72 700 178.72C670.77 178.72 648 161.64 648 140' stroke='rgba(51%2c 121%2c 194%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1260 36.67C1221.77 8.05 1169.41 9.52 1169.41 0C1169.41 -8.82 1214.7 0 1260 0C1330 0 1330 0 1400 0C1446.66 0 1482.36 -27.42 1493.33 0C1510.36 42.58 1442.88 79.46 1456 140C1466.22 187.15 1513.29 170.87 1540 215.38C1555.29 240.87 1540 247.69 1540 280C1540 294.15 1551.62 308.02 1540 308.31C1481.62 309.77 1469.63 296.97 1400 283.5C1396.45 282.81 1394.68 283.42 1393.64 280C1372.9 211.67 1390.26 201.58 1356.44 140C1323.44 79.91 1315.29 78.05 1260 36.67' stroke='rgba(151%2c 159%2c 252%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M0 253.85C8.09 253.85 27.36 266.4 27.36 280C27.36 294.73 7.84 310.51 0 310.51C-5.84 310.51 0 295.25 0 280C0 266.92 -5.59 253.85 0 253.85' stroke='rgba(151%2c 159%2c 252%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M381.28 280C381.28 250.94 403.31 212.59 420 212.59C435.48 212.59 445.63 249.09 445.63 280C445.63 295.43 434.08 305.28 420 305.28C401.91 305.28 381.28 297.29 381.28 280' stroke='rgba(151%2c 159%2c 252%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M816.1 280C824.76 225.02 825.46 171.11 840 171.11C854.91 171.11 868.52 224.08 875 280C882.93 348.52 882.23 354.26 868.82 420C864.73 440.07 855.62 451.61 840 451.61C821.61 451.61 803.95 442.6 800.8 420C792 356.79 805.16 349.46 816.1 280' stroke='rgba(151%2c 159%2c 252%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1086.48 420C1086.48 400.93 1102.66 385.51 1120 385.51C1138.61 385.51 1158.39 400.62 1158.39 420C1158.39 444.91 1138.35 474.09 1120 474.09C1102.4 474.09 1086.48 445.22 1086.48 420' stroke='rgba(51%2c 121%2c 194%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M689.23 560C689.23 554.43 694.21 542.93 700 542.93C706.2 542.93 713.21 554.71 713.21 560C713.21 563.24 706.61 560 700 560C694.62 560 689.23 562.97 689.23 560' stroke='rgba(51%2c 121%2c 194%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1228 560C1228 554.24 1246.25 538.87 1260 538.87C1268.99 538.87 1273.49 553.13 1273.49 560C1273.49 563.7 1266.74 560 1260 560C1244 560 1228 564.81 1228 560' stroke='rgba(51%2c 121%2c 194%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1005'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
                        background-repeat: no-repeat;
                        background-size:cover;
                        .login-inner{
                            width: 950px;
                            height:530px;
                            border-radius:10px;
                            display:flex;
                            align-items: center;
                            justify-content: center;
                            background:#3f72af;
                            gap:50px;
                        }
                        .right{
                            flex:0 0 30%;
                            h1{
                                color:white;
                                text-align: center;
                                margin:0 auto 40px;
                            }
                            .input-box{
                                position:relative;
                               
                            }
                            input{
                                width:calc(100% - 35px);
                                font-size:13px;
                                border-radius: 18px;
                                background:#fff;
                                padding: 12px 0 12px 35px;
                                border: none;
                                outline:none;
                            }
                            .login-icons{
                                position:absolute;
                                top:11.5px;
                                left:13px;
                                color:#656565;
                            }
                            form button{
                                font-weight:bold;
                                width:100%;
                                margin:20px auto;
                                background-color: #19d4ca;
                                border:none;
                                padding: 12px 0;
                                border-radius: 20px;
                                color: #fff;
                                box-shadow: none;
                            }p{
                                color:#ddd;
                                text-align: center;
                                // margin-top: 20px;
                                a{
                                    text-decoration: none;
                                    color: #19d4ca;
                                }
                            }
                            
                        }
                        

                    }`
                }
            </style>
        </div>
    );
}
