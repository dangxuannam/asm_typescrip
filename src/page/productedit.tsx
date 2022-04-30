import React, { useEffect } from 'react'
import {SubmitHandler, useForm} from 'react-hook-form'
import {useParams, useNavigate} from 'react-router-dom'
import { read } from '../api/product'
import { ProductType } from '../types/product'

type ProductEditProps = {
    onUpdate:(product: ProductType) => void
}
type FormInputs = {
    name:string,
    img:string,
    price: number
}


const ProductEdit = (props: ProductEditProps ) => {
    const { register, handleSubmit, formState: {errors}, reset} = useForm<FormInputs>()
    const {id} = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        const getProducts = async() => {
            const {data} = await read(id)
            reset(data)
        }
        getProducts();
    },[id])
    const onSubmit: SubmitHandler<FormInputs> = data => {
        props.onUpdate(data)
        navigate("/admin/products")

    }
  return (
    <div>
        <form action="" onSubmit = {handleSubmit(onSubmit)}>
        <h2>UPDATE SẢN PHẨM</h2>
       
        <label htmlFor="">Name</label>
        <input type="text" {...register('name', {required:true})}  className='form-control' placeholder='Tên sản phẩm'/> 
        {errors.name && <span>Bat buoc phai nhap</span>} <br/>
        <label htmlFor="">img</label>
        <input type="text" {...register('img', {required:true})}  className='form-control'placeholder='Ảnh sản phẩm'/>
        {errors.img && <span> bat buoc nhap truong nay</span>} <br/>
        <label htmlFor="">Price</label>
        <input type="number" {...register('price', {required:true})} className='form-control' placeholder='Giá sản phẩm'/>
        {errors.price && <span> bat buoc nhap truong nay</span>} <br/>
        <button className='button'>Thêm mới</button>
      </form>
    </div>
  )
}
export default ProductEdit