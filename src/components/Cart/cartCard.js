import React from "react";
import { useContext } from "react";
import {CartContext} from "../../services/CartContext";
import Cart from "../Cart/Cart";
const CartCard=({id,image,product_name,price,brand,category,Data,index,funcion})=>{
  const [cartstate, setCartstate] = useContext(CartContext);
  let cardData={Data}
const Plus=()=>{
  setCartstate([...cartstate,cardData])
  console.log(cartstate)
}



return(
    <div className="CartCard">
      <img src={image} className="Cartimage" alt={image}></img>
      <h1 className="Cartproduct_name">{product_name}</h1>
      <h2 className="Cartprice">Price: ${price}</h2>
      <h2 className="Cartbrand">Brand: {brand}</h2>
      <h2 className="Cartcategory">Category: {category}</h2>
      <button type="button" className="CartcardButton" id={id} onClick={Plus}>+</button>
      <button type="button" className="CartcardButton" id={id} onClick={funcion}>-</button>
    </div>
)

}

export default CartCard
