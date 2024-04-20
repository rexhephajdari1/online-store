import React from 'react';
import { useLocalStorage } from '@uidotdev/usehooks';
import '../Styles/Favorite.css'


function Favorite() {
    const [favorite, setFavorite] = useLocalStorage('favorite');

    const handleDelete = (index) => {
        const updatedFavorite = favorite.filter((item, i) => i !== index);
        setFavorite(updatedFavorite);
        alert('produkti u hek nga favoritev ')
    };

    return (
        <div className='container d-flex mb-2 mt-2'>
          <div className="row">
            {
                (favorite && favorite.length > 0) ? favorite.map((item, i) => (
                  <div key={i} className="card col-4 d-flex flex-wrap container mt-5 " style={{width: '20rem', height:'650px' }}>
                                                <div  onClick={() => handleDelete(i)} className="d-flex justify-content-end mt-3 iconsHover ">
                                <span className="mb-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                                  
                                  </svg>
                                </span>
                             </div>
                  <img src={item.image} className="card-img-top" style={{height:'300px'}}/>
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <h3 className="card-text">{item.price} $</h3>
                    <div className='divButton'>
                    </div>
                  </div>
                </div>
                )) :
                <div className='text-center'>  <p className="text-center"><strong>No favorites selected</strong></p></div>
                
            }
        </div>
        </div>
    );
}

export default Favorite;

