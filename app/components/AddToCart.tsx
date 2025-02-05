"use client";
import React from "react";

const AddToCart = () => {
  return (
    <button
      onClick={() => console.log("Click")}
      // className="py-3 px-5 my-5 bg-sky-500 text-white text-lg hover:bg-sky-600"
      className="btn"
    >
      Add to Cart
    </button>
  );
};

export default AddToCart;
