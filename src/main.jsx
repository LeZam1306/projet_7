import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./styles/global.scss"
import Layout from "./components/Layout.jsx"
import Home from './pages/home/index.jsx'
import About from "./pages/about.jsx"
import NoFound from './pages/noFound.jsx'
import HousingSheet from './pages/housing-sheet.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<Home />} path="/"/>
          <Route element={<About />} path="/A-propos"/>
          <Route element={<HousingSheet />} path="/housing/:id"/>
          <Route element={<NoFound />} path="*"/>
        </Route>
      </Routes>
    </Router>
  </StrictMode>,
)
