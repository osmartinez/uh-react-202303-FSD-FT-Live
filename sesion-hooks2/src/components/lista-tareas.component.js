import { useTareasContext } from "../contexts/tareas.context"
import TareaComponent from "./tarea.component"

export default function ListaTareasComponent(){

    const {state,dispatch} = useTareasContext()

    return(

        <ul>
            {state.tareas.map(t=> <TareaComponent key={t.id} tarea={t}></TareaComponent>)}
        </ul>
    )
}