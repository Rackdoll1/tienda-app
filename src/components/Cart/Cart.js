import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../services/CartContext";
import { UserContext } from "../../services/userContext";
import CartCard from "./cartCard";
import {cartCalculator} from "./cartCalculator";

const Cart=()=>{

    const [cartstate, setCartstate] = useContext(CartContext);
    const [user, setUser] = useContext(UserContext);
    const [click, setClick] = useState(Boolean);

    const clickRefresh = () => {
      setClick(true);
    }

     useEffect(() => {
       setClick(false);
     },[click])


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

                          <CartCard item={card} clickRefresh={clickRefresh} key={`${card.product_name}${index}`}/>

                    )
                })
             }
             {cartstate.length !== 0 ?
           <div className="total"><h1>Total: ${cartCalculator(cartstate)}</h1> </div>
         :null}
         </div>}
         { !user ?
           <div className="empty-cart">
             <h2>Para agregar productos al carrito, cree una cuenta o inicie sesión :3</h2>
           </div>
         : null }

      </>
    )

}

export default Cart
