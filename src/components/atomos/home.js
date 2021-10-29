import { useState } from "react";

const Home = ({data}) => {
  const [searchString, setSearchString] = useState("");

  const Items = data.map((item, index) => {
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

  const formatString = (stringToFormat) => {
    const words = stringToFormat.split(" ");
    return words.map(word => {
      return word.charAt(0).toUpperCase() + word.substring(1);
    }).join(" ");
  }

  const filterSearch = (stringToFilter) => {
    return data.filter(item => {
      return item.product_name.includes(stringToFilter);
    })
  }

  const handleInput = (e) => {
    e.preventDefault();
    setSearchString(e.target.value);
  }

  const handleClick = (e) => {
    e.preventDefault();
    console.log(filterSearch(formatString(searchString)));
  }


  return (
    <>
      <input type="text" id="search" name="search" placeholder="Search items..." onChange={handleInput}></input>
      <button type="button" onClick={handleClick}>Search</button>
      <h1>Home</h1>
      {Items}
    </>
  )
}

export default Home;
