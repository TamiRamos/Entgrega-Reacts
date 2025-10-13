import React from "react";

const ItemCard = ({ product, addToCart }) => {
  return (
    <div className="item-card">
      <img src={product.imagen} alt={product.nombre} className="item-img" />
      <h3>{product.nombre}</h3>
      <p>${product.precio}</p>
      <button onClick={() => addToCart(product)}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCard;
