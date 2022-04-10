import React from 'react'
import {SubmitHandler, useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { signin } from '../api/auth'

type FormInputs = {
email: string,
password: number | string
}

const Signin = (props: FormInputs) => {
    const {register, handleSubmit, formState: {errors}} = useForm<FormInputs>()
    const navigate = useNavigate()
    const onSubmit: SubmitHandler<FormInputs> = async (user) => {
    const {data} = await signin(user)
    if(data) {
        toast.success("ban da dang nhap thanh cong,cho 3s")
        setTimeout(() => {
            navigate('/')
            localStorage.setItem("user",JSON.stringify(data))
        },3000)
    }
    }
    
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control"  {...register('email')} />
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control"  {...register('password')} />
            </div>
            <button className="btn btn-primary">Đăng nhập</button>
        </form>
        <ToastContainer />
    </div>
  )
}

export default Signin