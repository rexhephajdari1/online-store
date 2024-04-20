import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../componets/ProductCard";

function SearchResults() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams] = useSearchParams();

  const searchParam = searchParams.get("search");

  useEffect(() => {
   
    setIsLoading(true);
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => {
        

        const searchedProducts = res.data.filter((product) =>
          product.title.toLowerCase().includes(searchParam.toLowerCase())
        );
        setProducts(searchedProducts);
        setIsLoading(false);
      })


      .catch((error) => {

       setIsLoading(false);
      });
  }, [searchParam]);

  return (
    <div className="container">
      <div className="mb-5">
        <h2 className="text-center mt-5">Searched Products</h2>
      </div>
      <div className="row">
       
        {isLoading === true ? (
          <p className="fs-4 text-center">Loading...</p>
        ) : products.length !== 0 ? (
          products?.map((product) => (
            <div className="col-md-3 col-sm-12" key={product.id}>
              <ProductCard {...product} />
            </div>
          ))
        ) : (
          <p className="fs-4">
            There is not any product " 
            <span className="fw-bold">{searchParam}</span>"
          </p>
        )}
      </div>
    </div>
  );
}

export default SearchResults;
