import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navBar";
import { Home } from "./pages/home";
import { Cart } from "./pages/cart";
import { Signin } from "./pages/signin";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/logIn" element={<Signin />}></Route>
      </Routes>
    </div>
  );
}

export default App;
