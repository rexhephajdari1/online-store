import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../componets/Navbar'

function SearchReasults() {
 const [product,setProuct] =useState([])

 useEffect(()=>{
  axios.get(`https://fakestoreapi.com/products?q=Mens`)
  .then(res =>setProuct(res.data))
 },[])
  return (
    <div>SearchReasults</div>
  )
}

export default SearchReasults