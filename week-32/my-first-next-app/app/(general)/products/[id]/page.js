"use client"; // this will make the page as client

import { useState } from "react";

export default function AddToCart({ productId }) {

  const [added, setAdded] = useState(false);

  function handleClick() {
    console.log("Product Added:", productId);
    setAdded(true);
  }

  return (
    <div>
      <button onClick={handleClick}>
        {added ? "Added ✓" : "Add to Cart"}
      </button>
    </div>
  );
}