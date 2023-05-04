import axios from "axios"
import { useContext, useState } from "react"
import { PostContext } from "../../contexts/post.context"
import './PostForm.component.css'

export default function PostFormComponent() {

    const [post, setPost] = useState({ titulo: '', texto: '' })
    const [msgError, setMsgError] = useState('')
    const [msgSuccess, setMsgSuccess] = useState('')
    const [loading, setLoading] = useState(false)

    const { addPost } = useContext(PostContext)

    function modificarCampos(e) {
        setPost({ ...post, [e.target.name]: e.target.value })
    }

    async function crearPost() {
        try {
            setMsgSuccess('')

            setLoading(true)
            await addPost(post)
            setLoading(false)

            // resetear formulario
            setPost({ titulo: '', texto: '' })

            setMsgError('')
            setMsgSuccess('Post creado!')
        } catch (e) {
            setMsgError(e.message)
            setMsgSuccess('')
            setLoading(false)
        }


    }

    return (
        <div>

            <div>
                <input name="titulo" value={post.titulo} onChange={modificarCampos} placeholder="título"></input>
            </div>
            <div>
                <textarea name="texto" value={post.texto} onChange={modificarCampos} placeholder="texto del post"></textarea>
            </div>
            <div>

                {loading ? <div class="indeterminate-progress-bar">
                    <div class="indeterminate-progress-bar__progress"></div>
                </div> : ''}



                <button disabled={loading===true} onClick={crearPost}>
                    crear
                </button>
            </div>
            {msgSuccess ? <div>
                <small style={{ color: 'green' }}>{msgSuccess}</small>
            </div> : ''}
            {msgError ? <div>
                <small style={{ color: 'red' }}>*{msgError}*</small>
            </div> : ''}
        </div>
    )
}