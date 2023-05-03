import { useClimaContext } from "../contexts/clima.context"

export default function ClimaComponent({onAumentarTemperatura}){
    const {clima} = useClimaContext()
    return(
        <div>
        <h1>Día: {clima.diaSemana}</h1>
        <h2>temperatura: {clima.temperatura} <button onClick={onAumentarTemperatura}>+</button></h2>
        <h2>humedad: {clima.humedad}</h2>
        <h2>estadoCielo: {clima.estadoCielo}</h2>
      </div>
    )
}