import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { add, list, remove, update } from './api/product'
import { NavLink, Route, Routes } from 'react-router-dom'


import Websitepage from './page/layout/websitepage'
import AdminPage from './page/layout/adminpage'
import { ProductType } from './types/product'
import ProductManager from './page/productmannager'
import ProductAdd from './page/productadd'
import ProductEdit from './page/productedit'
import ProductPage from './components/ProductPage'


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
  setProducts(products.map(item => item.id === data.id ? product: item))
} catch (error) {
  
}
} 

const onHandleAdd = async (product: any) => {
  const{data} = await add(product)
  setProducts([...products, data])
}

const onHandleRemove = async (id: number) => {
  remove(id)
  setProducts(products.filter(item => item.id !== id))
}
return (
  <div className='App'>
 {/* {products.map((item, index) => <div key={index}>{item.name}  </div>)} */}
 
<Routes>
   <Route path='/' element={<Websitepage/>}>  
    <Route path='/'>
      <Route index element={<ProductPage/>}/>
      

    </Route>
   </Route>

<Route path='admin'element={<AdminPage/>}>
 <Route path='products'>
   
   <Route index element={<ProductManager products={products} onRemove={onHandleRemove} />}/>
   <Route path='add' element={< ProductAdd onAdd={onHandleAdd} />} />
   <Route path=':id/edit' element={<ProductEdit onUpdate={onHandleUpdate}/>}/>
 </Route>
</Route>

</Routes>
  </div>
)
}

export default App
