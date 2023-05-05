import { useContext, useEffect } from "react"
import { PostContext } from "../contexts/post.context"

export default function CerrarSesionPage(){

    const {cerrarSesion} = useContext(PostContext)

    useEffect(()=>{
        cerrarSesion()
    },[])

    return (

        <h2>Espere mientras cerramos su sesion...</h2>
    )
}