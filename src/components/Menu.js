import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addItem } from "./actions/actions";

const Menu = ({ products }) => {
  const cart = useSelector((state) => state);
  console.log(cart);
  const dispatch = useDispatch();

  console.log(cart.length);

  console.log(products.products);
  const items = products.products;
  return (
    <div>
      <h1>Menu</h1>
      <ul className="products">
        {items.map((product) => {
          product.quantity = 1;

          return (
            <li key={product._id}>
              <div className="product">
                <Link to={"/menu/" + product._id}>
                  <img src={product.image} alt={product._id}></img>
                  <p className="food-name">{product._id}</p>
                </Link>

                <div className="product-price">
                  <div>${product.price}</div>
                  <button
                    onClick={() => {
                      dispatch(addItem(product));
                    }}
                    className="button primary"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
