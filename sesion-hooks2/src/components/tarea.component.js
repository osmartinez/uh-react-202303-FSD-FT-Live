import { useTareasContext } from "../contexts/tareas.context"

export default function TareaComponent({tarea}){

    const {state,dispatch} = useTareasContext()

    return(

        <li>
            <button onClick={()=> dispatch({type: 'EDIT_TASK', payload: tarea})}>hacer</button>{tarea.titulo} - {tarea.hecha?'OK':'SIN HACER'}
        </li>
    )
}