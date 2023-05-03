import { useState } from "react"
import { useTareasContext } from "../contexts/tareas.context"


export default function InputTareaComponent(){

    const [titulo, setTitulo] = useState('')

    const {state,dispatch} = useTareasContext()

    function insertar(){
        dispatch({type: 'ADD_TASK', payload: {id: state.tareas.length+1, titulo: titulo, hecha:false} })
    }

    return(
        <div>
            <input value={titulo} onChange={(e)=> setTitulo(e.target.value)}></input>
            <button onClick={insertar}>añadir</button>
        </div>
    )
}