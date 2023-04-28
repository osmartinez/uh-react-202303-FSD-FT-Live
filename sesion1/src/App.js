
import { render } from '@testing-library/react';
import './App.css';
import ProductoComponent from './components/producto/Producto.component';
import HeaderComponent from './components/header/Header.component';
import FooterComponent from './components/footer/Footer.component';
import ListaProductosComponent from './components/lista-productos/ListaProductos.component';
import { useState } from 'react';
import { ProductoFormComponent } from './components/producto-form/ProductoForm.component';

function App() {



  const [productos, setProductos] = useState([{
    codigo: "00001",
    nombre: "cafetera",
    precio: 100,
    stock: 5,
  }])

  function addProducto(producto) {
    console.log("soy app.js y este es el paquete que recibo:", producto)
    // productos.push(producto)
    setProductos([...productos, producto])
  }


  function comprar(producto) {
    //console.log('producto comprado',producto,'a las', new Date().toLocaleTimeString())

    // hacer PATCH al servidor para restar el stock también en BD

    setProductos(productos.map(p => {
      if (p.codigo === producto.codigo) {
        p.stock--
        return p
      }
      else {
        return p
      }
    }))

  }



  return (
    <div className="App">

      {/* <app-producto></app-producto> */}

      <HeaderComponent></HeaderComponent>

      <ProductoFormComponent onAddProducto={addProducto}></ProductoFormComponent>

      <ListaProductosComponent onComprar={comprar} listado={productos}></ListaProductosComponent>
      <FooterComponent></FooterComponent>

    </div>
  );

}


export default App;
