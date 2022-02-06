import React from "react";
import ItemCard from "./ItemCard";
import piecesList from "./imagesList";
import { NavLink } from "react-router-dom";

function Shop(props) {
  return (
    <div className="Shop">
      {piecesList.map((item, index) => {
        return (
          <ItemCard
            addToCartOnChange={props.addToCartOnChange}
            key={index}
            src={item.src}
            name={item.name}
            price={item.price}
            alt={item.alt}
          />
        );
      })}
      <button className="btn-shop">
        <NavLink to="/cart">Cart</NavLink>
      </button>
    </div>
  );
}

export default Shop;
