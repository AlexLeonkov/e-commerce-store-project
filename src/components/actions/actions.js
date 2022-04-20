export const addItem = (item) => ({
  type: "ADD",
  payload: item,
});

export const incrementItem = (item) => ({
  type: "INCREMENT",
  payload: item,
});

export const removeItem = (item) => ({
  type: "REMOVE",
  payload: item,
});

export const decrementItem = (item) => ({
    type: "DECREMENT",
    payload: item,
  });



