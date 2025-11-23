import React from "react";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import SkeletonCard from "../components/SkeletonCard";
import "../style.css";

export default function ShopPage({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log("商品取得に失敗", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  // display skeleton cards while loading
  if (loading)
    return (
      <div className="product-list">
        {Array.from({ length: 8 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );

  return (
    <div>
      <h1 className="title">Our Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAdd={addToCart}
          ></ProductCard>
        ))}
      </div>
    </div>
  );
}
