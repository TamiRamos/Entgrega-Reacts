import React, { useState } from "react";
import ItemCard from "./ItemCard";
import { products } from "../data/products";
import CartWidget from "./CartWidget";

const ItemListContainer = ({ greeting }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => setCart([...cart, product]);

  return (
    <div className="item-list-container">
      <h1>{greeting}</h1>
      <div className="cart-summary">
        <CartWidget cartCount={cart.length} />
      </div>
      <div className="items-grid">
        {products.map((prod) => (
          <ItemCard key={prod.id} product={prod} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
