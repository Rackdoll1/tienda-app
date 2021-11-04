import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { AppContext} from "../../services/resultadosBusqueda";

import withItemsData from "../../services/withItemsData";

const Navbar = ({data}) => {

  const [state, setState] = useContext(AppContext);
  const [userInput, setUserInput] = useState("");

  /**
  * Capitalizes each word of a string, so its format is recognizable by the search filter.
  * @param {String} stringToFormat - The string to be formatted.
  * @return {String}               - The formatted string
  */
  const formatString = (stringToFormat) => {
    const words = stringToFormat.toLowerCase().split(" ");

    const wordsFormatted = words.map(word => {
      return word.charAt(0).toUpperCase() + word.substring(1);
    }).join(" ");

    return wordsFormatted;
  }

  /**
  * Filters products which include the given string on their name.
  * @param {String}     - The string to search and filter items with.
  * @return {[Object]}  - An array of items that matched the given string
  */
  const filterSearch = (stringToFilter) => {
    const filteredItems = data.filter(item => {
      return item.product_name.includes(stringToFilter);
    });
    return filteredItems;
  }

  const handleInput = (e) => {
    e.preventDefault();
    setUserInput(e.target.value);
  }

  const handleClick = (e) => {
    e.preventDefault();
    setState(filterSearch(formatString(userInput)));

  };

    return (
        <>
            <div className="Navbar">
                <ul className="alinear">

                    <div className="left">
                        <li>
                            <Link to="/" className="hm"> Home</Link>
                        </li>
                        <div className="searchbar">
                            <input
                              type="text" className="navsize" placeholder="Search..." onChange={handleInput} />
                            <button className="navbutton" onClick={handleClick} >Search</button>
                        </div>
                    </div>

                    <div className="right">
                        <li>
                            <Link to="/login" className="log"> Log In</Link>
                        </li>

                        <li>
                            <Link to="/signup" className="sign"> Sign Up</Link>
                        </li>
                    </div>
                </ul>
            </div>
        </>
    )
}

export default withItemsData(Navbar, String("https://ecomerce-master.herokuapp.com/api/v1/item"));
