import { createContext, useState } from 'react';

export default ({ children }) => {
    const [productState, setProductState] = useState({})
    return (
        <ProductContext.Provider value={[productState, setProductState]}>
            {children}
        </ProductContext.Provider>
    )

}

export const ProductContext = createContext()
