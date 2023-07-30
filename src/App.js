import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navBar";
import { Home } from "./pages/home";
import { Cart } from "./pages/cart/cart";
import { Signin } from "./pages/SigninSignup";
import { Shop } from "./pages/shop/shop";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
      </Routes>
    </div>
  );
}

export default App;
