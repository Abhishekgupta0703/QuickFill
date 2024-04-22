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
                        
                        background-repeat: no-repeat;
                        background-size: cover;
                        background-position: center;
                        background-color:#3f72af;
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
                    }`
                }</style>
            </div>
        </>
    )
}

export default Team