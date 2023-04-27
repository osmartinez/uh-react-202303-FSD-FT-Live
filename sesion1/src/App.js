
import { render } from '@testing-library/react';
import './App.css';
import ProductoComponent from './components/producto/Producto.component';
import HeaderComponent from './components/header/Header.component';
import FooterComponent from './components/footer/Footer.component';
import ListaProductosComponent from './components/lista-productos/ListaProductos.component';
import { useState } from 'react';

function App() {


  //state
  // const [leer, escribir] = useState(valorInicial)
  const [numClicks, setNumClicks] = useState(0)
  const [nombre, setNombre] = useState("________")
  const [persona, setPersona] = useState({nombre: "______", edad: 30})
  const [numeros, setNumeros] = useState([1,2,3,4])
  
  const cafeteras = [{
    codigo: '000001',
    nombre: 'cafetera',
    precio: 100,
    stock: 4,
    imagen: 'https://foodiealfer.com/1473-large_default/cafetera-espresso-con-molinillo-ariete.jpg'
  }, {
    codigo: '000002',
    nombre: 'cafetera2',
    precio: 120,
    stock: 1,
    imagen: 'https://foodiealfer.com/1473-large_default/cafetera-espresso-con-molinillo-ariete.jpg'
  }
  ]

  function sumar() {

    //numClicks = numClicks + 1
    setNumClicks(numClicks + 1)
    console.log(numClicks)
  }


  function funcionComprar(){
    console.log('producto comprado a las',new Date().toLocaleTimeString())
  }


  function cambiarNombre(){
    setPersona({...persona, nombre: "oscar"})
  }

  function quitar2(){
    const arrayNuevo = []
    for(const numero of numeros){
      if(numero !== 2){
        arrayNuevo.push(numero)
      }
    }

    setNumeros(arrayNuevo)
  }

  return (
    <div className="App">

      {/* <app-producto></app-producto> */}

      <HeaderComponent></HeaderComponent>

      <h1>{numeros}</h1>
      <button onClick={quitar2}>quitar el 2</button>
      <h2>{persona.nombre} {persona.edad}</h2>
      <button onClick={cambiarNombre}>cambiar nombre</button>

      <h2>{numClicks}</h2>
      <button onClick={sumar}>+{numClicks}</button>
      <button onClick={() => setNumClicks(numClicks - 1)}>- {numClicks}</button>

      <ListaProductosComponent funcionComprar={funcionComprar} listado={cafeteras}></ListaProductosComponent>

      <FooterComponent></FooterComponent>

    </div>
  );

}


export default App;
