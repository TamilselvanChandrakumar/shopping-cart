import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbarcontainer">
      <div className="navinner">
        <div className="logo">
          <img
            src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-campus-recreation-university-nebraska-lincoln-30.png"
            alt=""
          ></img>
        </div>
      </div>
      <div className="carticon">
        <FiShoppingCart size={25}></FiShoppingCart>
        <div className="productcount">2</div>
      </div>
    </div>
  );
};

export default NavBar;
