import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
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
import PageNotFound from "./components/PageNotFound/PageNotFound";

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
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/cart" component={Cart}/>
                    <Route exact path="/searchResult" component={SearchResult}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/productDetails" component={ProductDetails} />
                    <Route exact path="/createItem" component={AddItem} />
                    <Route render={() => <PageNotFound />} />
                  </Switch>
              </Router>
            </ProductContext>
          </CartContext>
        </SearchProvider>
      </UserProvider>
    </>
  );
}

export default App;
