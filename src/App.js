import CartContent from "./components/CartContent/CartContent";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tienda from "./components/Tienda/Tienda";
import ComoComprar from "./components/ComoComprar/ComoComprar";
import MiCuenta from "./components/MiCuenta/MiCuenta";
import products from "./components/products.json"; // Importa el JSON de productos
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/tienda"
          element={<Tienda productos={products.producto} />}
        />
        <Route path="/micuenta" element={<MiCuenta />} />
        <Route path="/comocomprar" element={<ComoComprar />} />
        <Route path="/cart" element={<CartContent />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
