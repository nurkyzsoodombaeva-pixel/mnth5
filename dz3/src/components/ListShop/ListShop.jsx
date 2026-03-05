import React, { useState } from 'react'
import "./style.css"
import EveryShop from '../EveryShop/EveryShop';


const ListShop = () => {
    const [products, setProducts] = useState([]);
    const list_shop = [
            {
    id: 1,
    name: "Смартфон Galaxy S24",
    category: "Смартфоны",
    price: 79990,
    currency: "KGS",
    inStock: true,
    rating: 4.8,
    image: "https://th.bing.com/th/id/OIP.hyi1As1BXEA1CmA056_o8gHaHa?w=188&h=188&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    description: "Флагманский смартфон с AMOLED-дисплеем 6.2\" и 256GB памяти"
  },
  {
    id: 2,
    name: "Ноутбук MacBook Air M3",
    category: "Ноутбуки",
    price: 129990,
    currency: "KGS",
    inStock: true,
    rating: 4.9,
    image: "https://i.pcmag.com/imagery/articles/019B6ClRyAnAN24qsDDI50I-3.fit_lim.v1685987242.jpg",
    description: "Лёгкий и мощный ноутбук с чипом M3 и 13\" дисплеем"
  },
  {
    id: 3,
    name: "Беспроводные наушники AirPods Pro",
    category: "Аксессуары",
    price: 24990,
    currency: "KGS",
    inStock: true,
    rating: 4.7,
    image: "https://th.bing.com/th/id/OIP.IedmQajs1HPmawBIY8zPmwHaGV?w=200&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    description: "Наушники с активным шумоподавлением и пространственным звуком"
  },
  {
    id: 4,
    name: "Смарт-часы Watch 6",
    category: "Гаджеты",
    price: 34990,
    currency: "KGS",
    inStock: false,
    rating: 4.6,
    image: "data:image/webp;base64,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",
    description: "Умные часы с функцией мониторинга здоровья и GPS"
  },
  {
    id: 5,
    name: "Игровая консоль PlayBox X",
    category: "Игровые приставки",
    price: 59990,
    currency: "KGS",
    inStock: true,
    rating: 4.9,
    image: "https://ir.ozone.ru/s3/multimedia-5/c1000/6814836293.jpg",
    description: "Игровая консоль нового поколения с поддержкой 4K"
  }
    ]
    const addToBasket = (product) => {
        setProducts([...products, product]);
    }
  return (
    <div className="products">
        {list_shop?.map((item)=>{
         return <EveryShop product={item} addToBasket={addToBasket}/>
        })}
         <h1 className="Basket">Корзина</h1>
        {products && products.map((product) => (
           
          <EveryShop key={product.id} product={product} />
        ))}
      
      
    </div>
  )
}

export default ListShop