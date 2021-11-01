import { useState } from "react";

const Home = ({data}) => {
  const [searchString, setSearchString] = useState("");

  // Array to store each item info received in "data" with its corresponding rendering format.
  const items = data.map((item, index) => {
    return (
      // React pide que elementos creados en una función map() tengan una
      // llave única. Se puede usar el index proporcionado por el propio map()
      <div key={index}>
        <img src={item?.image} alt={item?.product_name} />
        <h2>{item?.product_name}</h2>
        <h2>{item?.price}</h2>
        <h2>{item?.brand}</h2>
      </div>
    )
  });

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

  // Handles user input for searching items
  const handleInput = (e) => {
    e.preventDefault();
    setSearchString(e.target.value);
  }

  // Handles user submission for searching items.
  const handleClick = (e) => {
    e.preventDefault();
    console.log(filterSearch(formatString(searchString)));
  }


  return (
    <>
      <input type="text" id="search" name="search" placeholder="Search items..." onChange={handleInput}></input>
      <button type="button" onClick={handleClick}>Search</button>
      <h1>Home</h1>
      {items}
    </>
  )
}

export default Home;
