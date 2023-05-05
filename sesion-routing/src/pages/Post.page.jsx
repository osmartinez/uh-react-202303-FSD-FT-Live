import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { PostContext } from "../contexts/post.context"
import PostComponent from "../components/post/Post.component"

export default function PostPage(){

    const {getPostIndividual,postIndividual,usuario} = useContext(PostContext)
    const {id} = useParams()

    useEffect(()=>{
        getPostIndividual(id)
    },[])

    return(

        <>
            <h1>Página Post Individual</h1>
            <main>
                Body de la pagina post individual
                <h2>El param es: {id}</h2>

                {postIndividual?
                 <PostComponent post={postIndividual}></PostComponent>:
                'NO HAY UN POST'}

                {usuario? <button style={{backgroundColor: 'red'}}>eliminar</button>:''}
            </main>
        </>
    )
}