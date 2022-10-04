import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

export default function UserLayout() {
  const [searchParams, setSearchParams] = useSearchParams()

  const showActiveUsers = searchParams.get('filter') === 'active' 
  return (
    <>
      <div>UserLayout</div>
      <button onClick={() => {setSearchParams({filter: 'active'})}}>Active Users</button>
      <button onClick={() => {setSearchParams({})}}>Reset Filter</button>
      {
        showActiveUsers ? <h2>Active Users</h2> : <h2>All Users</h2>
      }
      <Outlet />
    </>
  )
}
