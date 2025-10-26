import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import ItemListContainer from "./components/ItemDetailContainer.jsx";
import ProductsContainer from "./components/ProductsContainer.jsx"; // ✅ corregido el nombre real de tu archivo
import ItemDetailContainer from "./components/ItemDetailContainer.jsx"; // ✅ este lo creaste recién
import "./index.css";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        {/* Catálogo principal */}
        <Route path="/" element={<ItemListContainer greeting="¡Bienvenidos a Ambar Nails!" />} />

        {/* Catálogo filtrado por categoría */}
        <Route path="/categoria/:categoriaId" element={<ProductsContainer />} />

        {/* Detalle del producto */}
        <Route path="/producto/:id" element={<ItemDetailContainer />} />

        {/* Página 404 */}
        <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
