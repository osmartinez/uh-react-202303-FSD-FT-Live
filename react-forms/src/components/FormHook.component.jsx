import { useForm } from 'react-hook-form'
export default function FormHookComponent(){
    const { register, handleSubmit,formState: { errors } } = useForm()

    function onSubmit(datosFormulario) {
      console.log(datosFormulario)
      fetch("http://localhost:3000/signup",
        {
          body: JSON.stringify(datosFormulario),
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        })
    }

    return (
        <>
          <form onSubmit={handleSubmit(onSubmit)} className='formulario'>
            <input type="text" {...register("name")} placeholder='name' />
            <input type="email" {...register("email", { required: true,pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })} placeholder='email' />
            {errors.email && errors.email.type ==="required" && <span style={{fontSize: '0.8em', color: 'red'}}>Este campo es obligatorio</span>}
            {errors.email && errors.email.type ==="pattern" && <span style={{fontSize: '0.8em', color: 'red'}}>Este no es un mail válido</span>}
            <input type="password" {...register("password", { required: true })} placeholder='password' />
            <button>registrarse</button>
          </form>
        </>
      )
}