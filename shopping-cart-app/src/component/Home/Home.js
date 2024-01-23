import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
// import appleimg from "/home/minmini/Documents/shopping-cart/shopping-cart-app/src/images/appleimg.jpeg";
const Home = () => {
  const [productsData, setProductsData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/products", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setProductsData(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="homecontainer">
      <div className="productscontainer"></div>
      <div className="products">
        {Array.isArray(productsData) &&
          productsData.map((products) => {
            return (
              <div className="product" key={products.id}>
                <div className="productimage">
                  <img src={products.image} alt=""></img>
                </div>
                <div className="productdetails">
                  <h4 className="productname">{products.brand}</h4>
                  <p className="description">{products.description}</p>
                  <div className="productprice">
                    <span>${products.price}</span>
                    <button className="add">Add to cart</button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
