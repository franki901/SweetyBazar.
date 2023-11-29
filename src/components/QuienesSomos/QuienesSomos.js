import React, { useState } from "react";
import "./QuienesSomos.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const QuienesSomos = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const expandSection = (section) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  const handleContainerClick = (section) => {
    expandSection(section);
  };

  return (
    <>
      <Navbar />
      <div className="quienes-somos-container">
        <h1 className="quienes-somos-title">¿Quiénes somos?</h1>
        <p className="quienes-somos-text">
          Sweety Bazar es una tienda en línea que se especializa en ofrecer una
          amplia variedad de productos de alta calidad a precios accesibles.
          Nuestra pasión es proporcionar a nuestros clientes una experiencia de
          compra única y satisfactoria.
        </p>
        <button
          className="quienes-somos-button"
          onClick={() => expandSection("quienes-somos")}
        >
          Más información
        </button>
        {expandedSection === "quienes-somos" && (
          <div className="quienes-somos-expanded-content">
            <img
              src="https://omkaralola.com.ar/om/wp-content/uploads/2023/09/SM1166.jpg"
              alt="Sweety Bazar"
              className="quienes-somos-image"
            />
            <p className="info-text">
              En Sweety Bazar, nos esforzamos por seleccionar productos de alta
              calidad que se adapten a tus necesidades. Desde moda y accesorios
              hasta productos electrónicos y más, tenemos todo lo que necesitas
              para hacer tus compras en línea de manera conveniente y asequible.
            </p>
          </div>
        )}
      </div>

      <div
        className={`info-section ${
          expandedSection === "mision" ? "expanded" : ""
        }`}
        onClick={() => handleContainerClick("mision")}
      >
        <h2 className="info-title">Nuestra Misión</h2>
        {expandedSection === "mision" && (
          <p className="info-text">
            En SweetyBazar., nos dedicamos a brindar a nuestros clientes no solo
            productos de la más alta calidad, sino también un servicio al
            cliente excepcional y una experiencia de compra inolvidable. Estamos
            comprometidos con enriquecer tu vida diaria a través de productos
            cuidadosamente seleccionados y un compromiso constante con la
            excelencia.
          </p>
        )}
      </div>

      <div
        className={`info-section ${
          expandedSection === "historia" ? "expanded" : ""
        }`}
        onClick={() => handleContainerClick("historia")}
      >
        <h2 className="info-title">Nuestra Historia</h2>
        {expandedSection === "historia" && (
          <p className="info-text">
            SweetyBazar., fundada en el año 2020, ha experimentado un
            crecimiento significativo a lo largo de los años, consolidándose
            como una empresa líder en la industria del comercio electrónico.
            Este viaje representa nuestro compromiso constante con la excelencia
            y la satisfacción del cliente, impulsándonos a evolucionar y
            destacar en el mundo digital.
          </p>
        )}
      </div>

      <div
        className={`info-section ${
          expandedSection === "equipo" ? "expanded" : ""
        }`}
        onClick={() => handleContainerClick("equipo")}
      >
        <h2 className="info-title">Nuestro Equipo</h2>
        {expandedSection === "equipo" && (
          <p className="info-text">
            Descubre al talentoso equipo que impulsa SweetyBazar. Cada miembro
            de nuestro personal está imbuido de pasión por ofrecer el mejor
            servicio a nuestros valiosos clientes. En SweetyBazar, creemos que
            la dedicación y el compromiso de nuestro equipo son la clave de
            nuestra excelencia en el servicio.
          </p>
        )}
      </div>

      <div
        className={`info-section ${
          expandedSection === "contacto" ? "expanded" : ""
        }`}
        onClick={() => handleContainerClick("contacto")}
      >
        <h2 className="info-title">Contáctanos</h2>
        {expandedSection === "contacto" && (
          <p className="info-text">
            ¿Tienes preguntas o comentarios? Estamos aquí para ayudarte.
            Contáctanos a través de nuestro formulario de contacto o en nuestras
            redes sociales.
          </p>
        )}
      </div>

      <Footer />
    </>
  );
};

export default QuienesSomos;
