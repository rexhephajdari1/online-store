import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/ProductCard.css'
import { useLocalStorage } from '@uidotdev/usehooks';



function ProductCard({ id, image, title, price }) {
  return (
      <Link to={`/products/${id}`} style={{textDecoration:'none',}}>
    <div className="container d-flex justify-content-center mt-4 productCard"  >
      <div className="" style={{ width: '18rem', height:'400px' }}>
        <div className="card-image" style={{ height: '250px', backgroundImage: `url('${image}')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}></div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          
           <h3 className='card-price'>{price}$ </h3>
        </div>
      </div>
    </div>
    </Link>
  );
}

export default ProductCard;