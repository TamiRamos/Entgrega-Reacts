import React from "react";

const CartWidget = ({ cartCount = 0 }) => {
  return (
    <div className="cart-widget">
      <span className="cart-icon">🛒</span>
      {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
    </div>
  );
};

export default CartWidget;
