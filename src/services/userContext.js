import { createContext, useState } from 'react';

export default ({ children }) => {
    const [user, setUser] = useState(null);
    return (
        <UserContext.Provider value={[user, setUser]}>
            {children}
        </UserContext.Provider>
    )

}

export const UserContext = createContext()
