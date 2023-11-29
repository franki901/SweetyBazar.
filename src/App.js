import CartContent from "./components/CartContent/CartContent";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tienda from "./components/Tienda/Tienda";
import ComoComprar from "./components/ComoComprar/ComoComprar";
import MiCuenta from "./components/MiCuenta/MiCuenta";
import products from "./components/products.json";
import NotFound from "./components/NotFound/NotFound";
import QuienesSomos from "./components/QuienesSomos/QuienesSomos";

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
        <Route path="/quienessomos" element={<QuienesSomos />} />
        <Route path="/cart" element={<CartContent />} />

        <Route path="/comocomprar" element={<ComoComprar />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
