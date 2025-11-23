import { useState } from "react";
import "../style.css";
import React from "react";

const ProductCard = ({ product, onAdd }) => {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAddToCard = () => {
    onAdd(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000); // disappear after 2 seconds
  };

  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={`image of ${product.title}`}
        width={240}
        height={260}
      />
      <p className="product-title">{product.title}</p>
      <p className="price">${product.price}</p>

      <div className="quantity-control">
        <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
          -
        </button>
        <input
          type="number"
          min="1"
          readOnly
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
        <button onClick={() => setQuantity((q) => q + 1)}>+</button>
      </div>

      <button className="add-to-cart" onClick={handleAddToCard}>
        Add to Cart
      </button>
      {added && <p className="added-text">✅Added to cart</p>}
    </div>
  );
};

export default ProductCard;
