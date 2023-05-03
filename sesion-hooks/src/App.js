
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import ClimaComponent from './components/clima.component';
import DiaComponent from './components/dia.component';
import ClimaContext from './contexts/clima.context';
import SaludarUsuarioComponent from './components/saludar-usuario.component';
import ContadorComponent from './components/contador.component';
import ContadorContext from './contexts/contador.context';

const CLIMA_INICIAL = { diaSemana: '', temperatura: 0, humedad: 0, estadoCielo: '' }

function App() {

  const [contador, setContador] = useState(0)
 
  const [clima, setClima] = useState(CLIMA_INICIAL)


  function aumentarTemperatura() {
    setClima({ ...clima, temperatura: clima.temperatura + 1 })
  }

  function sumarContador(){
    setContador(contador+1)
  }
  function restarContador(){
    setContador(contador-1)
  }

  function inicio() {
    const url = 'https://meteo-de-oscar.proxy.beeceptor.com/lunes'
    axios.get(url)
      .then(respuesta => setClima(respuesta.data))
  }

  //useEffect(cotillearTodo) // cotillear todo
  //useEffect(cotillearSolo1, [contador1, contador2]) // cotillear individualmente
  // ngOnInit(){...}
  useEffect(inicio, []) // funcion que se ejecuta una vez al cargal el componente

  return (
    <div className="App">
      <ClimaContext.Provider value={{ clima: clima }}>
        <ClimaComponent onAumentarTemperatura={aumentarTemperatura}></ClimaComponent>
        <DiaComponent></DiaComponent>
      </ClimaContext.Provider>
      <SaludarUsuarioComponent></SaludarUsuarioComponent>
      <ContadorContext.Provider value={{contador, sumarContador, restarContador}}>
        <ContadorComponent></ContadorComponent>
        <ContadorComponent></ContadorComponent>
        <ContadorComponent></ContadorComponent>
        <ContadorComponent></ContadorComponent>
        <ContadorComponent></ContadorComponent>
        <ContadorComponent></ContadorComponent>
        <ContadorComponent></ContadorComponent>
      </ContadorContext.Provider>
    </div>
  );
}

export default App;
