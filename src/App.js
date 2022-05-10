import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'react-loading-skeleton/dist/skeleton.css'
// Global
import { GlobalStyle } from './styles'
// Views
import { Home } from './views'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      <GlobalStyle />
    </>
  )
}

export default App
