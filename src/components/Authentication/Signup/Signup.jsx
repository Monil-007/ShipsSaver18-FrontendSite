import React, { useState } from 'react';
import axios from 'axios';
import Google from '../../../assets/icons/google.png';
// import Facebook from "../../assets/icons/facebook.png";
import Github from "../../../assets/icons/github.png";
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import ShipSaver18Logo from '../../../assets/icons/ShipSaver18Logo.png'
import { useDispatch } from 'react-redux';
import { setUser } from '../../../Actions/formAction';

const Signup = () => {

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleManualSignup = async () => {
        try {
            const response = await axios.post('https://shipsaver18-backend.onrender.com/authManual/manualSignup', { username, password });
            console.log(response.data.message);
            console.log(response.data.uniqueID);
            dispatch(setUser(response.data.uniqueID));
            navigate('/welcome');
            // Redirect or perform other actions after successful signup
        } catch (error) {
            console.error('Error during manual signup', error);
            // Handle signup error, display error message, etc.
        }
    };

    const google = () => {
        window.open("https://shipsaver18-backend.onrender.com/auth/google", "_self");
    };

    const github = () => {
        window.open("https://shipsaver18-backend.onrender.com/auth/github", "_self");
    };

    // const facebook = () => {
    //     window.open("http://localhost:3000/auth/twitter", "_self");
    // };

    const handleTogglePage = () => {
        navigate('/login18');
    }
    return (
        <div className="authPage">
            {/* <div className="subauth">
                <img className="logoImg" src={ShipSaver18Logo}></img>
                <div className="TitleLogo">ShipSaver18RK</div>
            </div> */}
            <div className="subauth">
                <div className="logoWrapper">
                    <img className="logoImg" src={ShipSaver18Logo} alt="Logo" />
                </div>
                <div className="titleWrapper">
                    <div className="TitleLogo">ShipSaver18RK</div>
                </div>
            </div>
            <div className="signup">
                <h1 className="signupTitle">Choose a Signup Method</h1>
                <div className="wrapper">
                    {/* <div className="left">
                        <div className="signupButton google" onClick={google}>
                            <img src={Google} alt="" className="icon" />
                            Google
                        </div>
                        <div className="signupButton github" onClick={github}>
                            <img src={Github} alt="" className="icon" />
                            Github
                        </div>
                    </div>
                    <div className="center">
                        <div className="line" />
                        <div className="or">OR</div>
                    </div> */}
                    <div className="right">
                        <input type="text" placeholder="Username" value={username} onChange={handleUsernameChange} />
                        <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                        <button className="submit" onClick={handleManualSignup}>Signup</button>
                        <div className="loginText">
                            <p>Already have an account?</p>
                            <button className="loginLink" onClick={handleTogglePage}>Login here</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
