import { useState } from 'react'
import './App.css'
import { useContador } from './hooks/contador.hook'
import { useFetch } from './hooks/fetch.hook'

function App() {
  const contador1 = useContador()
  const contador2 = useContador()
  const contador3 = useContador()


  function  resetearTodo(){
    contador1.reset()
    contador2.reset()
    contador3.reset()
  }

  const datosLunes = useFetch("https://meteo-de-oscar.proxy.beeceptor.com/lunes")
  const datosMartes= useFetch("https://meteo-de-oscar.proxy.beeceptor.com/martes")
  const datosMiercoles = useFetch("https://meteo-de-oscar.proxy.beeceptor.com/miercoles")

  return (
    <>
      <h1>custom hooks</h1>

      <button onClick={contador1.restar}>-</button>
      <button onClick={contador1.sumar}>+</button>
      <button onClick={contador1.reset}>RST</button>
      <h2>{contador1.count}</h2>

      <hr />

      <button onClick={contador2.restar}>-</button>
      <button onClick={contador2.sumar}>+</button>
      <button onClick={contador2.reset}>RST</button>
      <h2>{contador2.count}</h2>

      <hr />

      <button onClick={contador3.restar}>-</button>
      <button onClick={contador3.sumar}>+</button>
      <button onClick={contador3.reset}>RST</button>
      <h2>{contador3.count}</h2>

      <hr />
      <button onClick={resetearTodo}>RESETEAR TODOS</button>
      <hr />

      <h2>Temperatura lunes: {datosLunes?datosLunes.temperatura: ''}</h2>
      <h2>Temperatura martes: {datosMartes?datosMartes.temperatura: ''}</h2>
      <h2>Temperatura miercoles: {datosMiercoles?datosMiercoles.temperatura: ''}</h2>
    </>
  )
}

export default App
