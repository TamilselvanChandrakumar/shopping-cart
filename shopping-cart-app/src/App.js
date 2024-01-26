import { useState } from "react";
import "./App.css";
import Home from "./component/Home/Home";
import NavBar from "./component/Navbar/NavBar";
import CartItems from "./component/CartItems/CartItems";

function App() {
  const [showCart, setShowCart] = useState(false);
  const [addProduct, setAddProduct] = useState([]);
  const [reRender, setReRender] = useState(false);
  const handleRender = () => {
    setReRender(!reRender);
  };
  const addToCart = (brand, image, price, id, index) => {
    if (addProduct.some((product) => product.id === id)) {
      addProduct.splice(index, 1);
    } else {
      setAddProduct([
        ...addProduct,
        {
          productName: brand,
          price: price,
          image: image,
          id: id,
          qty: 1,
        },
      ]);
    }
  };
  return (
    <div>
      <NavBar
        showCart={showCart}
        setShowCart={setShowCart}
        productCounter={addProduct.length}
        handleRender={handleRender}
      ></NavBar>
      <CartItems
        showCart={showCart}
        addProduct={addProduct}
        handleRender={handleRender}
        reRender={reRender}
      ></CartItems>
      <Home addToCart={addToCart}></Home>
    </div>
  );
}

export default App;
