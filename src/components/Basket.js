import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeItem,
  addItem,
  incrementItem,
  decrementItem,
} from "./actions/actions";

const Basket = () => {
  const cart = useSelector((state) => state);
  console.log(cart);
  const dispatch = useDispatch();
  const total = cart.reduce((acc, cart) => {
    return acc + cart.price * cart.quantity;
  }, 0);
  console.log(total);
  return (
    <div>
      <ul>
        {cart.map((item) => (
          <div key={item._id}>
            <li className="basket-card">
              <img src={item.image} alt={item._id}></img>
              <p className="text">{item._id}</p>
              <p className="text">Price: ${item.price}</p>
              <p className="text">
                Amount: $
                {Math.floor(item.price * item.quantity * Math.pow(10, 2)) /
                  Math.pow(10, 2)}
              </p>
              <button
                onClick={() => {
                  dispatch(removeItem(item));
                }}
                className="button-cart"
              >
                remove
              </button>
              <div className="quantity">
                <button
                  onClick={() => {
                    if (item.quantity > 1) {
                      dispatch(decrementItem(item));
                    }
                    if (item.quantity === 1) {
                      dispatch(removeItem(item));
                    }
                  }}
                  className="button-cart"
                >
                  -
                </button>
                <p className="quantity-number">{item.quantity}</p>
                <button
                  onClick={() => {
                    dispatch(incrementItem(item));
                  }}
                  className="button-cart"
                >
                  +
                </button>
              </div>
            </li>
          </div>
        ))}
      </ul>

      {total > 0 && (
        <h2>${Math.floor(total * Math.pow(10, 2)) / Math.pow(10, 2)}</h2>
      )}
      {total === 0 && <h3>The Basket is empty</h3>}
    </div>
  );
};

export default Basket;
