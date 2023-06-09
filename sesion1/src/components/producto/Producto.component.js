import './Producto.component.css'
export default function ProductoComponent({ producto, titulo, onComprarProducto }) {


    function comprar() {
        onComprarProducto(producto)
    }

    return (
        <li className='producto'>
            <h1>{titulo}</h1>
            <div className='titulo'>
                {producto.codigo} {producto.nombre}
            </div>
            <div >
                <img className='imagen' src={producto.imagen}></img>
            </div>
            <div>
                <small>{producto.precio}€ </small>
            </div>
            <div>
                <small className={producto.stock < 3 ? 'aviso' : ''}>
                    Quedan {producto.stock} unidades
                </small>
            </div>
            <div>
                <button disabled={producto.stock <= 0} onClick={comprar}>comprar</button>
            </div>

        </li>
    )
}