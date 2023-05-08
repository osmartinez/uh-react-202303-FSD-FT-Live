import { useState } from "react"

export const useContador = ()=>{
    const [count, setCount] = useState(0)
  
    function sumar(){
      setCount(count+1)
    }
  
    function restar(){
      setCount(count -1)
    }

    function reset(){
      setCount(0)
    }
  
    return {
      count,
      sumar,
      restar,
      reset
    }
  }
  