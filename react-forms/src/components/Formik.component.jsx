import { useFormik } from 'formik';
import React from 'react';


const validate = values => {
    const errors = {
        password: []
    }

    if(!values.email){
        errors.email = 'Email obligatorio!!!'
    }

    if(values.name.length > 20){
        errors.name = 'No puedes tener un nombre tan largo!'
    }

    if(!values.password){
        errors.password.push('Password obligatorio!!!')
    }

    if(values.password.length < 8){
        errors.password.push('La password tiene que tener al menos 8 caracteres')
    }

    if(!values.password.includes("@")){
        errors.password.push('La password tiene que contener "@"')
    }

    return errors
}

export default function FormikComponent() {

    const formik = useFormik({
        initialValues: {
            email: '',
            name: 'oscar',
            password: ''
        },
        validate,
        onSubmit: values => {

            fetch("http://localhost:3000/signup",
                {
                    body: JSON.stringify(values, null, 2),
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })


        },
    });

    return (
        <form className='formulario' onSubmit={formik.handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
                onBlur={formik.handleBlur}
            />
            {formik.errors.name? <div className='error-form'>{formik.errors.name}</div>:null}
            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
            />
              {formik.touched.email && formik.errors.email? <div className='error-form'>{formik.errors.email}</div>:null}
            <label htmlFor="password">Password</label>
            <input
                id="password"
                name="password"
                type="password"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.password}
            />
             {formik.touched.password && formik.errors.password.length? formik.errors.password.map(e=><div className='error-form'>{e}</div>): null }

            <button type="submit">Submit</button>
        </form>
    )
}