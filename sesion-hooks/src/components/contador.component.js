import { useContadorContext } from "../contexts/contador.context"

export default function ContadorComponent({restar,sumar}) {

    const {contador, sumarContador, restarContador} = useContadorContext()
    return (
        <>
            <h1>Contador: {contador}</h1>
            <button onClick={sumarContador}>+</button>
            <button onClick={restarContador}>-</button>
        </>
    )
}