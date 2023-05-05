import axios from "axios";
import { createContext, useEffect, useReducer, useState } from "react";

const BASEURL = 'http://localhost:3000'

export const PostContext = createContext()

export default function PostContextProvider({ children }) {


    // const [posts, setPosts] = useState([])
    // const [usuario, setUsuario] = useState(null)

    const INITIAL_STATE = {
        posts: [],
        usuario: null
    }

    function reducer(state, action){ // action -> {type: 'ACCION', payload?: DATO}
        // 1. hacer una copia de state
        const copia = {...state}

        // 2. decido que acción aplicar
        switch(action.type){
            case 'GET_POSTS':
                // con payload
                copia.posts = action.payload
            break

            case 'ADD_POST':
                // con payload
                copia.posts.push(action.payload)
            break

            case 'DO_LOGIN':
                // con payload
                copia.usuario = action.payload
            break

            default:break
        }

        // 3. devolver la copia
        return copia
    }

    const [state, dispatch] = useReducer(reducer,INITIAL_STATE)


    // esto solo se ejecutará una sola vez
    useEffect(() => {
        async function getPosts() {
            const respuesta = await axios.get(BASEURL+"/posts")
            //setPosts(respuesta.data)
            dispatch({type: 'GET_POSTS', payload: respuesta.data})
        }

        getPosts()
    }, [])

    async function addPost(nuevoPost) {
         // agregar a BD (esto es critico -> puede fallar)
         await axios.post(BASEURL+"/posts", nuevoPost)

        // agrego al estado (esto es imposible que falle)
        //setPosts([...posts, nuevoPost])
        dispatch({type: 'ADD_POST', payload: nuevoPost})
    }

    async function login(mail, pwd){
       const respuesta =  await axios.post(BASEURL+"/login", {email: mail, password: pwd})
    //    setUsuario(respuesta.data.user)
        dispatch({type: 'DO_LOGIN', payload: respuesta.data.user})
    }

    return (
        // <PostContext.Provider value={{ posts,usuario, addPost,login }}>
        <PostContext.Provider value={{ posts: state.posts,usuario: state.usuario, addPost,login }}>
            {children}
        </PostContext.Provider>
    )
}