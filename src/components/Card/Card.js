import React from "react";
import { useContext } from "react";
import {CartContext} from "../../services/CartContext";
import Cart from "../Cart/Cart";

const Card=({id,image,product_name,price,brand,category,Data})=>{
  const [cartstate, setCartstate] = useContext(CartContext);
  let cardData={Data}
const handleButton=()=>{
  setCartstate([...cartstate,cardData])
  console.log(cartstate)
}


return(
    <div className="card">
      <img src={image} className="image" alt={image}></img>
      <h1 className="product_name">{product_name}</h1>
      <h2 className="price">Price: ${price}</h2>
      <h2 className="brand">Brand: {brand}</h2>
      <h2 className="category">Category: {category}</h2>
      <button type="button" className="cardButton" id={id} onClick={handleButton}>Add to cart</button>
    </div>
)

}

export default Card
