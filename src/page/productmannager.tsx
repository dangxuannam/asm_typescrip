import React from 'react'

type Props = {}

const ProductManager = (props: Props) => {
  return (
    <table className="table table-bordered">
    <h2>DANH SÁCH SẢN PHẨM</h2>
    <tr>
      <th>STT</th>
      <th>Tên Sản Phẩm</th>
      <th>img</th>
      <th>Giá Sản Phẩm</th>
      <th>Acticon</th>
    </tr>
    <tr>
      <td> </td>
      <td> </td>
      <td> </td>
      <td> </td>
      <td> <button className="btn btn-primary" data-id=""> xoa </button>
        <a href="">sua</a>
      </td>
    </tr>
  </table>
  )
}
export default ProductManager