import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Basket from "./components/Basket";

import data from "./data.json";
import Item from "./components/Item";

import { useSelector } from "react-redux";
import Header from "./components/Header";
function App() {
  const cart = useSelector((state) => state);

  const itemsIncart = cart.reduce((acc, cart) => {
    return acc + cart.quantity;
  }, 0);
  console.log(itemsIncart);
  return (
    <>
      <Header itemsIncart={itemsIncart} />

      <Routes>
        <Route path="home" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="menu" element={<Menu products={data} />}></Route>
        <Route path="basket" element={<Basket />}></Route>
        <Route path="menu/:id" element={<Item products={data} />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
