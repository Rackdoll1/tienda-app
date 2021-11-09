import { BrowserRouter as Router, Route } from "react-router-dom"
// importamos Navbar
import UserProvider from "./services/userContext";
import SearchProvider from './services/resultadosBusqueda';
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
      <UserProvider>
        <SearchProvider>
          <Router>
              <Navbar />
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
        </SearchProvider>
      </UserProvider>
    </>
  );
}

export default App;
