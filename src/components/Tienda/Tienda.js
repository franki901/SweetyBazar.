import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Tienda.css";

const Tienda = ({ productos }) => {
  return (
    <div className="tienda-container">
      <Navbar />
      <div className="productos-container">
        {productos.map((products) => (
          <div className="producto" key={products.id}>
            {/* Renderizar la información del producto aquí */}
            <img src={products.thumbnail} alt={products.title} />
            <h3>{products.title}</h3>
            <p className="descripcion">{products.description}</p>
            <p className="precio">
              Precio: <b>${products.price}</b>
            </p>
            <button>Añadir al carrito</button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Tienda;
