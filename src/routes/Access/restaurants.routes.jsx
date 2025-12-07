import { Routes, Route } from 'react-router-dom'

import { Restaurants } from '../../pages/Restaurants'
import { DefaultLayout } from '../../layouts/default'
import { useEffect } from 'react'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'

export function RestaurantsRoutes() {
  const { signOut } = useAuth()

  useEffect(() => {
    api.get('/users/validated')
      .catch((error) => {
        console.log(error)
        if (error.response?.status === 401)
          signOut()
      })
  }, [])
  
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/restaurants" element={<Restaurants />} />
      </Route>
    </Routes>
  )
}