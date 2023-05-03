import { createContext, useContext } from "react";

const TareasContext = createContext()

export function useTareasContext(){
    return useContext(TareasContext)
}

export default TareasContext