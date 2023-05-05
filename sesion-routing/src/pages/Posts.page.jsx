import ListaPostsComponent from "../components/lista-posts/ListaPosts.component";

export default function PostsPage(){
    return(

        <>
            <h1>Página de posts</h1>
            <main>
                Body de la pagina posts
                <ListaPostsComponent></ListaPostsComponent>
            </main>
        </>
    )
}