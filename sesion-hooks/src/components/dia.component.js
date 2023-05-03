import { useClimaContext } from "../contexts/clima.context"
import { useUserContext } from "../contexts/user.context"

export default function DiaComponent(){
    const {clima} = useClimaContext()
    const username = useUserContext()
    return(
        <h2>Buenos días {username}, hoy es {clima.diaSemana} y hay {clima.temperatura} ºC</h2>
    )
}