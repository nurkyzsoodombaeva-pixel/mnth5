import React from 'react';
import { useState } from 'react';

const FavoriteMoves = () => {
      const [favorites, setFavorites] = useState([])

    const addToFavorites = (movie,id) => {
    if(!favorites.find(movie => movie.id === id)){
      setFavorites([...favorites, movie])
    }
  }
    return (
        <div>
             <h1 className='Favorites'>Favorites</h1>
      {favorites.length ? (
        <div className='favorites'>
          {favorites.map((item) => (
            <EveryMovie key={item.id} movie={item} favorites={favorites}addToFavorites={addToFavorites}/>
          ))}
        </div>
        
      )  : 
      (
        <p>Favorites list is empty</p>
      )}
        </div>
    );
}

export default FavoriteMoves;
