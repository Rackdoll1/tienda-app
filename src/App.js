import { BrowserRouter as Router, Route } from "react-router-dom"
// services
import UserProvider from "./services/userContext";
import SearchProvider from './services/resultadosBusqueda';
import CartContext from "./services/CartContext";
import ProductContext from "./services/productContext"
// components
import Navbar from './components/Navbar/Navbar'
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Home from './components/Home/Home';
import SearchResult from './components/SearchResult/SearchResult';
import Cart from "./components/Cart/Cart";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import AddItem from "./components/addItem/AddItem";

// styles
import "./styles/organismos/organismos.scss";
import "./App.css";


function App() {
  return (
    <>
      <UserProvider>
        <SearchProvider>
          <CartContext>
            <ProductContext>
              <Router>
                  <Navbar />
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route exact path="/cart">
                    <Cart />
                  </Route>
                  <Route exact path="/searchResult">
                    <SearchResult />
                  </Route>
                  <Route exact path="/login">
                    <Login />
                  </Route>
                  <Route exact path="/signup">
                    <Signup />
                  </Route>
                  <Route exact path="/productDetails">
                    <ProductDetails />
                  </Route>
                  <Route exact path="/createItem">
                    <AddItem />
                  </Route>
              </Router>
            </ProductContext>
          </CartContext>
        </SearchProvider>
      </UserProvider>
    </>
  );
}

export default App;
