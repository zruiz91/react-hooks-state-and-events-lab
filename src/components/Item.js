import React, {useState} from "react";

function Item({ name, category }) {
  const [isAddedToCart ,setAddToCart] = useState(false);

  const hadleAddToCart = () => {
    setAddToCart(!isAddedToCart)
  }

  return (
    <li className={isAddedToCart?"in-cart":null}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isAddedToCart?"remove":"add"} onClick={hadleAddToCart} >{isAddedToCart?"Remove From Cart":"Add to Cart"}</button>
    </li>
  );
}

export default Item;
