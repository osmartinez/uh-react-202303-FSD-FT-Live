import ProductoComponent from "../producto/Producto.component"

export default function ListaProductosComponent ({listado,onComprar}){
    

    
    return(
        <div>
            <ul>
              {listado.map(x=> <ProductoComponent onComprarProducto={onComprar} producto={x}></ProductoComponent>  )}
            </ul>
        </div>
    )
}