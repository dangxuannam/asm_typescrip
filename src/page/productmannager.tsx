import React from 'react'
import { ProductType } from '../types/product'
import {Link} from 'react-router-dom'
type  ProductManagerProps = {
  products: any[],
  onRemovee: (id: number | string) => void 
}

const ProductManager = (props: ProductManagerProps) => {
  return (
    <div>
    <div className="table">
    <h2 className='h2'>
        DANH SÁCH SẢN PHẨM
      </h2>
      <a className='sp' href="/admin/products/add">Thêm mới sản phẩm</a>
    <table className="table table-bordered">  
    <thead>
    <tr>
      <th>STT</th>
      <th>Tên Sản Phẩm</th>
      <th>img</th>
      <th>Giá Sản Phẩm</th>
      <th>Acticon</th>
    </tr>
    </thead>
  <tbody>
   
    {props.products.map((item,index) => {

   
    return <tr key={index}>
      <td> {index + 1} </td>
      <td>{item.name} </td>
      <td>{item.img}</td>
      <td>{item.price} </td>
      
      <td> <button className="b" onClick={()=> props.onRemovee(item._id)}> xoa</button>
      <Link to ={`/admin/products/${item._id}/edit`}>Sửa</Link>
      </td>
    </tr>
     })}
     </tbody>
  </table>
  </div>
  </div>
  )
}
export default ProductManager