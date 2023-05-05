import axios from 'axios'
import './Post.component.css'
import { Link } from 'react-router-dom'
export default function PostComponent({post}) {
    return (
        <div className="Post">
            <h2>
                <Link to={`/post/${post.id}`}>
                {post.id}. {post.titulo}
                </Link>
                
            </h2>
            <p>
                {post.texto}
            </p>
        </div>

    )
}