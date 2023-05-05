import { useContext } from "react";
import { Link } from "react-router-dom";
import { PostContext } from "../../contexts/post.context";

export default function NavigationBarComponent(){

    const {usuario} = useContext(PostContext)

    return(
        <nav>
            {usuario? <p>Bienvenid@ {usuario.email}</p>: 'No estás loggeado'}
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/posts">Posts</Link></li>
                <li><Link to="/posts/nuevo">Crear post</Link></li>
            </ul>
        </nav>
    )
}