import React from "react";
import "./NotFound.css";

function NotFound() {
  return (
    <>
      <h1 className="titulo-error">404 Error </h1>
      <p className="zoom-area">
        Parece ser que la página que estas buscando no existe{" "}
      </p>
      <section className="error-container">
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
        <span className="zero">
          <span className="screen-reader-text">0</span>
        </span>
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
      </section>
      <div className="link-container">
        <a href="/home" className="more-link">
          Volver a la página principal
        </a>
      </div>
    </>
  );
}

export default NotFound;
