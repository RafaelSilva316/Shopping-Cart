import React, { useState, useEffect } from "react";

function ItemCard(props) {
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem(`${props.name}count`);
    const initialValue = JSON.parse(saved);
    console.log(initialValue);
    return initialValue || 0;
  });

  useEffect(() => {
    props.addToCartOnChange(props.name, count);
  }, [count]);

  useEffect(() => {
    if (window.localStorage.getItem(`${props.name}count`)) {
      setCount(JSON.parse(window.localStorage.getItem(`${props.name}count`)));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(`${props.name}count`, JSON.stringify(count));
  }, [count]);

  return (
    <div className="ItemCard">
      <div className="img-frame">
        <img src={props.src} alt={props.alt} />
      </div>
      <div className="itemcard-info">
        <p>{props.name}</p>
        <p>${props.price}.00</p>
        <div className="itemcard-buttons">
          <div className="btn-box">
            <button
              onClick={() => {
                if (count > 0) {
                  setCount((prevCount) => prevCount - 1);
                }
              }}
            >
              &mdash;
            </button>
          </div>

          <input
            type="text"
            value={count || 0}
            onChange={(e) => {
              setCount(e.target.value);
            }}
          />
          <div className="btn-box">
            <button
              onClick={() => {
                setCount((prevCount) => {
                  if (prevCount) {
                    return parseInt(prevCount) + 1;
                  } else {
                    return 1;
                  }
                });
              }}
            >
              +
            </button>
          </div>
        </div>
        {/* <p>{count}</p> */}
      </div>
    </div>
  );
}

export default ItemCard;
