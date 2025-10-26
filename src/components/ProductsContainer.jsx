import React from "react";
import { useParams, Link } from "react-router-dom";
import ItemCard from "./ItemCard";
import imagen1 from "../assets/imagenes/imagen1.png";
import imagen2 from "../assets/imagenes/imagen2.png";
import imagen3 from "../assets/imagenes/imagen3.png";

const products = [
  { id: 1, nombre: "Esmalte Rosa", precio: 500, categoria: "esmaltes", imagen: imagen1 },
  { id: 2, nombre: "Removedor", precio: 300, categoria: "herramientas", imagen: imagen2 },
  { id: 3, nombre: "Set de Brochas", precio: 1200, categoria: "accesorios", imagen: imagen3 },
];

const ProductsContainer = () => {
  const { categoriaId } = useParams();
  const filtered = categoriaId ? products.filter(p => p.categoria === categoriaId) : products;

  return (
    <div className="products-container">
      <h2>{categoriaId ? categoriaId.toUpperCase() : "Todos los productos"}</h2>
      <div className="items-grid">
        {filtered.map(product => (
          <div key={product.id}>
            <ItemCard product={product} addToCart={() => {}} />
            <Link to={`/producto/${product.id}`} className="btn-ver">Ver detalle</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsContainer;


