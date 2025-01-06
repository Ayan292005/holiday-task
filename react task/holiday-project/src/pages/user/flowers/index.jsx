import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
let DBurl = "http://localhost:2000/flowers"
import LocalMallIcon from '@mui/icons-material/LocalMall';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { favoriteContext } from '../../../context/FavoritesContext';
import { IconButton } from '@mui/material';
import { basketContext } from '../../../context/BasketContext';
import SearchIcon from '@mui/icons-material/Search';
import { NavLink } from 'react-router-dom';

function Flowers() {
  let [data, setData] = useState([])
  let [originalData, setOriginalData] = useState([])
  let { favorites, setFavorites } = useContext(favoriteContext)
  let { basket, setBasket } = useContext(basketContext)


  function handleAddFavorite(product) {
    let findFavorite = favorites.find(favorite => favorite.id == product.id)
    if (findFavorite) {
      alert("you already add this item")
    } else {
      setFavorites([...favorites, product])
    }
  }

  function handleAddBasket(product) {
    let findBasket = basket.find(item => item.id == product.id)
    if (findBasket) {
      findBasket.count++
      setBasket([...basket])
    } else {
      setBasket([...basket, { ...product, count: 1 }])

    }
  }

  function getData() {
    axios.get(DBurl)
      .then(res => {
        setData(res.data)
        setOriginalData(res.data)
      })
  }

  useEffect(() => {
    getData()
  }, [])





  function handleSearch(e) {
    if (e.target.value == "") {
      setData(originalData)
    } else {
      let filteredBooks = data.filter(book =>
        book.flower_name.toLowerCase().trim().includes(e.target.value.toLowerCase().trim()))
      setData(filteredBooks)
    }
  }

  function handleSortByName() {
    let sortedBooks = data.sort((a, b) => a.flower_name.localeCompare(b.flower_name))
    setData([...sortedBooks])

  }


  function handleSortByPrice() {
    let sortedBooks = data.sort((a, b) => (a.price - b.price))

    setData([...sortedBooks])

  }

  
  function handleSortByPriceReverse() {
    let sortedReversedBooks = data.sort((a, b) => (b.price - a.price))

    setData([...sortedReversedBooks])

  }

  return (
    <div className='container'>

      <div className='search'>
        <input type="search" name="" id="" placeholder='Search' onChange={(e) => handleSearch(e)} />
        <div className='flex gap-5 my-5'>
          <button  onClick={handleSortByName}>Sort by name</button>
          <button  onClick={handleSortByPrice}>From cheap to expensive</button>
          <button  onClick={handleSortByPriceReverse}>From expensive to cheap</button>
          <button  onClick={getData}>Reset</button>
        </div>

      </div>

      <div className='flex flex-wrap justify-between'>
        {data && data.map(product => (
          <div className='flex flex-col relative card'>
            <img src={product.image} />
            <h2>Fly Me To The Moon</h2>
            <p>{product.flower_name}</p>
            <p>{product.price}$</p>
            <div className='flex justify-center items-center gap-2 btn-holder'>

              <NavLink to={`/flowers/${product.id}`}><IconButton style={{backgroundColor: "white", padding: "10px",borderRadius: "50%"}}><SearchIcon style={{
                fontSize: '20px', color: "black", cursor: "pointer"}} ></SearchIcon></IconButton></NavLink>

              <IconButton onClick={() => handleAddBasket(product)} style={{backgroundColor: "white", padding: "10px",borderRadius: "50%"}}><LocalMallIcon style={{ fontSize: '20px', color: "black", cursor: "pointer" }}></LocalMallIcon></IconButton>

              <IconButton onClick={() => handleAddFavorite(product)} style={{backgroundColor: "white", padding: "10px",borderRadius: "50%"}}><FavoriteBorderIcon style={{ fontSize: '20px', color: "black", cursor: "pointer" }}></FavoriteBorderIcon></IconButton>

            </div>

          </div>



        ))
        }
      </div>

    </div>
  )
}

export default Flowers
