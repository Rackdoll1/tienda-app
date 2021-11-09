import { BrowserRouter as Router, Route } from "react-router-dom"
// importamos Navbar
import Provider from './services/resultadosBusqueda';
import Navbar from './components/Navbar/Navbar'
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Home from './components/Home/Home';
import SearchResult from './components/SearchResult/SearchResult';
import Cart from "./components/Cart/Cart";
import CartContext from "./services/CartContext";
// styles
import "./styles/organismos/organismos.scss";
import "./App.css";


function App() {
  return (
    <>
      <Provider>
        <Router>
            <Navbar />
            {/* exact especificamente */}
            <CartContext>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
            </CartContext>
            <Route exact path="/searchResult">
              <SearchResult />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
        </Router>
      </Provider>
    </>
  );
}

export default App;
