import React from "react";
import { useContext } from "react";
import {CartContext} from "../../services/CartContext";


const CartCard=({item})=>{
  const [cartstate, setCartstate] = useContext(CartContext);

  const Plus=()=>{
    console.log(item);
    const arrayIndex = cartstate.indexOf(item);
    console.log(arrayIndex);
    cartstate[arrayIndex].counter += 1;
    console.log(cartstate[arrayIndex].counter);
  }

  const Minus=(e) => {

  }



return(
    <div className="CartCard">
      <img src={item.itemInfo.image} className="Cartimage" alt={item.itemInfo.product_name}></img>
      <h1 className="Cartproduct_name">{item.itemInfo.product_name}</h1>
      <h2 className="Cartprice">Price: ${item.itemInfo.price}</h2>
      <h2 className="Cartbrand">Brand: {item.itemInfo.brand}</h2>
      <h2 className="Cartcategory">Category: {item.itemInfo.category}</h2>
      <h2>Cantidad: {cartstate[cartstate.indexOf(item)].counter}</h2>
      <button type="button" className="CartcardButton" id={item.itemInfo.id} onClick={Plus}>+</button>
      <button type="button" className="CartcardButton" id={item.itemInfo.id} onClick={Minus}>-</button>
    </div>
)

}

export default CartCard
