'use client' 

import { createContext, useContext, Dispatch, SetStateAction, useState, } from "react"  

interface ContextProps {
    name: string; 
    setName: Dispatch<SetStateAction<string>>;
    product: string, 
    setProduct: Dispatch<SetStateAction<string>>;
    type: boolean 
    setType: Dispatch<SetStateAction<boolean>>;
}

const GlobalContext = createContext<ContextProps>({
    name: " ",
    product: " ", 
    type: false, 
    setName: () => {},
    setProduct: () => {},
    setType: () => {}
})


export const GlobalContextProvider = ({children}) => { 
    const [name, setName] = useState('') 
    const [product, setProduct] = useState('')
    const [type, setType] = useState(false)


    return(
        <GlobalContext.Provider value={{name, setName, product, setProduct, type, setType}} >
            {children}

        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);
