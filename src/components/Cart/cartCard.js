import { useContext } from "react";
import { CartContext } from "../../services/CartContext";


const CartCard=({item, clickRefresh})=>{
  const [cartstate, setCartstate] = useContext(CartContext);


  let counter;

  if (cartstate[cartstate.indexOf(item)].counter > 0){
    counter = cartstate[cartstate.indexOf(item)].counter;
  }

  const Plus=()=>{
    const arrayIndex = cartstate.indexOf(item);
    cartstate[arrayIndex].counter += 1;
    clickRefresh();
  }

  const Minus=(e) => {
    const arrayIndex = cartstate.indexOf(item);
    cartstate[arrayIndex].counter -= 1;

    if (cartstate[arrayIndex].counter === 0) {;
      // remove the current item from our cart context
      const itemToFilter = cartstate[arrayIndex];
      setCartstate(cartstate.filter(item => {
        if(item !== itemToFilter) {
          return item;
        }
      })
      )
    }

    clickRefresh();
  }



return(
    <div className="CartCard">
      <img src={item.itemInfo.image} className="Cartimage" alt={item.itemInfo.product_name}></img>
      <h1 className="Cartproduct_name">{item.itemInfo.product_name}</h1>
      <h2 className="Cartprice"> ${item.itemInfo.price}</h2>
      <h2 className="Cartbrand">Brand: {item.itemInfo.brand}</h2>
      <h2 className="Cartcategory">Category: {item.itemInfo.category}</h2>
      <h2>Cantidad: {counter}</h2>
      <div className="Cartcardbuttons">
        <button type="button" className="CartcardButtonA" id={item.itemInfo.id} onClick={Plus}>+</button>
        <button type="button" className="CartcardButtonB" id={item.itemInfo.id} onClick={Minus}>-</button>
      </div>
    </div>
)

}

export default CartCard
