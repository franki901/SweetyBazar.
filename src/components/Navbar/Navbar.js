import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"; // Asegúrate de que esta importación esté presente

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [scrollThreshold, setScrollThreshold] = useState(150); // Establece la cantidad de píxeles requeridos para comenzar a aplicar opacidad

  useEffect(() => {
    // Función para manejar el evento de desplazamiento
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > scrollThreshold) {
        // Si el usuario ha desplazado más allá del umbral, aplicar la clase
        setScrolling(true);
      } else {
        // Si el usuario está por debajo del umbral, quitar la clase
        setScrolling(false);
      }
    };

    // Llama a handleScroll al montar el componente para manejar la visibilidad inicial
    handleScroll();

    // Agregar el evento de desplazamiento al montar el componente
    window.addEventListener("scroll", handleScroll);

    // Eliminar el evento de desplazamiento al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollThreshold]); // Asegúrate de incluir scrollThreshold como dependencia para que se actualice cuando cambie

  return (
    <div className={`nav-container ${scrolling ? "navbar-transparent" : ""}`}>
      <nav className={`navbar ${scrolling ? "navbar-opaque" : ""}`}>
        <NavLink className="navbar-logo" to="/home">
          <h1>SweetyBazar.</h1>
        </NavLink>
        <div className="pony">
          <NavLink className="home" to="/home" activeClassName="active">
            HOME
          </NavLink>
          <NavLink className="tienda" to="/tienda" activeClassName="active">
            TIENDA
          </NavLink>
          <NavLink className="miCuenta" to="/micuenta" activeClassName="active">
            MI CUENTA
          </NavLink>
          <NavLink
            className="comoComprar"
            to="/comocomprar"
            activeClassName="active"
          >
            COMO COMPRAR
          </NavLink>
        </div>
        <NavLink className="seeCarrito" to="/cart">
          🛒
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
