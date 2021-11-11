import React, { useContext} from "react";
import { CartContext } from "../../services/CartContext";
import { UserContext } from "../../services/userContext";
import CartCard from "./cartCard";

const Cart=()=>{

    const [cartstate, setCartstate] = useContext(CartContext);
    const [user, setUser] = useContext(UserContext);

    const consola=()=>{
        console.log(cartstate)
    }

    const Minus=()=>{
        setCartstate()
     }


     return(
       <>
        { cartstate.length === 0 ?
          <h2>Su carrito está vacío</h2>

        : <div id="container" className="Cartcontainer">
             {
                 cartstate.map((card, index)=>{
                   if(!card.image){
                     card.image="https://chim-chimneyinc.com/wp-content/uploads/2019/12/GettyImages-1128826884.jpg"
                   }
                    return(
                      // <div key={`${index}${card.product_name}`}>

                        // <CartCard
                        // index={index}
                        // id={card.id}
                        // key={card.key}
                        // image={!card.image ? card.image="https://chim-chimneyinc.com/wp-content/uploads/2019/12/GettyImages-1128826884.jpg"
                        // : card.image}
                        // product_name={card.product_name}
                        // price={card.price}
                        // brand={card.brand}
                        // category={card.category}
                        // />
                          <CartCard item={card} />

                    )
                })
             }
         </div>}
         { !user ?
           <div className="empty-cart">
             <h2>Para agregar productos al carrito, cree una cuenta o inicie sesión :3</h2>
           </div>
         : null}
      </>
    )

}

export default Cart
