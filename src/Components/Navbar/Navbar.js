import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = (props) => {
    return (
      <div className="col-2">
        <div className="nav flex-column nav-pills">
          <NavLink className="nav-link" to="/profile">Profile</NavLink>
          <NavLink className="nav-link" to="/users">Users</NavLink>
          <NavLink className="nav-link" to="/dialogues">Messages</NavLink>
          <NavLink className="nav-link" to="/news">News</NavLink>
          <NavLink className="nav-link" to="/music">Music</NavLink>
          <NavLink className="nav-link mt-3" to="/settings">Settings</NavLink>
        </div>
      </div>
    )
}

export default Navbar