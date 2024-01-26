import React, { useEffect } from "react";
import { FiShoppingCart } from "react-icons/fi";
import "./NavBar.css";

const NavBar = ({ showCart, setShowCart, productCounter, reRender }) => {
  useEffect(() => {}, [reRender]);
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
      <div className="carticon" onClick={() => setShowCart(!showCart)}>
        <FiShoppingCart size={25}></FiShoppingCart>
        <div className="productcount">{productCounter}</div>
      </div>
    </div>
  );
};

export default NavBar;
