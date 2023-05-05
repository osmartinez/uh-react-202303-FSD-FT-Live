import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavigationBarComponent from './components/navigation-bar/NavigationBar.component'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home.page'
import LoginPage from './pages/Login.page'
import PostsPage from './pages/Posts.page'
import PostNuevoPage from './pages/PostNuevo.page'
import PrivadoPage from './pages/Privado.page'
import SignupPage from './pages/Signup.page'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavigationBarComponent></NavigationBarComponent>
      <Routes>
        <Route path='/posts/nuevo' element={<PostNuevoPage></PostNuevoPage>} ></Route>
        <Route path='/posts' element={<PostsPage></PostsPage>} ></Route>
        <Route path='/login' element={<LoginPage></LoginPage>} ></Route>
        <Route path='/' element={<HomePage></HomePage>} ></Route>
        <Route path='/privado' element={<PrivadoPage></PrivadoPage>} ></Route>
        <Route path='/signup' element={<SignupPage></SignupPage>} ></Route>
      </Routes>
      <footer>
        Esto es el footer
      </footer>
    </>
  )
}

export default App
