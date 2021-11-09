import { useState, useContext } from "react";
import { AppContext } from "../../services/resultadosBusqueda";
import { Link } from "react-router-dom";

import withItemsData from "../../services/withItemsData";
import cart from "../../assets/cart.png";

const Navbar = ({data}) => {

  const [userSearchInput, setUserSearchInput] = useState("");
  const [state, setState] = useContext(AppContext);


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
    const unique = [];
    const filteredItemsUnique = filteredItems.filter( (item) => {
        if(!unique.includes(item.sku)) {
          unique.push(item.sku);
          return item;
        }
      });
    return filteredItems;
  }


// event handlers
  const handleInput = (e) => {
    e.preventDefault();
    setUserSearchInput(formatString(e.target.value));
    setState(filterSearch(userSearchInput))
  }

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   setState(filterSearch(userSearchInput));
  // }

  // const handleFocus = (e) => {
  //   e.preventDefault();
  //   e.target.value = "";
  //   setState([]);
  // }


    return (
        <>
            <div className="Navbar">
                <ul className="alinear">

                    <div className="left">
                        <li>
                            <Link to="/" className="hm"> Home</Link>
                        </li>
                        <div className="searchbar">
                            <input type="text" className="navsize" placeholder="Search..." onChange={handleInput}
                               />
                            <Link to="/searchResult">
                              <button type="button" className="navbutton" >Search</button>
                            </Link>
                        </div>
                    </div>

                    <div className="right">
                        <li>
                            <Link to="/login" className="log"> Log In</Link>
                        </li>

                        <li>
                            <Link to="/signup" className="sign"> Sign Up</Link>
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
