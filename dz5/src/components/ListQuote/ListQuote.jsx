import React, { useState, useEffect } from "react";
import EveryQuote from "../EveryQuote/EveryQuote";
import "./style.css";

const ListQuote = () => {
  const quotes = [
    { 
      id: 1,
      text: "Знание — сила",
      author: "Фрэнсис Бэкон" },
    { 
      id: 2,
      text: "Я мыслю, следовательно, существую",
      author: "Рене Декарт" },
    {
      id: 3,
      text: "Жизнь — это то, что происходит, пока ты строишь планы",
      author: "Джон Леннон",
    },
    {
      id: 4,
      text: "Не ошибается только тот, кто ничего не делает",
      author: "Теодор Рузвельт",
    },
    {
      id: 5,
      text: "Будь изменением, которое хочешь увидеть в мире",
      author: "Махатма Ганди",
    },
  ];

  const [quote, setQuote] = useState([]);
  const [loading, setLoading] = useState(true);

  const getQuote = () => {
    const qwerty = Math.floor(Math.random()*quotes.length)
    setQuote([quotes[qwerty]]);
  };

  useEffect(() => {
    setTimeout(() => {
      getQuote();
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="quotes">
      <h1>Случайная цитата</h1>

      {loading ? (
        <p>Загрузка...</p>
      ) : (
        quote.map((item) => (
          <EveryQuote key={item.id} quote={item} getQuote={getQuote} />
        ))
      )}
    </div>
  );
};

export default ListQuote;
