import React, { useEffect, useState } from "react";
import "./CartItems.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
const CartItems = ({ showCart, addProduct, reRender, handleRender }) => {
  const [total, setTotal] = useState(0);
  const [qty, setQty] = useState(0);
  const increment = (id) => {
    handleRender();
    addProduct.map((pqty) => {
      if (pqty.id === id) {
        if (pqty.qty !== 0) {
          pqty.qty = pqty.qty + 1;
        }
      }
    });
  };
  const decrement = (id, index) => {
    handleRender();
    if (addProduct[index].qty <= 1) {
      addProduct.splice(index, 1);
    } else {
      addProduct.map((pqty) => {
        if (pqty.id === id) {
          pqty.qty = pqty.qty - 1;
          setQty(pqty.qty);
        } else {
          return;
        }
      });
    }
  };
  const itemTotal = () => {
    if (addProduct) {
      const initialPrice = 0;
      const total = addProduct.reduce(
        (accumlator, current) => accumlator + current.price * current.qty,
        initialPrice
      );
      setTotal(total);
    }
  };
  useEffect(() => {
    itemTotal();
  }, [total, addProduct, reRender, qty]);
  return (
    <div
      className="cartmain"
      style={{
        visibility: showCart ? "visible" : "hidden",
        transform: showCart ? "translate:(0px,0px)" : "translate:(20rem,0rem)",
      }}
    >
      <div className="cartcontainer">
        {addProduct.length === 0 ? (
          <div>Your cart is empty</div>
        ) : (
          <div className="cartinner">
            <div className="cartitems">
              {addProduct.length !== 0 &&
                addProduct.map((product, index) => {
                  return (
                    <div className="cartitem">
                      <img src={product.image} alt=""></img>
                      <div className="cartdetails">
                        <h4>{product.productName}</h4>
                        <div className="itemprice">${product.price}</div>
                        <div className="productqty">
                          <button onClick={() => increment(product.id, index)}>
                            <AiOutlinePlus />
                          </button>
                          <span>{product.qty}</span>
                          <button onClick={() => decrement(product.id, index)}>
                            <AiOutlineMinus></AiOutlineMinus>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        )}
        <div className="totalcontainer">
          <p>Total</p>
          <h2>${total}</h2>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
