import React, { useContext } from 'react'
import { favoriteContext } from '../../../context/FavoritesContext'

import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import { IconButton } from '@mui/material';

function Favorites() {
  let { favorites, setFavorites } = useContext(favoriteContext)

  function handleDeleteFavorite(id) {
    let deleteFavorite = favorites.filter(favorite => favorite.id !== id)
    setFavorites(deleteFavorite)
  }
  return (
    <>

        {
          favorites.length == 0 ? (
            <h2 style={{ textAlign: "center" }}>Your Favorites List is Empty</h2>
          ) : (
            <>
          <h1 style={{ textAlign: "center" }}>Your Favorites List</h1>
        <div className='flex flex-wrap justify-between' style={{ margin: '20px 0'}}>
          {favorites.map(favorite => (
            <div key={favorite.id}>

              <div style={{ marginBottom:"20px", padding: '10px 30px'}}>
                <img src={favorite.image} />
                <p>{favorite.flower_name}</p>
                <p>{favorite.price}$</p>
                <IconButton onClick={() => handleDeleteFavorite(favorite.id)}><HeartBrokenIcon style={{fontSize:'30px',color:"red",cursor:"pointer"}} /></IconButton>

              </div>
            </div>
          ))
          }
        </div>
        </>
          )
        }

    </>
  )
}

export default Favorites
