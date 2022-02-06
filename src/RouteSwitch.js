import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./components/About";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";

const RouteSwitch = () => {
  // const initialCart =

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    console.log(saved);
    const initialValue = JSON.parse(saved);
    return initialValue || {};
  });

  const addInputToCart = (item, qty) => {
    setCart((prev) => {
      const newObj = { ...prev };
      newObj[item] = qty;
      return newObj;
    });
  };

  useEffect(() => {
    if (window.localStorage.getItem("cart")) {
      setCart(JSON.parse(window.localStorage.getItem("cart")));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const findTotalItems = (obj) => {
    let total = 0;
    for (const property in obj) {
      total = total + parseInt(obj[property]);
    }
    return total;
  };

  return (
    <BrowserRouter>
      <Navbar numItems={findTotalItems(cart)} />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/shop"
          element={<Shop addToCartOnChange={addInputToCart} />}
        />
        <Route path="/cart" element={<Cart cartObj={cart} />} />
      </Routes>
      {/* <button
        onClick={() => {
          localStorage.clear();
          setCart({});
        }}
      >
        clear
      </button>
      <p className="debug">{JSON.stringify(cart) || ""}</p> */}
    </BrowserRouter>
  );
};

export default RouteSwitch;
