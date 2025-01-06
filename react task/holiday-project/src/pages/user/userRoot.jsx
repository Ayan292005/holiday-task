import React from 'react'
import UserFooter from '../../components/user/UserFooter'
import UserNavbar from '../../components/user/UserNavbar'
import { Outlet } from "react-router"
function UserRoot() {
  return (
    <>
     <UserNavbar/>
     <Outlet/>
     <UserFooter/> 
    </>
  )
}

export default UserRoot
