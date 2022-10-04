import React from 'react'

import { useNavigate } from 'react-router-dom'

export default function OrderFailed() {
  const navigate = useNavigate()

  return (
    <>
      <div>Please try again later!</div>
      <button onClick={() => navigate(-1)}>Go back</button>
    </>
  )
}
