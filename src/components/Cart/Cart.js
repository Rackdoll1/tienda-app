import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../services/CartContext";
import { UserContext } from "../../services/userContext";
import { Link } from "react-router-dom";

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
          <h2 className="empty-cart">Your cart is empty :(</h2>

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
           <div className="cart-login">
             <h2>To add products to your cart, please login</h2>
             <Link to="/signup"><button className="submit">I'm new</button></Link>
             <Link to="/login"><button className="submit-new">I have an account</button></Link>
           </div>
         : null }

      </>
    )

}

export default Cart
