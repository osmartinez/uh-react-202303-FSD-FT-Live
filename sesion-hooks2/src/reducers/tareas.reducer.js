

export const ESTADO_INICIAL = {
    tareas: [
        {
            id: 1,
            titulo: 'PASEAR AL PERRO',
            hecha: false,
        }
    ]
}


export function reducer(state, action){
    const nuevoEstado =  {...state}

    switch(action.type){
        case 'ADD_TASK':
            nuevoEstado.tareas.push(action.payload)
        break

        case 'DELETE_TASK':
            // nuevoEstado.tareas.splice()
            nuevoEstado.tareas = nuevoEstado.tareas.filter(x=> x.id !== action.payload.id)
        break

        case 'EDIT_TASK':
            console.log(action)
            for(const tarea of nuevoEstado.tareas){
                if(tarea.id === action.payload.id){
                    tarea.hecha = true
                    break
                }
            }
        break

        default:
            break
    }

    return nuevoEstado
}