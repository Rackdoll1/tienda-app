import React from "react";

const Card=({image,product_name,price,brand,category})=>{

return(
    <div className="card">
      <img src={image} className="image" alt={image}></img>
      <h1 className="product_name">{product_name}</h1>
      <h2 className="price">Price: ${price}</h2>
      <h2 className="brand">Brand: {brand}</h2>
      <h2 className="category">Category: {category}</h2>
    </div>
)

}

export default Card
