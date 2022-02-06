import piecesList from "./imagesList";
import React, { useState, useEffect } from "react";

function Carousel() {
  const [pos, setPos] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPos((pos) => {
        if (pos <= -600 * (piecesList.length - 1)) {
          return 0;
        }
        return pos - 600;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ left: `${pos}px` }} className="slide">
      {piecesList.map((item, index) => {
        return (
          <div key={index} className="carousel-img-box">
            <img src={item.src} alt={item.src} />
          </div>
        );
      })}
    </div>
  );
}

export default Carousel;
