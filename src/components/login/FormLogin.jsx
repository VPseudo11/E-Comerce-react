import React from 'react'
import { useForm } from 'react-hook-form'

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
        <form onSubmit={handleSubmit(submit)}>
            <h2>Login</h2>
            <div>
                <label htmlFor="email">Email</label>
                <input {...register('email')} type="email" id='email' />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input {...register('password')} type="password" id='password' />
            </div>
            <button>Log In</button>
        </form>
    )
}

export default FormLogin