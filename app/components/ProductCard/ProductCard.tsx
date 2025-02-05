// "use client"; // Use this to turn the whole component to client side component but in our example, we will use addtocart as a client component
import React from "react";
import AddToCart from "../AddToCart";
import styles from './ProductCard.module.css';

function ProductCard() {
  return (
    <>
      <div className={styles.cardContainer}>
        <h4>Card Component</h4>
        <AddToCart />
      </div>
    </>
  );
}

export default ProductCard;
