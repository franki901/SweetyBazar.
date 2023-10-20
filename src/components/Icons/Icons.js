import "./Icons.css";

import React from "react";

const Icons = () => {
  return (
    <div className="imagenes">
      <div className="image-box">
        <a href="#">
          <img src="/images/2.png" alt="Img1" title="Img1" />
        </a>
        <h2>Tenemos lo que deseas</h2>
        <p>
          Navegá nuestra tienda online y seleccioná los productos a comprar.
        </p>
      </div>

      <div className="image-box">
        <a href="#">
          <img src="/images/3.png" alt="Img2" title="Img2" />
        </a>
        <h2>Completa tu Carrito</h2>
        <p>
          Dentro del carrito de compras podrás ver los artículos y un resumen
          con todos los detalles de la operación.
        </p>
      </div>

      <div className="image-box">
        <a href="#">
          <img src="/images/4.png" alt="Img3" title="Img3" />
        </a>
        <h2>Recibí o Retira el pedido</h2>
        <p>Procesaremos tu pedido y coordinamos el envío/retiro del mismo.</p>
      </div>

      <div className="image-box">
        <a href="#">
          <img src="/images/5.png" alt="Img4" title="Img4" />
        </a>
        <h2>Sitio Seguro</h2>
        <p>Siempre Protegemos tus datos.</p>
      </div>
    </div>
  );
};

export default Icons;
