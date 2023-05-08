import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormHookComponent from './components/FormHook.component'
import FormikComponent from './components/Formik.component'


function App() {


  return (
    <>

      <h1>Form hook component</h1>
      <FormHookComponent></FormHookComponent>

      <hr />
      <h1>Formik component</h1>
      <FormikComponent></FormikComponent>
    </>

  )

}

export default App
