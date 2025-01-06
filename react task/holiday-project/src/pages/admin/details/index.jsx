import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios"

function AdminDetails() {
    let [product, setProduct] = useState({})
    let { id } = useParams()
    let navigate = useNavigate()

    function getDetails() {
        axios.get(`http://localhost:2000/flowers/${id}`)
            .then(res => {
                setProduct(res.data)
            })
    }
    useEffect(() => {
        getDetails()
    }, [id])
    return (
        <div>
          
            <div  style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center", gap:"10px",fontSize:"20px"}}>
                <img src={product.image} alt="" />
                <h1>{product.flower_name}</h1>
                <p>Price:{product.price}$</p>
                <p>Categories:{product.categories}</p>
                <p>Description:{product.description}</p>
                <p>Availability:{product.availability}</p>
                <button style={{border:"1px solid #f45d96",borderRadius:"10px",padding:"5px"}} onClick={() => navigate("/admin/adminFlowers")}>Go Back</button>
            </div>

        </div>
    )
}

export default AdminDetails