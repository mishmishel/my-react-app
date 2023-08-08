import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
       <div className="navbar">

        <NavLink exact to="/" className="left-link">
            Home 
        </NavLink>

        <NavLink to="/newdiaryentry" className="middle-link">
            New Diary Entry
        </NavLink>

        <NavLink to="/viewdiaryentries" className="right-link">
            View Diary Entries
        </NavLink>

       </div>
    )
}

export default Navbar;