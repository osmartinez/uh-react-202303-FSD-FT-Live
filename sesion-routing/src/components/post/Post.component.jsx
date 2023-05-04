import axios from 'axios'
import './Post.component.css'
export default function PostComponent({post}) {
    return (
        <div className="Post">
            <h2>
                {post.id}. {post.titulo}
            </h2>
            <p>
                {post.texto}
            </p>
        </div>

    )
}