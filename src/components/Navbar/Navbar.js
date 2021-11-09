import { useState, useContext } from "react";
import { AppContext } from "../../services/resultadosBusqueda";
import { UserContext } from "../../services/userContext";
import { Link } from "react-router-dom";

import withItemsData from "../../services/withItemsData";
import cart from "../../assets/cart.png";

const Navbar = ({data}) => {

  const [userSearchInput, setUserSearchInput] = useState("");
  const [state, setState] = useContext(AppContext);
  const [user, setUser] = useContext(UserContext);


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
    setUser(null);
  }



    return (
        <>
            <div className="Navbar">
                <ul className="alinear">

                    <div className="left">
                        <li>
                            <Link to="/" className="hm" >Home</Link>
                        </li>
                    </div>

                    <div className="center">
                          <input type="text" className="navsize" placeholder="Search..." onChange={handleInput}
                             />
                           <Link to="/searchResult" exact>
                            <button type="button" className="navbutton" >Search</button>
                          </Link>
                    </div>

                    <div className="right">
                        <li>
                            {user ?
                              <h3>{`Bienvenido ${user.first_name} ${user.last_name}`}</h3>
                              :<Link to="/login" className="log" exact> Log In</Link>
                            }
                        </li>

                        <li>
                          {user ?
                            <button type="button" onClick={handleLogOut}>Logout</button>
                            :<Link to="/signup" className="sign" exact> Sign Up</Link>
                            }
                        </li>
                        <li>
                            <Link to="/cart" exact>
                              <img src={cart} alt="cart" className="cart"></img>
                            </Link>
                        </li>
                        <li>
                            <Link to="/cart" >
                              <img src={cart} alt="cart" className="cart"></img>
                            </Link>
                        </li>
                    </div>
                </ul>
            </div>
        </>
    )
}

export default withItemsData(Navbar,"https://ecomerce-master.herokuapp.com/api/v1/item")
