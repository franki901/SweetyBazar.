import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import React, { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "./ComoComprar.css";

const ComoComprar = () => {
  const slideRef = useRef(null);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const handleClickNext = () => {
    let items = slideRef.current.querySelectorAll(".item");
    slideRef.current.appendChild(items[0]);
  };

  const handleClickPrev = () => {
    let items = slideRef.current.querySelectorAll(".item");
    slideRef.current.prepend(items[items.length - 1]);
  };

  const data = [
    {
      id: 3,
      imgUrl: "/images/ComoComprar4-1.png",
      desc: "Y en un plazo de 3 a 5 días ¡Lo recibís!",
      name: "RECIBIR",
    },
    {
      id: 4,
      imgUrl: "/images/ComoComprar1-1.png",
      desc: "Seleccionás el producto que quieras agregar al carrito.",
      name: "AGREGAR AL CARRITO",
    },
    {
      id: 2,
      imgUrl: "/images/ComoComprar2-1.png",
      desc: "Elegís la forma de recibirlo (envio a domicilio, sucursal o retirar en local).",
      name: "CÓMO RECIBIRLO",
    },
    {
      id: 1,
      imgUrl: "/images/ComoComprar3-1.png",
      desc: "Pagás a través de mercado pago o tarjeta de crédito o débito.",
      name: "MÉTODO DE PAGO",
    },
  ];

  return (
    <>
      <Navbar />;
      <div className="container">
        <div className="loadbar" style={{ width: `${loadingProgress}%` }}></div>
        <div id="slide" ref={slideRef}>
          {data.map((item) => (
            <div
              key={item.id}
              className="item"
              style={{ backgroundImage: `url(${item.imgUrl})` }}
            >
              <div className="content">
                <div className="name">{item.name}</div>
                <div className="des">{item.desc}</div>
                <button>See more</button>
              </div>
            </div>
          ))}
        </div>
        <div className="buttons">
          <button id="prev" onClick={handleClickPrev}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button id="next" onClick={handleClickNext}>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>
      <Footer />;
    </>
  );
};

export default ComoComprar;
