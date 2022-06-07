import { useEffect, useState } from 'react'
import './App.css'
import { add, list, remove, update } from './api/product'
import { NavLink, Route, Routes } from 'react-router-dom'
import React from 'react';

import Websitepage from './page/layout/websitepage'
import AdminPage from './page/layout/adminpage'
import { ProductType } from './types/product'
import ProductManager from './page/productmannager'
import ProductAdd from './page/productadd'
import ProductEdit from './page/productedit'
import ProductPage from './components/ProductPage'


import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.min.css"

import Banner from './components/banner'

function App() {
const [products, setProducts] = useState <ProductType[]>([])




useEffect(() => {
  const getProducts = async () => {
  const { data } = await list() 
    setProducts(data)
  
  }
  getProducts();
},[]);

const onHandleUpdate = async(product:ProductType) => {
try {
  const {data} =await update(product)
  setProducts(products.map(item => item._id === data._id ? product: item))
} catch (error) {
  
}
} 

const onHandleAdd = async (product: ProductType) => { 
  const{data} = await add(product)
  setProducts([...products, data])
}

const onHandleRemove = async (id: any) => {
  remove(id);
  // rerender
  setProducts(products.filter(item => item._id !== id));
}

return (
  <div className='App'>
 {/* {products.map((item, index) => <div key={index}>{item.name}  </div>)} */}
 
<Routes>
   <Route path='/' element={<Websitepage/>}>  
   <Route path='/banner' element={<Banner/>}/>
    <Route path='/'>
      <Route index element={<ProductPage products={products}/>}/>
      

    </Route>
   </Route>

<Route path='admin'element={<AdminPage/>}>
 <Route path='products'>
   
   <Route index element={<ProductManager products={products} onRemovee={onHandleRemove} />}/>
   <Route path='add' element={< ProductAdd onAdd ={onHandleAdd} />} />
   <Route path=':id/edit' element={<ProductEdit onUpdate={onHandleUpdate}/>}/>
 </Route>
</Route>


</Routes>
<ToastContainer/>
  </div>
  
)
}

export default App
