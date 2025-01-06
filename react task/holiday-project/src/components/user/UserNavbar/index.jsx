import React, { useContext } from 'react'
import { NavLink } from "react-router-dom"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { favoriteContext } from '../../../context/FavoritesContext';
import { basketContext } from '../../../context/BasketContext';

function UserNavbar() {
  let { favorites } = useContext(favoriteContext)
  let { basket } = useContext(basketContext)
  return (
    <div className='container'>
      <div className="navbar">
        <nav>
          <img className='pr-16' src="https://preview.colorlib.com/theme/florist/img/logo.png.webp" alt="" />

          <div className="flex gap-8 items-center">
            <NavLink className='navlink' to="/" style={({ isActive }) => ({ color: isActive ? "#f45d96" : "black" })}>Home</NavLink>
            <NavLink className='navlink' to="/flowers" style={({ isActive }) => ({ color: isActive ? "#f45d96" : "black" })}>Flowers</NavLink>
            <NavLink to="/favorites" style={({ isActive }) => ({ color: isActive ? "#f45d96" : "black" })}><FavoriteBorderIcon style={{fontSize:"30px"}}></FavoriteBorderIcon><span>{favorites.length}</span></NavLink>
            <NavLink to="/basket" style={({ isActive }) => ({ color: isActive ? "#f45d96" : "black" })}><LocalMallIcon style={{fontSize:"30px"}}></LocalMallIcon><span>{basket.length}</span></NavLink>
            <NavLink className='navlink' to="/admin" style={({ isActive }) => ({ color: isActive ? "#f45d96" : "black" })}>Admin</NavLink>
          </div>
          

        </nav>
      </div>


    </div>
  )
}

export default UserNavbar
