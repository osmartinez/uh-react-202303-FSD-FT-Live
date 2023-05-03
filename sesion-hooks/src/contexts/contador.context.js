import { createContext, useContext } from "react";


const ContadorContext = createContext()

export function useContadorContext(){
    return useContext(ContadorContext)
}

export default ContadorContext