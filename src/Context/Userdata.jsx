'use client';
import userdatra from "/public/data.json"
import { createContext, useState } from "react";
export const UserdataContext = createContext(null);

export default function UserProvider({ children }){

    const [QuickCheck,setQuickCheck]=useState([])

    const value={
        data:userdatra,
        QuickCheck,
        setQuickCheck,
    }

return(
    <UserdataContext.Provider value={value}>
        {children}
    </UserdataContext.Provider>
)
}