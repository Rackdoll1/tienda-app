import { useState, useContext } from "react";
import { ProductContext } from "../../services/productContext";
import  AddToCart from "../addToCart/addToCart";

import Card from "../Card/Card";


const ProductDetails = () => {

  const [productState, setProductState] = useContext(ProductContext);

  return(
    <>
        <div className="details">
            <img src={productState?.image} className="detailsImage" alt={productState.product_name}></img>
            <div className="info">
              <h1 className="detailsProduct_name">{productState.product_name}</h1>
              <h2 className="detailsPrice">${productState.price}</h2>
              <p className="detailsDescription">{productState.description}</p>
              <h3 className="detailsBrand">Brand: {productState.brand}</h3>
              <h3 className="detailsCategory">Category: {productState.category}</h3>
            </div>
        </div>
        <AddToCart item={productState} />
    </>

  )

}

export default ProductDetails
