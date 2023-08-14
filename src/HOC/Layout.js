import React from 'react'
import NavBarLayout from '../Components/NavBar'

const Layout = (props) => {
  return (
    <div>
    <NavBarLayout />
    {props.children}
    </div>
  )
}

export default Layout