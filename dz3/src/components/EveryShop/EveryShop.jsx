import React from 'react'

const EveryShop = ({product,addToBasket}) => {
    console.log("hello");
    
  return (
    <div className="card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2 className="title">{product.name}</h2>
            <h3 className="category">{product.category}</h3>
            <div className="price-block">
                <h4>{product.price}</h4>
                <span>{product.currency}</span>
            </div>
            <h5 className="rating">{product.rating}</h5>
            <p className="description">{product.description}</p>
            <button onClick={() => addToBasket(product)}>Добавить в корзину</button>
        </div>
  )
}

export default EveryShop