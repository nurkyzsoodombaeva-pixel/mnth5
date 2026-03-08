import React from 'react'

const EveryMovie = ({ movie, addToFavorites, favorites }) => {

const favMovie = favorites.some(f => {
  return f.id === movie.id
})

  return (
    <div className="card">
      <img src={movie.poster} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>Год: {movie.year}</p>
      {addToFavorites &&
        <button onClick={() => addToFavorites(movie,movie.id)} disabled={favMovie}>
          { 
            favMovie ? "disabled" : "Add to Favorites" 
          }
       
        </button>

      }
    </div>
  )
}

export default EveryMovie