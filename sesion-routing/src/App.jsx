import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavigationBarComponent from './components/navigation-bar/NavigationBar.component'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home.page'
import LoginPage from './pages/Login.page'
import PostsPage from './pages/Posts.page'
import PostNuevoPage from './pages/PostNuevo.page'
import PrivadoPage from './pages/Privado.page'
import SignupPage from './pages/Signup.page'
import AreaPrivadaPage from './pages/AreaPrivada.page'
import CerrarSesionPage from './pages/CerrarSesion.page'
import { PostContext } from './contexts/post.context'
import PostPage from './pages/Post.page'

function App() {
  
  const {usuario} = useContext(PostContext)

  return (
    <>
      <NavigationBarComponent></NavigationBarComponent>
      <Routes>
        <Route path='/posts/nuevo' element={usuario?<PostNuevoPage></PostNuevoPage>:<Navigate to="/"></Navigate>} ></Route>
        <Route path='/posts' element={<PostsPage></PostsPage>} ></Route>
        <Route path='/login' element={usuario?<Navigate to="/area-privada" replace></Navigate>:<LoginPage></LoginPage>} ></Route>
        <Route path='/' element={<HomePage></HomePage>} ></Route>
        <Route path='/privado' element={<PrivadoPage></PrivadoPage>} ></Route>
        <Route path='/signup' element={<SignupPage></SignupPage>} ></Route>
        <Route path='/area-privada' element={usuario?<AreaPrivadaPage></AreaPrivadaPage>:<Navigate to="/login" replace></Navigate>} ></Route>
        <Route path='/logout' element={<CerrarSesionPage></CerrarSesionPage>} ></Route>
        <Route path='/post/:id' element={<PostPage></PostPage>} ></Route>
      </Routes>
      <footer>
        Esto es el footer
      </footer>
    </>
  )
}

export default App
