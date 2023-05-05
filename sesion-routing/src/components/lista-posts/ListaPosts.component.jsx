
import { useContext } from "react"
import PostComponent from "../post/Post.component"
import { PostContext } from "../../contexts/post.context"

export default function ListaPostsComponent(){

    const {posts} = useContext(PostContext)

    return(
        <ul>
            {posts.map(p=> 
            <li>
               <PostComponent post={p}></PostComponent>
            </li>
            )}
        </ul>
    )
}