import React, { useState, useEffect } from "react";
import "./style.css";

const ViewApart = () => {
  const [apartment, setApartment] = useState({
    address: "",
    house: "",
    square: "",
    description: "",
  });

  useEffect(() => {
    const address = localStorage.getItem("address") 
    const house = localStorage.getItem("house") 
    const square = localStorage.getItem("square") 
    const description = localStorage.getItem("description") 
    setApartment({ address, house, square, description });
  }, []);

  return (
    <div className="view-apart">
      <h1>Квартира</h1>
      <p>Адрес: {apartment.address}</p>
      <p>Номер дома: {apartment.house}</p>
      <p>Площадь: {apartment.square}</p>
      <p>Описание: {apartment.description}</p>
    </div>
  );
};
export default ViewApart;
