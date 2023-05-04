import axios from "axios";
import { createContext, useEffect, useState } from "react";

const BASEURL = 'http://localhost:3000'

export const PostContext = createContext()

export default function PostContextProvider({ children }) {


    const [posts, setPosts] = useState([])
    const [usuario, setUsuario] = useState(null)


    // esto solo se ejecutará una sola vez
    useEffect(() => {
        async function getPosts() {
            const respuesta = await axios.get(BASEURL+"/posts")
            setPosts(respuesta.data)
        }

        getPosts()
    }, [])

    async function addPost(nuevoPost) {
         // agregar a BD (esto es critico -> puede fallar)
         await axios.post(BASEURL+"/posts", nuevoPost)

        // agrego al estado (esto es imposible que falle)
        setPosts([...posts, nuevoPost])
    }

    async function login(mail, pwd){
       const respuesta =  await axios.post(BASEURL+"/login", {email: mail, password: pwd})
       setUsuario(respuesta.data.user)
    }

    return (
        <PostContext.Provider value={{ posts,usuario, addPost,login }}>
            {children}
        </PostContext.Provider>
    )
}