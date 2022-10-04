import React from 'react'

import { useNavigate } from 'react-router-dom'

export default function Home() {
  
  const navigate = useNavigate()

  return (
    <>
      <div>Home</div>
      
      <button onClick={ () => { Math.random() > .5 ? navigate('order-success') : navigate('order-failed') } }>Confirm Order</button>

      <button onClick={ () => navigate(1) }>Go Forward</button>
    </>
  )
}
