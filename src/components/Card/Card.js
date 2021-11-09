import React from "react";

const Card=({item})=>{


return(
    <div className="card">
      <img src={item?.image} className="image" alt={item.product_name}></img>
      <h1 className="product_name">{item.product_name}</h1>
      <h2 className="price">Price: ${item.price}</h2>
      <h2 className="brand">Brand: {item.brand}</h2>
      <h2 className="category">Category: {item.category}</h2>
    </div>
)

}

export default Card
