import React, { useContext,useState } from "react";
import {CartContext} from "../../services/CartContext";
import CartCard from "./cartCard";
const Cart=()=>{

    const [cartstate, setCartstate] = useContext(CartContext);

    const consola=()=>{
        console.log(cartstate)
    }

    const Minus=()=>{
        setCartstate()
     }


return(
    <>
         <div id="container" className="Cartcontainer">
             {
                 cartstate.map((card, index)=>{
                    return(
                      // <div key={`${index}${card.product_name}`}>
                      <>
                        <CartCard
                        index={index}
                        id={card.id}
                        key={card.key}
                        image={!card.image ? card.image="https://chim-chimneyinc.com/wp-content/uploads/2019/12/GettyImages-1128826884.jpg"
                        : card.image}
                        product_name={card.product_name}
                        price={card.price}
                        brand={card.brand}
                        category={card.category}
                        />
                        </>

                     // </div>
                    )
                })
             }
         </div>
       </>
)

}

export default Cart
