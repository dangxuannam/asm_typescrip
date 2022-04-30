import React from 'react'
import {SubmitHandler, useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { signup } from '../api/auth'
type FormInputs = {
name: string,
email: string,
password: number | string
}

const Signup = (props: FormInputs) => {
    const{register, handleSubmit, formState: {errors}} = useForm<FormInputs>();
    const navigate = useNavigate()
    const onsubmit: SubmitHandler<FormInputs> = async (user) => {
        const {data} = await signup(user);
        if(data) {
toast.success("ban da dang ki thanh cong,cho 3s")
setTimeout(() => {
    navigate('/signin')
},3000)
        }
    }
  return (
    <div>
<form onSubmit={handleSubmit(onsubmit)}>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" {...register('name')} />
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control"  {...register('email')} />
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control"  {...register('password')} />
            </div>
            <button className="btn btn-primary">Đăng ký</button>
        </form>
        <ToastContainer />
    </div>
  )
}

export default Signup