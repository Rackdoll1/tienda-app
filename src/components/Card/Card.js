import { useContext } from "react";
import { Link } from "react-router-dom";

import { ProductContext } from "../../services/productContext";
import AddToCart from "../../components/addToCart/addToCart";


const Card=({item})=>{
  const [productState, setProductState] = useContext(ProductContext);


  const handleClick = () => {
    setProductState(item);
  }



  return(
      <div className="card">
        <Link to="/productDetails" onClick={handleClick}>
          <img src={item?.image} className="image" alt={item.product_name}></img>
          <div className="card-text">
            <h1 className="h1-text webkit-show-text line-clamp-2">{item.product_name}</h1>
            <h2 className="h2-text webkit-show-text line-clamp-1">${item.price}</h2>
            <h3 className="h3-text">Brand: {item.brand}</h3>
            <h3 className="h3-text">Category: {item.category}</h3>
          </div>
        </Link>
        <AddToCart item={item} />
      </div>

  )

}

export default Card
