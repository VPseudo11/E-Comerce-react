import React from 'react'
import { useForm } from 'react-hook-form'
import "./FormLogin.css"

const FormLogin = () => {

    const { register, handleSubmit, reset } = useForm()

    const submit = data=>{
        console.log(data);
        reset({
            email: '',
            password: ''
        })
    }

    return (
        <form className='go' onSubmit={handleSubmit(submit)}>
            <h2>Login</h2>
            <div className='email1'>
                <label htmlFor="email">Email  </label>
                <input {...register('email')} type="email" id='email' />
            </div>
            <div className='pass2'>
                <label htmlFor="password">Password </label>
                <input {...register('password')} type="password" id='password' />
            </div>
            <button className='pol'>Log In</button>
        </form>
    )
}

export default FormLogin