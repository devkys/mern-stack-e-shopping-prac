import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

// Components
import Navbar from "./components/Navbar";
import Backdrop from "./components/Backdrop";
import SideDrawer from "./components/SideDrawer";
function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <BrowserRouter>
      {/* Navbar */}
      < Navbar click={() => setSideToggle(true)}/>
      {/* sideDrawer */}
      < SideDrawer  show={sideToggle}/>
      {/* Backdrop */}
      < Backdrop show={sideToggle} />
      <main>
        <Routes>
          <Route exact path="/" element={ <HomeScreen />} />
          <Route exact path="/product/:id" element={ <ProductScreen /> } />
          <Route exact path="/cart" element={ <CartScreen /> } />
        </Routes>
      </main>
      </BrowserRouter>
  );
}

export default App;
