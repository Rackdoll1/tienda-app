import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from 'react-router-dom'

import { AppContext } from "../../services/resultadosBusqueda";
import { UserContext } from "../../services/userContext";
import { CartContext } from "../../services/CartContext";


import withItemsData from "../../services/withItemsData";
import cart from "../../assets/cart.png";
import store from "../../assets/store.png";

const Navbar = ({data}) => {

  const [userSearchInput, setUserSearchInput] = useState("");
  const [state, setState] = useContext(AppContext);
  const [user, setUser] = useContext(UserContext);
  const [cartstate, setCartstate] = useContext(CartContext);
  const history = useHistory();


  // methods to format and filter search
  const formatString = (stringToFormat) => {
    const words = stringToFormat.toLowerCase().split(" ");

    const wordsFormatted = words.map(word => {
      return word.charAt(0).toUpperCase() + word.substring(1);
    }).join(" ");

    return wordsFormatted;
  }

  const filterSearch = (stringToFilter) => {
    const filteredItems = data.filter(item => {
      return item.product_name.includes(stringToFilter);
    });

    return filteredItems;
  }


// event handlers
  const handleInput = (e) => {
    e.preventDefault();
    setUserSearchInput(formatString(e.target.value));
    setState(filterSearch(userSearchInput))
  }

  const handleLogOut = (e) => {
    e.preventDefault();
    setCartstate([]);
    setUser(null);
    history.push("/");
  }



    return (
        <>
            <div className="Navbar">
                <ul className="alinear">

                    <div className="left">
                        <li>
                          <img src={store} className="store-logo" alt="store logo" />
                        </li>
                        <li className="store-name">
                            <NavLink to="/" className="font-28 no-outline" > YeyStore</NavLink>
                        </li>
                        <li>
                          {user?.role === "ADMIN"?
                            <NavLink to="/createItem" exact className="no-outline">
                              <button type="button" className="create-item navbutton" >New Item</button>
                            </NavLink>
                            :null
                          }
                        </li>
                    </div>

                    <div className="center">
                          <input type="text" className="navsize" placeholder=" Search..." onChange={handleInput}
                             />
                           <NavLink to="/searchResult" exact className="no-outline">
                            <button type="button" className="navbutton" >Search</button>
                          </NavLink>
                    </div>

                    <div className="right">
                        <li className="cart-icons">
                            <NavLink to="/cart" exact activeClassName="active">
                              { cartstate.length > 0 ?
                                <div className="number-items">{cartstate.length}</div>
                                :null
                              }
                              <img src={cart} alt="cart" className="cart"></img>
                            </NavLink>
                        </li>
                        <li>
                            {user ?
                              <h3>{`Bienvenid@ ${user.first_name}`}</h3>
                              :<NavLink to="/login" className="navbar-a font-22" exact activeClassName="active"> Log In</NavLink>
                            }
                        </li>

                        <li>
                          {user ?
                            <button type="button" className="logout" onClick={handleLogOut}>Logout</button>
                            :<NavLink to="/signup" className="navbar-a font-22" exact activeClassName="active"> Sign Up</NavLink>
                            }
                        </li>
                    </div>
                </ul>
            </div>
        </>
    )
}

export default withItemsData(Navbar,"https://ecomerce-master.herokuapp.com/api/v1/item")
