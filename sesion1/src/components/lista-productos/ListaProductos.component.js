import ProductoComponent from "../producto/Producto.component"

export default function ListaProductosComponent ({listado,funcionComprar}){
    

    
    return(
        <div>
            <ul>
              {listado.map(x=> <ProductoComponent funcionComprar={funcionComprar} producto={x}></ProductoComponent>  )}
            </ul>
        </div>
    )
}