import React, {useState} from 'react';
import { createContext } from 'react'

export const UseStateContext = createContext({})

const UseStateProvider = ({ children }) => {
    const [newOrder, setNewOrder] = useState('');
    

    
    return  (
        <UseStateContext.Provider value={{ newOrder, setNewOrder }} >
            { children }
        </UseStateContext.Provider>
    )
}



export default UseStateProvider