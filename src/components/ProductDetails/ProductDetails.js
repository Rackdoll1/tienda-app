import { useState, useContext } from "react";
import { ProductContext } from "../../services/productContext";
import  AddToCart from "../addToCart/addToCart";

import Card from "../Card/Card";


const ProductDetails = () => {

  const [productState, setProductState] = useContext(ProductContext);

  return(
    <>
        <div className="details">
            <img src={productState?.image} className="image" alt={productState.product_name}></img>
            <h1 className="product_name">{productState.product_name}</h1>
            <h2 className="description">{productState.description}</h2>
            <h2 className="price">Price: ${productState.price}</h2>
            <h2 className="brand">Brand: {productState.brand}</h2>
            <h2 className="category">Category: {productState.category}</h2>
          <AddToCart item={productState} />
        </div>
    </>

  )

}

export default ProductDetails
