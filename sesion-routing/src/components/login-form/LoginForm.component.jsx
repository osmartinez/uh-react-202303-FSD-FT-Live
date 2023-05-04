import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { PostContext } from "../../contexts/post.context";

export default function LoginFormComponent(){

    const [mail, setMail] = useState('')
    const [pwd, setPwd] = useState('')
 
    const {login} = useContext(PostContext)

    async function intentarLogin(){
        await login(mail,pwd)
    }

    return (
        <>
            <div>
                <input value={mail} onChange={(e)=> setMail(e.target.value)} type="email" placeholder="email" />
            </div>
            <div>
                <input value={pwd} onChange={(e)=> setPwd(e.target.value)} type="password" placeholder="contraseña" />
            </div>
            <div>
                <button onClick={intentarLogin}>login</button>
            </div>
            <small>Todavía no estás registrado? <Link to="/signup">Regístrate aquí</Link></small>
        </>
    )
}