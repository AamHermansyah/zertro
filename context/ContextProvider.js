import { createContext, useState } from "react";

export const Context = createContext();

export default function ContextProvider({children}){
    const [data, setData] = useState({
        navigationDisplay: true
    })

    const state = {
        data,
        setData
    }

    return (
        <Context.Provider value={state}>
            {children}
        </Context.Provider>
    )
}