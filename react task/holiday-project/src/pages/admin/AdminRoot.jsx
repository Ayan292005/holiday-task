import React from 'react'

import { Outlet } from "react-router"
import AdminFooter from '../../components/admin/AdminFooter'
import AdminNavbar from '../../components/admin/AdminNavbar'

function AdminRoot() {
  return (
    <div>
      <AdminNavbar/>
      <Outlet/>
      <AdminFooter/>
    </div>
  )
}

export default AdminRoot