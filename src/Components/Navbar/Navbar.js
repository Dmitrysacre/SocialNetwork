import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
      <div className="col-3">
        <div className="nav flex-column nav-pills">
          <NavLink className="nav-link" to="/profile">Profile</NavLink>
          <NavLink className="nav-link" to="/dialogs">Messages</NavLink>
          <NavLink className="nav-link" to="/news">News</NavLink>
          <NavLink className="nav-link" to="/music">Music</NavLink>
          <NavLink className="nav-link" to="/settings">Settings</NavLink>
        </div>
      </div>
    )
}

export default Navbar