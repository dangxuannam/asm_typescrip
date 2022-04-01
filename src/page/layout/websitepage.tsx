import React from 'react'
import { Outlet } from 'react-router-dom'
import Banner from '../../components/banner'
import dashboard from '../../components/dashboard'
import Header from '../../components/header'
import ProductPage from '../../components/ProductPage'
type Props = {}

const Websitepage = (props: Props) => {
  return (
    <div className='containerr'>
       <Header/>
       <Banner/>
       <Outlet/>
      
    </div>
  )
}
export default Websitepage