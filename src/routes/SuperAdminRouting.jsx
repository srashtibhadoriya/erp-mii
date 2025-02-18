import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../components/super_admin/Dashboard'

const SuperAdminRouting = () => {
  return (
    <Routes>
        <Route path="/" element={<Dashboard />} />
    </Routes>
  )
}

export default SuperAdminRouting
