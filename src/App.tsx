import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Catalog from "./pages/Catalog";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import { CartType } from "./types/product";
import { useSelector } from "react-redux";

function App() {
  const state = useSelector((state: { cart: CartType }) => state);

  // при первой инициализации приложения добавляем корзину в локалсторадж и следим за изменениями из стора
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);
  return (
    <div className='App'>
      <>
        <Header />
        <Routes>
          <Route path='/' element={<Catalog />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </>
      {}
    </div>
  );
}

export default App;
