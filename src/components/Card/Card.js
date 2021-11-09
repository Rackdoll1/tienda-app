import React from "react";
import { useContext } from "react";
import {CartContext} from "../../services/CartContext";
import Cart from "../Cart/Cart";

const Card=({item})=>{
  const [cartstate, setCartstate] = useContext(CartContext);
  let cardData={item}

  const handleButton=()=>{
    setCartstate([...cartstate,cardData])
    console.log(cartstate)
  }

const Card=({item})=>{


return(
    <div className="card">
      <img src={item?.image} className="image" alt={item.product_name}></img>
      <h1 className="product_name">{item.product_name}</h1>
      <h2 className="price">Price: ${item.price}</h2>
      <h2 className="brand">Brand: {item.brand}</h2>
      <h2 className="category">Category: {item.category}</h2>
      <button type="button" className="cardButton" id={id} onClick={handleButton}>Add to cart</button>
    </div>
)

}

export default Card
