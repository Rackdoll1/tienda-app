import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../services/CartContext";
import { ProductContext } from "../../services/productContext";
import { UserContext } from "../../services/userContext";


const Card=({item})=>{
  const [cartstate, setCartstate] = useContext(CartContext);
  const [productState, setProductState] = useContext(ProductContext);
  const [user, setUser] = useContext(UserContext);

  let cardData = {
    itemInfo : item,
    counter : 0
  };

  const handleButton=()=>{
    cardData.counter += 1;
    console.log(cardData.counter);
    setCartstate([...cartstate, cardData])
  }

  const handleClick = () => {
    setProductState(item);
  }



return(
    <div className="card">
      <Link to="/productDetails" exact onClick={handleClick} >
        <img src={item?.image} className="image" alt={item.product_name}></img>
        <h1 className="product_name">{item.product_name}</h1>
        <h2 className="price">Price: ${item.price}</h2>
        <h2 className="brand">Brand: {item.brand}</h2>
        <h2 className="category">Category: {item.category}</h2>
      </Link>
      { !user ?
        <button type="button" className="cardButton">Inicia Sesion</button>
        :
        <button type="button" className="cardButton" id={item.id} onClick={handleButton}>Add to cart</button>
      }
    </div>
)

}

export default Card
