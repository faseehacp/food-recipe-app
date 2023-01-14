import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import profile from '../../assets/profile.jpg';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const [isActive1, setIsActive1] = useState(false)
    const [isActive2, setIsActive2] = useState(false)
    const [isActive3, setIsActive3] = useState(false)
    const [isActive4, setIsActive4] = useState(false)

    const getClassName1 = (isActive) => {
        let className = isActive ? "link-active" : "link"; 
        if(isActive)
            setIsActive1(true);
        return className;
    }

    const getClassName2 = (isActive) => {
        let className = isActive ? "link-active" : "link"; 
        if(isActive)
            setIsActive2(true);
        return className;
    }

    const getClassName3 = (isActive) => {
        let className = isActive ? "link-active" : "link"; 
        if(isActive)
            setIsActive3(true);
        return className;
    }

    const getClassName4 = (isActive) => {
        let className = isActive ? "link-active" : "link";
        if(isActive) 
            setIsActive4(true);
        return className;
    }

    return (
        <div className='sidebar'>
            <div className='logo'>
                <img src={logo} alt="logo" />
            </div>
            <div className='profile'>
                <div className='profile-image'>
                    <img src={profile} alt="profile" />
                </div>
                <h1>Kristin Watson</h1>
                <p>Chef de Partie</p>
            </div>
            <div className='menu'>
                <div className='menu-item'>
                    <svg fill={isActive1 ? "#db3529" : "#a9adb1"} height="15px" width="15px" viewBox="0 0 472.615 472.615"><g><g>
                        <path d="M246.153,55.558v402.885c74.135-34.307,152.741-47.774,226.463-38.569c0-134.295,0-268.589,0-402.884    C398.896,7.786,320.289,21.252,246.153,55.558z"/></g></g><g><g>
                        <path d="M0.001,16.99C0,151.285,0,285.579,0.001,419.874c73.719-9.204,152.325,4.262,226.46,38.568V55.557    C152.324,21.252,73.719,7.786,0.001,16.99z"/></g></g>
                    </svg>
                    <NavLink className={({ isActive }) => getClassName1(isActive)} to='/food-recipe-app'>Recipes</NavLink>
                </div>
                <div className='menu-item'>
                    <svg fill={isActive2 ? "#db3529" : "#a9adb1"} width="15px" height="15px" viewBox="0 0 24 24">
                        <path d="M20.808,11.079C19.829,16.132,12,20.5,12,20.5s-7.829-4.368-8.808-9.421C2.227,6.1,5.066,3.5,8,3.5a4.444,4.444,0,0,1,4,2,4.444,4.444,0,0,1,4-2C18.934,3.5,21.773,6.1,20.808,11.079Z"/>
                    </svg>
                    <NavLink className={({ isActive }) => getClassName2(isActive)} to='/favourites'>Favourites</NavLink>
                </div>
                <div className='menu-item'>
                    <svg fill={isActive3 ? "#db3529" : "#a9adb1"} width="15px" height="15px" viewBox="0 0 15 15">
                        <path id="path17" d="M11,4V2c0-1-1-1-1-1H5.0497&#10;&#9;c0,0-1.1039,0.0015-1.0497,1v2H2c0,0-1,0-1,1v7c0,1,1,1,1,1h11c0,0,1,0,1-1V5c0-1-1-1-1-1H11z M5.5,2.5h4V4h-4V2.5z"/>
                    </svg>
                    <NavLink className={({ isActive }) => getClassName3(isActive)} to='/courses'>Courses</NavLink>
                </div>
                <div className='menu-item'>
                    <svg fill={isActive4 ? "#db3529" : "#a9adb1"} width="15px" height="15px" viewBox="0 0 48 48">
                        <path d="M0 0h48v48H0z" fill="none"/><g>
                        <path d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20c11.046,0,20-8.954,20-20S35.046,4,24,4z M31.96,22   c-0.208-5.225-1.223-9.846-2.726-13.103c5.649,1.964,9.861,6.998,10.627,13.103H31.96z M24,39.9   c-1.213-0.955-3.608-5.736-3.954-13.9h7.908C27.608,34.164,25.213,38.945,24,39.9z M20.046,22C20.392,13.836,22.787,9.055,24,8.1   c1.213,0.955,3.608,5.736,3.954,13.9H20.046z M18.766,8.897C17.264,12.154,16.248,16.775,16.04,22H8.139   C8.905,15.896,13.117,10.861,18.766,8.897z M16.04,26c0.208,5.225,1.223,9.846,2.726,13.103C13.117,37.139,8.905,32.104,8.139,26   H16.04z M29.234,39.103c1.502-3.257,2.518-7.878,2.726-13.103h7.902C39.095,32.104,34.883,37.139,29.234,39.103z"/></g>
                    </svg>
                    <NavLink className={({ isActive }) => getClassName4(isActive)} to='/community'>Community</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;