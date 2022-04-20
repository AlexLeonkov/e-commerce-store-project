import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import { Rate } from "antd";

const Item = ({ products }) => {
  const cart = useSelector((state) => state);
  const [text, setText] = useState("Add to cart");
  const dispatch = useDispatch();
  let name = useParams();
  let selectedItem = products.products.find((item) => item._id === name.id);
  console.log(selectedItem);

  return (
    <div className="small-container single-product">
      <div className="row">
        <div className="col-2">
          <img src={selectedItem.image} alt={selectedItem._id} />
        </div>
        <div className="col-2">
          <h1>{selectedItem._id}</h1>
          <h4>${selectedItem.price}</h4>
          <button
            onClick={() => {
              setText("Added to cart");
              selectedItem.quantity = 1;
              dispatch({ type: "ADD", payload: selectedItem });
            }}
            href="/basket"
            className="btn"
          >
            {text}
          </button>
          <h3>
            Product details <i className="fa fa-indent"></i>
          </h3>
          <br />
          <p>{selectedItem.description}</p>
          <Rate value={selectedItem.value} />;
        </div>
      </div>
    </div>
  );
};

export default Item;
