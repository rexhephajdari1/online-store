

import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import '../Styles/Products.css';
import { useHistoryState, useLocalStorage } from '@uidotdev/usehooks';

function Products() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const [card, saveCard] = useLocalStorage('card', []);
  const [favorite, savefavorite] = useLocalStorage('favorite', []);
  // const [logedin,savelogedin]= useLocalStorage('loggedInUserId')
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      });
  }, [id]);
  


 
 

  const [logedin] = useLocalStorage('loggedInUserId');
const handleAddToCard = () => {  
  if (!logedin) {
    navigate('/login');
  } else {
    alert('Produkti u shtua në shportë');
    saveCard([...card, product]);
  
};
};






  const AddToFavorite = () => {
    alert('produkti u shtua ne favorite')
    savefavorite([...favorite, product]); 
  };

  return (
    <div>
      {product ? (
        <div className="container">
          <div className="row">
            <div className="col-5 mt-5 divImage" >
              <img className="d-block w-100" src={product.image} alt={product.title} />
            </div>
            <div className="col-6 offset-1 mt-5">
              <div className="mb-3">
                <h3 className='col-12'>
                  {product.title}
                  <Link to="" className=" offset-2">
                    <FontAwesomeIcon className="hearticon" onClick={AddToFavorite} icon={faHeart} style={{ color: 'orange' }} />
                  </Link>
                </h3>
              </div>
              <p>{product.description}</p>
              <div className="mt-5">
                <h2>{product.price} €</h2>
              </div>
              <div className="divButton">
              <div className="row offset-1 mt-5">
                <button className="btn btn-outline-warning " style={{ width: '100px' }} onClick={handleAddToCard}>
                  <FontAwesomeIcon className='shopIcon' icon={faBasketShopping} style={{ color: 'orange' }} />
                </button>
              </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Products;
