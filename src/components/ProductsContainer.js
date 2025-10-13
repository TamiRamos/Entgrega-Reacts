// ProductsContainer.js
import React from "react";
import ItemCard from "./ItemCard";
import imagen1 from "./assets/imagenes/imagen1.jpg";
import imagen2 from "./assets/imagenes/imagen2.jpg";
import imagen3 from "./assets/imagenes/imagen3.jpg";

// Array de productos directamente aquí
const products = [
  { id: 1, nombre: "Esmalte Rosa", precio: 500, imagen: imagen1 },
  { id: 2, nombre: "Removedor", precio: 300, imagen: imagen2 },
  { id: 3, nombre: "Set de Brochas", precio: 1200, imagen: imagen3 },
];

const ProductsContainer = ({ addToCart }) => {
  return (
    <div className="products-container">
      {products.map(product => (
        <ItemCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductsContainer;
