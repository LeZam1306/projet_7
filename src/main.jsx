import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./styles/global.scss"
import Layout from "./components/Layout"
import Home from './pages/home/Home'
import About from "./pages/About"
import NotFound from './pages/NotFound'
import HousingSheet from './pages/HousingSheet'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<Home />} path="/"/>
          <Route element={<About />} path="/A-propos"/>
          <Route element={<HousingSheet />} path="/housing/:id"/>
          <Route element={<NotFound />} path="*"/>
        </Route>
      </Routes>
    </Router>
  </StrictMode>,
)
