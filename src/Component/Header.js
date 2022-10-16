import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
    const [activeTab, setActiveTab] = useState("Home");

    const location = useLocation();

    useEffect(() => {
        if(location.pathname === '/') {
            setActiveTab("Home");
        } else if(location.pathname === '/add') {
            setActiveTab("AddUser");
        } 
    },[location]);

  return (
    <div className='header'>
        <p className='logo'><h2>CRUD Operations</h2></p>
        <div className='header_right'>
            <Link to='/'>
                <p className={`${activeTab === "Home" ? "home" : ""}`} onClick={() => setActiveTab("Home")}>Home </p>
            </Link>
            <Link to='/add'>
                <p className={`${activeTab === "AddUser" ? "active" : ""}`} onClick={() => setActiveTab("AddUser")}>Add-User</p>
            </Link>
            {/* <Link to='/about'>
                <p className={`${activeTab === "About" ? "about" : ""}`} onClick={() => setActiveTab("About")}>About &nbsp; &nbsp; &nbsp;</p>
            </Link> */}
        </div>
    </div>
  )
}

export default Header;