import React from 'react'
import {useForm, SubmitHandler} from "react-hook-form"
import {useNavigate} from "react-router-dom"

type Inputs = {
name:string,
img: string,
price: number
}
type ProductAddProps = {
  onAdd: (product: Inputs) => void
}

const ProductAdd = (props: ProductAddProps) => {
  const{register, handleSubmit, formState: {errors}} = useForm<Inputs>()
  const navigate = useNavigate()
  const onSubmit: SubmitHandler<Inputs> = (dataInput) => {
    props.onAdd(dataInput)
    navigate("/admin/products")
  }
  return (
    <div>
      
      <form action="" onSubmit = {handleSubmit(onSubmit)}>
        <h2>THÊM MỚI SẢN PHẨM</h2>
        <label htmlFor="">Name</label>
        <input type="text" {...register('name', {required:true})}  className='form-control' placeholder='Tên sản phẩm'/>
        {errors.name && <span>Bat buoc phai nhap truong nay</span>} <br/>
        <label htmlFor="">img</label>
        <input type="text" {...register('img', {required:true})}  className='form-control'placeholder='Ảnh sản phẩm'/>
        {errors.img && <span>bat buoc phai nhap truong nay</span>} <br/>
        <label htmlFor="">Price</label>
        <input type="number" {...register('price',{required:true})}  className='form-control' placeholder='Giá sản phẩm'/>
         {errors.price && <span>bat buoc phai nhap truong nay</span>} <br/>
        <button className='button'>Thêm mới</button>
      </form>
    </div>
  )
}
export default ProductAdd