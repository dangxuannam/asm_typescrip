import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo'
import { list } from './api/product'
import { NavLink, Route, Routes } from 'react-router-dom'
import HomePage from './page/HomePage'

import Websitepage from './page/websitepage'


function App() {
const [products, setProducts] = useState <{_id: Number, name: String}[]>([])

useEffect(() => {
  const getProducts = async () => {
  const { data } = await list() 
    setProducts(data)
  
  }
  getProducts();
})
return (
  <div className='App'>
 {products.map((item, index) => <div key={index}>{item.name}  </div>)}
 

   <Routes>
     <Route path='/' element={<Websitepage/>}/>

   </Routes>

  </div>
)
}

export default App
