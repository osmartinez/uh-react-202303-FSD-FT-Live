import React, { useState } from 'react'

export const ProductoFormComponent = ({onAddProducto}) => {

    const [producto, setProducto] = useState({
        codigo: "",
        nombre: "",
        precio: 0,
        stock: 0,
        imagen: "",
    })

    const [x, setX] = useState(0)

    function add(e) {   
        
        console.log('add ejecutada a las ',new Date().toLocaleTimeString(), ' por ', e.target.name)
        
        onAddProducto(producto)

        setProducto({
            codigo: "",
            nombre: "",
            precio: 0,
            stock: 0,
            imagen: "",
        })
    }



    function actualizarProducto(e) {
        // lo que el usuario ha escrito
        const value = e.target.value // ejemplo: 0000002
        // nombre del input, que va a ser la propiedad que quiero cambiar
        const name = e.target.name // ejemplo: "codigo"
        console.log(e.target)
        setProducto({ ...producto, [name]: value })
    }

    return (
        <section>
            <h2>Nuevo producto</h2>
            <div>
                <input value={producto.codigo} name='codigo' onChange={actualizarProducto}></input>
            </div>
            <div>
                <input value={producto.nombre} name='nombre' onChange={actualizarProducto} placeholder='nombre'></input>
            </div>
            <div>
                <input value={producto.precio} name='precio' onChange={actualizarProducto} placeholder='precio' type='number'></input>
            </div>
            <div>
                <input value={producto.stock} name='stock' onChange={actualizarProducto} type='number'  placeholder='stock'></input>
            </div>
            <div>
                <input value={producto.imagen} name='imagen' onChange={actualizarProducto} placeholder='imagen'></input>
            </div>

            <button name='boton1' onClick={add} >añadir1</button>
        </section>
    )
}
