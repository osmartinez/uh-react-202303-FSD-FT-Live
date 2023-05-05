import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { PostContext } from "../../contexts/post.context";

export default function LoginFormComponent(){

    const [mail, setMail] = useState('')
    const [pwd, setPwd] = useState('')
    const [msgSuccess, setMsgSuccess] = useState('')
    const [msgError, setMsgError] = useState('')
 
    const {login,usuario} = useContext(PostContext)

    async function intentarLogin(){
        try{
            await login(mail,pwd)
            setMsgSuccess("Loggeado correctamente!")
            setMsgError("")
        }catch(error){
            setMsgSuccess("")
            setMsgError(error.response.data)
        }
        
    }

    // si hay un usuario en el contexto
    if(usuario){
        // el html va a ser este
        return (
            <Navigate to="/area-privada" replace></Navigate>
        )
    }
    // si no hay usuario en el contexto
    else{
        // el html que veré va a ser este
        return (
            <>
                <div>
                    <input value={mail} onChange={(e)=> setMail(e.target.value)} type="email" placeholder="email" />
                </div>
                <div>
                    <input value={pwd} onChange={(e)=> setPwd(e.target.value)} type="password" placeholder="contraseña" />
                </div>
                <div>
                   {msgError? <small style={{color:'red'}}>{msgError}</small>: ''} 
                </div>
                <div>
                   {msgSuccess? <small style={{color:'green'}}>{msgSuccess}</small>: ''} 
                </div>
                <div>
                    <button onClick={intentarLogin}>login</button>
                </div>
                <small>Todavía no estás registrado? <Link to="/signup">Regístrate aquí</Link></small>
            </>
        )
    }

    
}