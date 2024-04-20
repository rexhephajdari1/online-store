import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import { useLocalStorage } from '@uidotdev/usehooks';



function LatestProducts() {
  const [latestProducts , setLatestproduct] = useState ([])
  const [latestProductsSlider , setLatestproductSlider] = useState ([])
  

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products?limit=20')
    .then(resp => setLatestproduct(resp.data))
  },[])
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products?limit=6')
    .then(resp => setLatestproductSlider(resp.data))
  },[])
  return (
    <section className="pt-5">
      <div  className='container' >
        <div id="carouselExampleDark" class="carousel carousel-dark slide" >
  <div class="carousel-inner">
     {
      (latestProductsSlider && latestProductsSlider.length > 0)?
      latestProductsSlider.map ((product,i)=>{
        return  <div class="carousel-item active" key={i}>
                  <img src={product.image} class="d-block  w-100" style={{ height:'500px',width:'100%',objectFit:'cover' , }} />
                  
                </div>
      }) :  
      <></>  
     }
 
  </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        </div>
        <div className="container"> 
            <div className="mb-5">
                <h2 className="text-center mt-5">Products</h2>
            </div>  
            <div className="row">
                 {
                  latestProducts.map(product =>(
                    <div className="col-md-3 col-sm-12" key={product.id}>
                      <ProductCard  {...product} />
                    </div>

                  ))
                 }
                </div>
        </div>
    </section>
  )
}

export default LatestProducts