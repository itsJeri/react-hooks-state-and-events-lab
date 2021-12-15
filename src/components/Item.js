import React, { useState } from "react";



function Item({ name, category }) {

  const [inCart, setCart] = useState(false);
function handleClick() {
  setCart(inCart => !inCart);
}

  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className={ inCart ? "in-cart" : ""}>{ inCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
