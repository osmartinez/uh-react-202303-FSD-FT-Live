import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { PostContext } from "../contexts/post.context"
import PostComponent from "../components/post/Post.component"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

export default function PostPage() {

    const { getPostIndividual, postIndividual, usuario, deletePost } = useContext(PostContext)
    const { id } = useParams()

    useEffect(() => {
        getPostIndividual(id)
    }, [])

    async function intentarEliminar() {

        MySwal.fire({
            title: 'Estás seguro de que quieres eliminar el post?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Si',
            denyButtonText: 'No',
            customClass: {
                actions: 'my-actions',
                cancelButton: 'order-1 right-gap',
                confirmButton: 'order-2',
                denyButton: 'order-3',
            }
        }).then(async (result) => {
            if (result.isConfirmed) {
                await deletePost(id)
                Swal.fire('Eliminadooo!', '', 'success')
            } else if (result.isDenied) {
                Swal.fire('No se ha eliminado el post', '', 'info')
            }
        })
    }

    return (

        <>
            <h1>Página Post Individual</h1>
            <main>
                Body de la pagina post individual
                <h2>El param es: {id}</h2>

                {
                    postIndividual ?

                        <PostComponent post={postIndividual}></PostComponent> :

                        'NO HAY UN POST'
                }

                {
                    usuario ?

                        <button onClick={intentarEliminar} style={{ backgroundColor: 'red' }}>eliminar</button> :

                        ''

                }
            </main>
        </>
    )
}