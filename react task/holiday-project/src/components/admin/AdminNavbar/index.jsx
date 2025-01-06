import React from 'react'
import { NavLink } from 'react-router-dom'
function AdminNavbar() {
  return (
    <div className='container'>

                <div className="flex gap-8 items-center">
                  <NavLink className='navlink' to="/admin/dashboard" style={({ isActive }) => ({ color: isActive ? "#f45d96" : "black" })}>Dashboard</NavLink>

                  {/* <NavLink className='navlink' to={`/admin/${product.id}`} style={({ isActive }) => ({ color: isActive ? "#f45d96" : "black" })}>Dashboard</NavLink> */}

                  <NavLink className='navlink' to="/admin/adminFlowers" style={({ isActive }) => ({ color: isActive ? "#f45d96" : "black" })}>Admin Flowers</NavLink>

                  
                  <NavLink className='navlink' to="/" style={({ isActive }) => ({ color: isActive ? "#f45d96" : "black" })}>Home</NavLink>

                </div>

    </div>
  )
}

export default AdminNavbar
