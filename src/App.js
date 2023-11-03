import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import CartState from "./context/CartState";
import Nosotros from "./pages/Nosotros/Nosotros";
import Checkout from "./pages/Checkout/Checkout";
import Home from "./pages/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'


function App() {
  return (
    <>
      <div className="app-container">
        <CartState>
          <Cart />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/shop" element={<ItemListContainer />} />

            <Route
              path="/shop/category/:category"
              element={<ItemListContainer />}
            />

            <Route path="/item/detail/:id" element={<ItemDetailContainer />} />

            <Route path="/checkout" element={<Checkout />} />

            <Route path="/Nosotros" element={<Nosotros />} />

            <Route
              path="*"
              element={<h1>Error 404 - Pagina no encontrada.</h1>}
            />
          </Routes>
        </CartState>
      </div>
    </>
  );
}

export default App;
