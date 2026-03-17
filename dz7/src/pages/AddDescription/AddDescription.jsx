import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const AddDescription = () => {
  const navigate = useNavigate();
  const [description, setDescription] = useState("");

  const AddApartment = () => {
    localStorage.setItem("description", description);
    navigate("/view_apart");
  };

  return (
    <div className="add-description">
      <h1>Добавление описания</h1>
      <textarea
        className="textarea"
        placeholder="описание квартиры"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className="apartment-button" onClick={AddApartment}>
        Добавить квартиру
      </button>
    </div>
  );
};

export default AddDescription;
