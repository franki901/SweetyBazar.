import React, { useState, useEffect } from "react";
import "./Offers.css";

const Offers = ({ productos }) => {
  return (
    <div className="tienda-container">
      <br></br>
      <br></br>
      <h2 className="ofertas-titulo">¡Ofertas especiales!</h2>
      <br></br>
      <div className="productos-container">
        <div className="producto">
          <img
            src="https://omkaralola.com.ar/om/wp-content/uploads/2020/12/8.png"
            alt="Maceta-hombre-3d"
          />
          <h3>MACETA HOMBRE 3D CHICO 8CM</h3>
          <p className="descripcion">
            Maceta de hombre sentado, 8cm de alto x 6cm diámetro, plástico
          </p>
          <p className="precio">
            Precio: <b>$1,250.00</b>
          </p>
          <button>Ver ahora</button> <button>🛒</button>
        </div>
        <div className="producto">
          <img
            src="https://omkaralola.com.ar/om/wp-content/uploads/2023/08/WhatsApp-Image-2023-02-06-at-22.02.01-1-1.jpeg"
            alt="Oferta 1"
          />
          <h3>ALMOHADON PELO CORTO AMBOS LADOS</h3>
          <p className="descripcion">
            Almohadones pelo corto ambos lados, suaves, 40x40 relleno de vellón
            siliconado
          </p>
          <p className="precio">
            Precio: <b>$4,190.00</b>
          </p>
          <button>Ver ahora</button> <button>🛒</button>
        </div>
        <div className="producto">
          <img
            src="https://omkaralola.com.ar/om/wp-content/uploads/2021/07/WhatsApp-Image-2021-07-17-at-14.25.26-8.jpeg"
            alt="Oferta 1"
          />
          <h3>MATE PAMPA BOCA GRANDE</h3>
          <p className="descripcion">
            Mate la pampa, material compuesto de pvc siliconado, medida: 8,5cm
            de alto, 9cm de diámetro.
          </p>
          <p className="precio">
            Precio: <b>$5,590.00</b>
          </p>
          <button>Ver ahora</button> <button>🛒</button>
        </div>
      </div>
    </div>
  );
};

export default Offers;
