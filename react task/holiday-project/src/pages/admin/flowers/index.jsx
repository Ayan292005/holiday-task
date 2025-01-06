import React, { useEffect, useState } from 'react'
import axios from "axios"
import { NavLink } from 'react-router-dom'
let DBurl="http://localhost:2000/flowers"
      

function AdminFlowers() {
    let [data, setData] = useState([])

  function getData() {
    axios.get(DBurl)
      .then(res => {
        setData(res.data)

      })
  }

  useEffect(() => {
    getData()
  }, [])

  function deleteData(id) {
    let dataId = data.filter(el => el.id !== id)
    setData(dataId)

    // axios.delete(`${DBurl}/${id}`)
    //   .then(() => {
    //     getData()
    //   })
  }

  return (
    <>
     <table style={{ width: "90%", margin: "0 auto" }}>
        <thead>
          <tr>
          <th>image</th>
            <th>id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Categories</th>
            <th>Price</th>
            <th>Code</th>
            <th>Availability</th>
            <th>Edit</th>
            <th>Details</th>
            <th>Delete</th>

          </tr>
        </thead>
        <tbody>
          {
            data && data.map(product => (
              <tr key={product.id}>
                <td><img src={product.image} alt="" style={{width:"80px",height:"80px",objectFit:"contain"}}/></td>
                <td>{product.id}</td>
                <td>{product.flower_name}</td>
                <td>{product.description}</td>
                <td>{product.categories}</td>
                <td>{product.price}$</td>
                <td>{product.product_code}</td>
                <td>{product.availability}</td>
                <td><button className='bg-green-500 p-2 text-white '>Edit</button></td>
                <td><button  className='bg-blue-500 p-2 mx-2 text-white'><NavLink to={`/flowers/${product.id}`}>Info</NavLink></button></td>
                <td><button  className='bg-red-500 p-2 text-white'  onClick={() => deleteData(product.id)}>Delete</button> </td>
              

              </tr>
            ))
          }
        </tbody>
      </table> 

    </>
  )
}

export default AdminFlowers