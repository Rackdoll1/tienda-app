import { useState, useContext } from "react";
import { ProductContext } from "../../services/productContext";

import Card from "../Card/Card";


const ProductDetails = () => {

  const [productState, setProductState] = useContext(ProductContext);

  return(
    <>
      <Card item={productState} />
    </>

  )

}

export default ProductDetails
