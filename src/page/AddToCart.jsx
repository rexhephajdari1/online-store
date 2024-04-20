import { useLocalStorage } from '@uidotdev/usehooks';
import React from 'react';
import '../Styles/AddToCart.css'

function AddToCart() {
    const [cart, setCart] = useLocalStorage('card', []);
   
    

    const handleDelete = (index) => {
        const updatedCart = cart.filter((item, i) => i !== index);
        setCart(updatedCart);
        alert('Product removed');
    };

    return (
        <div className='container d-flex  mb-2 mt-2'>
          <div className='row  '>
            {
                (cart && cart.length > 0) ? (
                    cart.map((item, i) => (
                        <div key={i} className="card col-3 d-flex flex-wrap mt-5 ms-4 " style={{width: '21rem', height: '670px'}}>
                            <div>
                            <div  onClick={() => handleDelete(i)} className="d-flex justify-content-end mt-3 iconsHover ">
                                <span className="mb-2">
                                  <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>

                                  </svg>
                                </span>
                             </div>
                            
                            
                            <img src={item.image} className="card-img-top" style={{height:'300px'}} />
                            
                           </div>

                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <h3 className="card-text">{item.price} $</h3>
                               
                                <div className="d-flex justify-content-end mt-3 ">
                                           
                                       </div>
                            
                            </div>
                        </div>
                    ))
                    ) : <p className='text-center'><strong>nuk ka produkte ne card</strong></p>
                  }
                  </div>
        </div>
    );
}

export default AddToCart;


