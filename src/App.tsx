import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { list } from './api/product'
import { NavLink, Route, Routes } from 'react-router-dom'


import Websitepage from './page/layout/websitepage'
import AdminPage from './page/layout/adminpage'
import { ProductType } from './types/product'
import ProductManager from './page/productmannager'


function App() {
const [products, setProducts] = useState <ProductType[]>([])

useEffect(() => {
  const getProducts = async () => {
  const { data } = await list() 
    setProducts(data)
  
  }
  getProducts();
})
return (
  <div className='App'>
 {/* {products.map((item, index) => <div key={index}>{item.name}  </div>)} */}
 
<Routes>
   <Route path='/' element={<Websitepage/>}>  
    
   </Route>

<Route path='admin'element={<AdminPage/>}>
 <Route path='products'>
   
   <Route index element={<ProductManager/>}/>
 </Route>
</Route>

</Routes>
  </div>
)
}

export default App
