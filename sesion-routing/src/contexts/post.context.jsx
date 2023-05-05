import axios from "axios";
import { createContext, useEffect, useReducer, useState } from "react";

const BASEURL = 'http://localhost:3000'

export const PostContext = createContext()

export default function PostContextProvider({ children }) {


    // const [posts, setPosts] = useState([])
    // const [usuario, setUsuario] = useState(null)

    const INITIAL_STATE = {
        posts: [],
        usuario: null,
        postIndividual: null
    }

    function reducer(state, action) { // action -> {type: 'ACCION', payload?: DATO}
        // 1. hacer una copia de state
        const copia = { ...state }

        // 2. decido que acción aplicar
        switch (action.type) {
            case 'GET_POSTS':
                // con payload
                copia.posts = action.payload
                break

            case 'GET_SINGLE_POST':
                // con payload
                copia.postIndividual = action.payload
            break

            case 'ADD_POST':
                // con payload
                copia.posts.push(action.payload)
                break

            case 'DO_LOGIN':
                // con payload
                copia.usuario = action.payload
                break

            case 'DO_LOGOUT':
                copia.usuario = null
                break

            case 'CHANGE_NAME':
                copia.usuario.name = action.payload
                break

            default: break
        }

        // 3. devolver la copia
        return copia
    }

    const [state, dispatch] = useReducer(reducer, INITIAL_STATE)


    // esto solo se ejecutará una sola vez
    useEffect(() => {
        async function getPosts() {
            const respuesta = await axios.get(BASEURL + "/posts")
            //setPosts(respuesta.data)
            dispatch({ type: 'GET_POSTS', payload: respuesta.data })
        }

        getPosts()
    }, [])

    // esto solo se ejecutará una sola vez
    useEffect(()=>{
        try {
            const usuarioGuardado = JSON.parse(localStorage.getItem('_user'))
            dispatch({type: 'DO_LOGIN', payload: usuarioGuardado})
        } catch (error) {
            
        }
    },[])

    async function addPost(nuevoPost) {
        // agregar a BD (esto es critico -> puede fallar)
        await axios.post(BASEURL + "/posts", nuevoPost)

        // agrego al estado (esto es imposible que falle)
        //setPosts([...posts, nuevoPost])
        dispatch({ type: 'ADD_POST', payload: nuevoPost })
    }

    async function login(mail, pwd) {
        const respuesta = await axios.post(BASEURL + "/login", { email: mail, password: pwd })
        //    setUsuario(respuesta.data.user)
        dispatch({ type: 'DO_LOGIN', payload: respuesta.data.user })

        localStorage.setItem('_user', JSON.stringify(respuesta.data.user))
    }

    async function registrar(mail, pwd, nombre) {
        await axios.post(BASEURL + "/signup", { email: mail, password: pwd, name: nombre })
    }

    async function cambiarNombre(nuevoNombre) {
        await axios.patch(BASEURL + `/users/${state.usuario.id}`, { name: nuevoNombre })

        dispatch({ type: 'CHANGE_NAME', payload: nuevoNombre })
    }

    function cerrarSesion() {
        dispatch({ type: 'DO_LOGOUT' })

        localStorage.removeItem('_user')
    }

    async function getPostIndividual(id){
        // 1 traer de backend
        const respuesta = await axios.get(BASEURL+ `/posts/${id}`)

        // 2 dispatch
        dispatch({type: 'GET_SINGLE_POST', payload: respuesta.data})
    }


    return (
        // <PostContext.Provider value={{ posts,usuario, addPost,login }}>
        <PostContext.Provider value={{ posts: state.posts, usuario: state.usuario, postIndividual: state.postIndividual, addPost, login, registrar, cambiarNombre, cerrarSesion,getPostIndividual }}>
            {children}
        </PostContext.Provider>
    )
}