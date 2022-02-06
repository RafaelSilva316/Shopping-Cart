import { NavLink } from "react-router-dom";
import Carousel from "./components/Carousel";

function App() {
  return (
    <div className="App">
      <div className="carousel">
        <Carousel />
      </div>
      <div className="cta-box">
        <NavLink to="/shop" className="cta">
          Shop Now
        </NavLink>
      </div>
    </div>
  );
}

export default App;
