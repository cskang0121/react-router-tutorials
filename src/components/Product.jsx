import React from 'react'

import { NavLink, Outlet } from 'react-router-dom'

export default function Product() {
  return (
    <>
      <div>Product</div>

       {/* Secondary Navigation Bar */}
      <nav>
        <NavLink to='featured-products'>Featured</NavLink>
        <NavLink to='new-products'>New</NavLink>
      </nav>
      
      <Outlet />
    </>
  )
}
