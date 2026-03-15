import React from "react";

const EveryQuote = ({ quote, getQuote }) => {
  return (
    <div className={styles.div}>
      <h2>{quote.text}</h2>
      <p>Автор: {quote.author}</p>

      <button onClick={getQuote}>Показать другую цитату</button>
    </div>
  );
};

export default EveryQuote;
