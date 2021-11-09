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
                   if(!card.image){card.image="https://chim-chimneyinc.com/wp-content/uploads/2019/12/GettyImages-1128826884.jpg"}
                    return(
                      // <div key={`${index}${card.product_name}`}>
                      <>
                        <CartCard
                        index={index}
                        id={card.Data[0]}
                        key={card.Data[0]}
                        image={card.Data[1]}
                        product_name={card.Data[2]}
                        price={card.Data[3]}
                        brand={card.Data[4]}
                        category={card.Data[5]}
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