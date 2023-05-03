import { createContext, useContext } from "react";


const ClimaContext = createContext()

export function useClimaContext(){
    return useContext(ClimaContext)
}

export default ClimaContext