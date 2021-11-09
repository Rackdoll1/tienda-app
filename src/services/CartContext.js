import { createContext, useState } from 'react';

export default ({ children }) => {
    const [cartstate, setCartstate] = useState([])
    return (
        <CartContext.Provider value={[cartstate, setCartstate]}>
            {children}
        </CartContext.Provider>
    )

}

export const CartContext = createContext()
