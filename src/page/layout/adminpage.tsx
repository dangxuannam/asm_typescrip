import React from 'react'
import { Outlet } from 'react-router-dom'
import Dashboard from '../../components/dashboard'

type Props = {}

const AdminPage = (props: Props) => {
  return (
    <div className='containerr'>
      <Dashboard/>
      <Outlet/>
    </div>
  )
}
export default AdminPage