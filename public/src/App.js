import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

function App() {
  return (
    <Router>
      {/* Navbar */}
      {/* sideDrawer */}
      {/* Backdrop */}
      <main>
        <Switch>
          <Route exact path="/" components={HomeScreen} />
          <Route exact path="/product/:id" components={ProductScreen} />
          <Route exact path="/cart" components={CartScreen} />
        </Switch>
      </main>
      {/* HomeScreen */}
      {/* ProductScreen */}
      {/* CartScreen */}
    </Router>
  );
}

export default App;
