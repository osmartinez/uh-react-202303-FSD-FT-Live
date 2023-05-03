import { useClimaContext } from "../contexts/clima.context"
import { useUserContext } from "../contexts/user.context"

export default function SaludarUsuarioComponent(){
     
    const username = useUserContext()

    return(
        <h1>
            Hola {username}
        </h1>
    )
}