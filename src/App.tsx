import React from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Catalog from "./pages/Catalog";
import Cart from "./pages/Cart";

function App() {
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
