import React from 'react'
import { Routes, Route } from 'react-router-dom'


import Home from './components/Home'
// import About from './components/About'
import NavBar from './components/NavBar'
import OrderSuccess from './components/OrderSuccess'
import OrderFailed from './components/OrderFailed'
import PageNotFound from './components/PageNotFound'
import Product from './components/Product'
import FeaturedProducts from './components/FeaturedProducts'
import NewProducts from './components/NewProducts'
import UserLayout from './components/UserLayout'
import UserDetails from './components/UserDetails'
import Admin from './components/Admin'

const About = React.lazy(() => import('./components/About'))

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        
        
  
        {/* <Route path='about' element={<About />} /> */}
        <Route path='about' element={
          <React.Suspense fallback='Loading'>
            <LazyAbout />
          </React.Suspense>
        }/>



        <Route path='order-success' element={<OrderSuccess />} />
        <Route path='order-failed' element={<OrderFailed />} />
        <Route path='*' element={<PageNotFound />} />
        <Route path='product' element={<Product />}>
          <Route index element={<FeaturedProducts />}/>
          <Route path='featured-products' element={<FeaturedProducts />} />
          <Route path='new-products' element={<NewProducts />} />
        </Route>
        <Route element={<UserLayout/>}>
          <Route path='/user/:userId' element={<UserDetails />} />
          <Route path='/user/admin' element={<Admin />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
