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
        <Link to="/productDetails" exact onClick={handleClick} >
          <img src={item?.image} className="image" alt={item.product_name}></img>
          <h1 className="product_name">{item.product_name}</h1>
          <h2 className="price">Price: ${item.price}</h2>
          <h2 className="brand">Brand: {item.brand}</h2>
          <h2 className="category">Category: {item.category}</h2>
        </Link>
        <AddToCart item={item} />
      </div>

  )

}

export default Card
