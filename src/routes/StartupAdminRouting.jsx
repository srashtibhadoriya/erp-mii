import React from 'react'
import { Route, Routes } from 'react-router-dom'

const StartupAdminRouting = () => {
  return (
    <Routes>
        <Route path="/startup" element={<StartupPage />} />
    </Routes>
  )
}

export default StartupAdminRouting
