import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./styles/global.scss"
import Layout from "./components/layout.jsx"
import Home from './pages/home/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<Home />} path="/"/>
        </Route>
      </Routes>
    </Router>
  </StrictMode>,
)
