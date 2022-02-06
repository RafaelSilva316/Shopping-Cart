import React from "react";
import piecesList from "./imagesList";
import { NavLink } from "react-router-dom";

function Cart(props) {
  const pieces = Object.keys(props.cartObj);

  const findTotal = (obj, ref) => {
    let total = 0;
    Object.keys(obj).map((item, index) => {
      total = total + obj[item] * piecesList[index].price;
    });
    return total;
  };

  let t = findTotal(props.cartObj, piecesList);

  return (
    <div className="CartPage">
      <div>
        {pieces.map((key, index) => {
          // console.log(`${props.cartObj} : ${props.cartObj[key]}`);
          console.log(props.cartObj);
          if (props.cartObj[key] !== 0 || props.cartObj[key] !== "0") {
            return (
              <li key={index}>
                <img
                  className="cart-img"
                  src={piecesList[index].src}
                  alt={piecesList[index].alt}
                ></img>{" "}
                <span className="meat">
                  {key} - {props.cartObj[key]} x ${piecesList[index].price}.00{" "}
                </span>
                <span className="individual-total">
                  ${props.cartObj[key] * piecesList[index].price}.00
                </span>
              </li>
            );
          }
        })}
      </div>
      <p>Total: ${t}.00</p>
      <div className="btn-cart">
        <button className="btn-shop btn-center">
          <NavLink to="/shop">Back to Shop</NavLink>
        </button>
      </div>
    </div>
  );
}

export default Cart;
