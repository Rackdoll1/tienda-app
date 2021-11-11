import { useContext } from "react";
import { CartContext }  from "../../services/CartContext";
import { UserContext } from "../../services/userContext";

// TODO dont forget to make user necessary to render

const AddToCart = ( {item} ) => {

  const [cartstate, setCartstate] = useContext(CartContext);
  const [user, setUser] = useContext(UserContext);

  let cardData = {
    itemInfo : item,
    counter : 0
  };

  const exists = () => {
    const result = cartstate.some(elem => elem.itemInfo === cardData.itemInfo);
    console.log(result);
    return result;
  }

  const handleButton = () => {
      if(!exists()) {
        cardData.counter += 1;
        console.log(cardData.counter);
        setCartstate([...cartstate, cardData]);
      }
  }

  return (
    // <>
      // { !user ?
      //   <button type="button" className="cardButton">Please login</button>
      //   :
      //   <button type="button" className="cardButton" id={item.id} onClick={handleButton}>Add to cart</button>
      // }
    <>
      <button type="button" className="cardButton" id={item.id} onClick={handleButton}>Add to cart</button>
    </>
  )
}

export default AddToCart
