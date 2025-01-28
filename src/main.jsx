import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./styles/global.scss"
import Layout from "./components/Layout.jsx"
import Home from './pages/home/index.jsx'
import About from "./pages/about.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<Home />} path="/"/>
          <Route element={<About />} path="/A-propos"/>
        </Route>
      </Routes>
    </Router>
  </StrictMode>,
)
