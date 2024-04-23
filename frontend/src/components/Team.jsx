import React from 'react'
import profile1 from '../assets/Abhi.png'

function Team() {
    return (
        <>
            <div className="team">
                <h1>Our Hardworking Team</h1>
                <div className="profiles">
                    <div className="profile">
                        <div className="profile-img">
                            <img src={profile1} alt="" />
                        </div>
                        <div className="profile-det"><h2>Abhishek Gupta</h2><h3>MERN Stack Developer</h3><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum tenetur in aut?</p>
                            <ul >
                                <li><a href=""><i className='fa-brands fa-linkedin'></i></a></li>
                                <li><a href=""><i className='fa-brands fa-github'></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="profile">
                        <div className="profile-img">
                            <img src={profile1} alt="" />
                        </div>
                        <div className="profile-det"><h2>Abhishek Gupta</h2><h3>MERN Stack Developer</h3><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum tenetur in aut?</p>
                            <ul >
                                <li><a href=""><i className='fa-brands fa-linkedin'></i></a></li>
                                <li><a href=""><i className='fa-brands fa-github'></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="profile">
                        <div className="profile-img">
                            <img src={profile1} alt="" />
                        </div>
                        <div className="profile-det"><h2>Abhishek Gupta</h2><h3>MERN Stack Developer</h3><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum tenetur in aut?</p>
                            <ul >
                                <li><a href=""><i className='fa-brands fa-linkedin'></i></a></li>
                                <li><a href=""><i className='fa-brands fa-github'></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="profile">
                        <div className="profile-img">
                            <img src={profile1} alt="" />
                        </div>
                        <div className="profile-det"><h2>Abhishek Gupta</h2><h3>MERN Stack Developer</h3><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum tenetur in aut?</p>
                            <ul >
                                <li><a href=""><i className='fa-brands fa-linkedin'></i></a></li>
                                <li><a href=""><i className='fa-brands fa-github'></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <style jsx="true">{
                    `.team{
                        position:relative;
                        background-repeat: no-repeat;
                        background-size: cover;
                        background-position: center;
                        // background-color:#3f72af;
                        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1000%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='%230e2a47'%3e%3c/rect%3e%3cpath d='M125.15 0C134.66 0.88 130.5 11.35 140 12.89C207.92 23.93 210.42 28.37 280 25.17C350.42 21.93 355.86 -15.61 420 0C495.86 18.47 504.74 93.33 560 93.33C592.89 93.33 561.91 22.93 596.3 0C631.91 -23.74 648.15 0 700 0C749.13 0 762.12 -21.18 798.25 0C832.12 19.85 815.4 82.07 840 82.07C867.59 82.07 862.62 23.46 902.63 0C932.62 -17.58 941.32 0 980 0C1050 0 1050 0 1120 0C1190 0 1190 0 1260 0C1330 0 1330 0 1400 0C1450.26 0 1454.04 -10.65 1500.51 0C1524.04 5.39 1533.67 9.65 1540 32.08C1553.42 79.65 1540 86.04 1540 140C1540 210 1560.13 280 1540 280C1516.23 280 1499.22 207.71 1452.2 140C1429.22 106.91 1435.1 87.91 1400 78.4C1339 61.87 1322.42 67.42 1260 87.91C1228.59 98.22 1233.71 111.98 1212.34 140C1163.71 203.78 1178.64 227.3 1120 271.52C1085.8 297.3 1026.67 276.86 1026.67 280C1026.67 283.13 1074.09 276.67 1120 284.06C1190.75 295.45 1192.37 293.95 1260 317.56C1332.37 342.83 1334.08 390.66 1400 381.82C1474.08 371.88 1501.3 269.45 1540 280C1571.3 288.54 1540 350 1540 420C1540 490 1575 525 1540 560C1505 595 1470 560 1400 560C1330 560 1330 560 1260 560C1190 560 1190 560 1120 560C1050 560 1050 560 980 560C910 560 910 560 840 560C770 560 770 560 700 560C630 560 630 560 560 560C490 560 490 560 420 560C350 560 350 560 280 560C238 560 217.56 585.81 196 560C159.08 515.81 154.73 487.28 163.04 420C172.02 347.28 237.81 329.9 230.59 280C226.29 250.27 185.41 260.75 140 260.75C88.78 260.75 44.36 248 37.33 280C26.86 327.63 110.26 352.31 105 420C99.38 492.31 63.56 495.99 15.56 560C11.06 565.99 0.78 567 0 560C-7 497 0 490 0 420C0 350 0 350 0 280C0 210 0 210 0 140C0 70 -33.04 36.96 0 0C29.54 -33.04 64.66 -5.57 125.15 0' stroke='rgba(51%2c 121%2c 194%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M700 112C659.43 112 617.65 117.61 617.65 140C617.65 168.45 661.2 213.68 700 213.68C734.19 213.68 763.64 169.66 763.64 140C763.64 118.82 732.43 112 700 112' stroke='rgba(51%2c 121%2c 194%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M560 315C518 317.94 500 371.52 500 420C500 454.02 523.98 479.24 560 480C623.98 481.36 631.04 453.3 700 424.24C702.22 423.3 702.37 422.32 702.37 420C702.37 413.2 705.58 410.11 700 406C634.39 357.61 618 310.94 560 315' stroke='rgba(51%2c 121%2c 194%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M72.12 0C110.96 16.36 99.37 46.35 140 58.95C203.31 78.59 210.18 66.9 280 64.49C350.18 62.07 358.68 30.06 420 49.3C478.99 67.81 498.23 83.34 520.63 140C543.83 198.69 536.8 218.89 511.21 280C486.48 339.05 466.53 331.07 420 380.33C400.41 401.07 378.97 399.43 378.97 420C378.97 442.15 398.65 443.67 420 465.77C466.28 513.67 514.23 532.4 514.23 560C514.23 579.52 467.12 560 420 560C350 560 350 560 280 560C267.16 560 259.71 570.37 254.33 560C223.38 500.37 200.26 484.98 207.34 420C213.1 367.14 241.82 370.58 280 324.33C299.6 300.58 322.9 301.57 322.9 280C322.9 259.56 306.68 249.49 280 240.3C215.23 217.99 207.57 236.98 140 217C67.57 195.58 62.78 192.03 0 157.5C-7.22 153.53 0 148.75 0 140C0 70 -23.8 46.2 0 0C12.26 -23.8 40.96 -13.12 72.12 0' stroke='rgba(51%2c 121%2c 194%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M700 42C680.84 42 661.11 12.5 661.11 0C661.11 -8.5 680.56 0 700 0C718.42 0 736.84 -8.34 736.84 0C736.84 12.66 718.7 42 700 42' stroke='rgba(51%2c 121%2c 194%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M931 140C931 101.65 940.39 72.92 980 50.91C1034.89 20.42 1075.05 9.63 1120 35C1153.98 54.18 1137.87 89.51 1137.87 140C1137.87 154.74 1134.34 162.58 1120 165.45C1055.4 178.38 1046.73 180.6 980 171.61C952.23 167.87 931 162 931 140' stroke='rgba(51%2c 121%2c 194%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1260 6.51C1224.9 5.11 1190 1.63 1190 0C1190 -1.62 1225 0 1260 0C1330 0 1330 0 1400 0C1405.39 0 1410.77 -1.85 1410.77 0C1410.77 2.35 1406.7 8.11 1400 8.4C1331.32 11.37 1329.9 9.31 1260 6.51' stroke='rgba(51%2c 121%2c 194%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1511.53 140C1511.53 121.62 1531.98 105 1540 105C1546.22 105 1540 122.5 1540 140C1540 162.7 1546.53 185.41 1540 185.41C1532.29 185.41 1511.53 161.83 1511.53 140' stroke='rgba(51%2c 121%2c 194%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M0 364C10.3 364 37.69 392.12 37.69 420C37.69 447.34 10.34 474.44 0 474.44C-8.5 474.44 0 447.22 0 420C0 392 -8.54 364 0 364' stroke='rgba(51%2c 121%2c 194%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M761.69 420C795.75 371.13 789.69 349.18 840 329.41C898.85 306.28 909.98 332.85 980 334.19C1049.98 335.53 1053.72 318.51 1120 334.78C1193.72 352.88 1190.5 367.92 1260 402.93C1275.09 410.53 1273.58 413.61 1289.17 420C1343.58 442.3 1345.11 460.3 1400 460.3C1448.03 460.3 1450.27 444.72 1495 420C1520.27 406.04 1526.24 382.94 1540 382.94C1548.74 382.94 1540 401.47 1540 420C1540 450 1545.89 451.02 1540 480C1531.66 521.02 1541.79 542.71 1511.53 560C1471.79 582.71 1455.76 560 1400 560C1330 560 1330 560 1260 560C1190 560 1190 560 1120 560C1050 560 1050 560 980 560C910 560 910 560 840 560C770 560 770 560 700 560C679.59 560 659.17 566.64 659.17 560C659.17 551.79 685.37 550.28 700 530.3C736.63 480.28 725.75 471.58 761.69 420' stroke='rgba(51%2c 121%2c 194%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M75.12 140C75.12 122.84 104.67 111.24 140 105C207.11 93.15 210.02 105.42 280 103.82C350.02 102.22 355.5 86.04 420 98.59C448.47 104.13 460.1 112.24 465.94 140C479.19 202.94 474.53 215.22 458.18 280C451.56 306.22 439.42 322 420 322C400 322 400.46 300.2 379.35 280C330.46 233.23 338.66 214.22 280 188.06C218.99 160.85 207.49 189.08 140 173.25C105.05 165.05 75.12 156.97 75.12 140' stroke='rgba(51%2c 121%2c 194%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M19.09 0C19.09 14.26 5.01 40.65 0 40.65C-4.53 40.65 -6.49 13.83 0 0C3.05 -6.49 19.09 -6.06 19.09 0' stroke='rgba(51%2c 121%2c 194%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M251.65 420C251.65 399.29 264.4 382.67 280 382.67C297.88 382.67 318.62 398.17 318.62 420C318.62 454.17 297.17 494.67 280 494.67C263.69 494.67 251.65 455.29 251.65 420' stroke='rgba(51%2c 121%2c 194%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M821.02 420C827.1 406.94 826.37 400.56 840 398.04C905.86 385.88 909.97 393.78 980 390.65C1049.97 387.52 1052.83 375.86 1120 385.51C1154.99 390.54 1184.32 398.64 1184.32 420C1184.32 445.64 1159.26 470.05 1120 479.5C1057.1 494.64 1038.41 447.29 980 469.19C931.08 487.54 950.33 530.81 905.33 560C880.33 576.22 872.66 560 840 560C802.31 560 767.78 583.32 764.62 560C758.29 513.32 789.41 487.92 821.02 420' stroke='rgba(51%2c 121%2c 194%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M361.67 560C361.67 552.95 393.24 533.08 420 533.08C435.86 533.08 446.92 552.12 446.92 560C446.92 565.58 433.46 560 420 560C390.84 560 361.67 566.41 361.67 560' stroke='rgba(51%2c 121%2c 194%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1314.44 560C1314.44 547.57 1359.92 513.33 1400 513.33C1428.8 513.33 1452.2 546.63 1452.2 560C1452.2 569.97 1426.1 560 1400 560C1357.22 560 1314.44 570.91 1314.44 560' stroke='rgba(51%2c 121%2c 194%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1000'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
                        height:100vh;
                        display:flex;
                        flex-direction:column;
                        align-items:center;
                        padding:30px 100px;
                        gap:15px;
                      
                        h1{
                            font-size: 45px;
                            margin: 0;
                            color:white;
                        }
                        p{
                            tex-align: center;
                            margin-bottom:40px;
                        }

                        .profiles{
                            display:flex;
                            flex-direction:row;
                            flex-wrap: wrap;
                            gap:30px;
                            align-items:center;
                            justify-content:center;

                            .profile{
                                width:300px;
                                height:550px;
                                background:white;
                                border-radius:5px;
                                box-shadow: 0 3px 16px rgba(0,0,0,0.3);
                                filter:drop-shadow( 0 3px 16px rgba(0,0,0,0.3));
                                display:flex;
                                align-items:center;
                                justify-content:center;
                                flex-direction:column;
                                overflow:hidden;
                                transition:all 0.3s;
                                &:hover{
                                    transform:scale(1.05);
                                    
                                }
                                .profile-img{
                                    flex:0 0 60%;
                                    position:relative;
                                    img{
                                        width:100%;
                                    }
                                }
                                .profile-img::after{
                                    content:"";
                                    position:absolute;
                                    top:0;
                                    left:0;
                                    width:100%;
                                    height:100%;
                                    background:url(https://bootstrapmade.com/demo/templates/FlexStart/assets/img/team-shape.svg) no-repeat center bottom;
                                    z-index:1;
                                }
                                .profile-det{
                                    flex:0 0 40%;
                                    text-align:center;
                                    color:#112d4e;
                                    h2{
                                        font-size:30px;
                                        color:#37517e;
                                    }
                                    h2,p, h3{
                                        margin:0;
                                    }
                                    h3{
                                        font-weight:100;
                                        color:gray;
                                    }
                                    ul{
                                        padding:0;
                                        list-style-type:none;
                                        display:flex;
                                        justify-content:center;
                                        gap:15px;
                                        a{
                                            text-decoration:none;
                                            color:#37517e;
                                            border-radius:50%;
                                            background:#d8e2ef;
                                            padding:10px 11px;
                                            display:flex;
                                            align-items:center;
                                            justify-content:center;
                                            transition:all 0.2s ease-in-out;
                                        }
                                        a:hover{
                                            color:#fff;
                                            background:#47b2e4;
                                        }
                                        i{
                                            font-size:27px;
                                        }
                                    }
                                }
                            }
                            
                        }
                    }
                    .team::before{
                        content: "";
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        height: 15px;
                        background-repeat: repeat no-repeat;
                        background-position: bottom;
                        bottom: auto;
                        top: 0;
                        background-image: url(https://freshrescue.cloud/assets/images/shape-grey.png);
                        transform: scaleY(-1);
                    }
                    }`
                }</style>
            </div>
        </>
    )
}

export default Team