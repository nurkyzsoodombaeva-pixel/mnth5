import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const SecondPage = () => {
  const navigate = useNavigate();

  const [address, setAddress] = useState("");
  const [house, setHouse] = useState("");
  const [square, setSquare] = useState("");

  const next = () => {
    navigate("/add_description_apart");
    localStorage.setItem("address", address);
    localStorage.setItem("house", house);
    localStorage.setItem("square", square);
  };

  return (
    <div>
      <h1>Добавить</h1>
      <div>
        <label>Адрес</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Введите адрес"
        />
      </div>
      <div>
        <label>Номер дома</label>
        <input
          type="number"
          value={house}
          onChange={(e) => setHouse(e.target.value)}
          placeholder="№"
        />
      </div>
      <div>
        <label>Площадь квартиры (в м²)</label>
        <input
          type="number"
          value={square}
          onChange={(e) => setSquare(e.target.value)}
          placeholder="0"
        />
      </div>
      <button onClick={next}>
        Далее
      </button>
    </div>
  );
};

export default SecondPage;
