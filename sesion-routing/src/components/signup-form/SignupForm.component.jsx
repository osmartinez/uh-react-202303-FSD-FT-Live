import { Link } from "react-router-dom";

export default function SignupFormComponent(){

    return (
        <>
        <div>
                <input type="text" placeholder="nombre" />
            </div>
            <div>
                <input type="email" placeholder="email" />
            </div>
            <div>
                <input type="password" placeholder="contraseña" />
            </div>
            <div>
                <button>registrar</button>
            </div>
            <small>Ya estás registrado? <Link to="/login">Loggeate</Link></small>
        </>
    )
}