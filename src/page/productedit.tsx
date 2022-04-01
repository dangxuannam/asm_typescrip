import React, { useEffect } from 'react'
import {SubmitHandler, useForm} from 'react-hook-form'
import {useParams, useNavigate} from 'react-router-dom'
import { read } from '../api/product'
import { ProductType } from '../types/product'

type ProductEditProps = {
    onUpdate:(product: ProductType) => void
}
type Inputs = {
    name:string,
    img:string,
    price: number
}


const ProductEdit = (props: ProductEditProps ) => {
    const { register, handleSubmit, formState: {errors}, reset} = useForm<FormInputs>()
    const {id} = useParams()
    const Navigate = useNavigate();

    useEffect(() => {
        const getProducts = async() => {
            const {data} = await read(id)
            reset(data)
        }
        getProducts();
    },[])
    const onSubmit: SubmitHandler<FormInputs> = data => {
        props.onUpdate(data)
        Navigate("/admin/products")

    }
  return (
    <div>
        <form action="" onSubmit = {handleSubmit(onSubmit)}>
        <h2>UPDATE SẢN PHẨM</h2>
       
        <label htmlFor="">Name</label>
        <input type="text" {...register('name')}  className='form-control' placeholder='Tên sản phẩm'/>
        <label htmlFor="">img</label>
        <input type="text" {...register('img')}  className='form-control'placeholder='Ảnh sản phẩm'/>
        <label htmlFor="">Price</label>
        <input type="number" {...register('price')}  className='form-control' placeholder='Giá sản phẩm'/>
        <button className='button'>Thêm mới</button>
      </form>
    </div>
  )
}
export default ProductEdit