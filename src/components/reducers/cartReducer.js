const cartReducer = (cart = [], action) => {
  console.log(cart);
  if (action.type === "ADD") {
    let tmpCart = cart.filter((item) => item._id === action.payload._id);

    if (tmpCart < 1) {
      return [...cart, action.payload];
    } else {
      let tempCart = cart.map((item) => {
        if (item._id === action.payload._id) {
          return { ...item, quantity: item.quantity + 1 };
        }

        return item;
      });
      return tempCart;
    }
  }

  if (action.type === "REMOVE") {
    return cart.filter((item) => item._id !== action.payload._id);
  }

  //   if (action.type === "DECREMENT") {
  //     return cart.map((item) => { return
  //       if heroku logs --tail(item._id === action.payload._id) {
  //         item.quantity = item.quantity - 1;
  //       }
  //     });
  //   }

  if (action.type === "INCREMENT") {
    let tempCart = cart.map((item) => {
      if (item._id === action.payload._id) {
        return { ...item, quantity: item.quantity + 1 };
      }

      return item;
    });
    return tempCart;
  }

  if (action.type === "DECREMENT") {
    let tempCart = cart.map((item) => {
      if (item._id === action.payload._id) {
        return { ...item, quantity: item.quantity - 1 };
      }

      return item;
    });
    return tempCart;
  }

  return cart;
};
export default cartReducer;
