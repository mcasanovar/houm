import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// Global
import { Global } from './styles'
// Views
import { Home } from './views'

function App() {
  return (
    <Router>
      <Global />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
