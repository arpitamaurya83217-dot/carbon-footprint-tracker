import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Calculate from './pages/Calculate.jsx'
import Calculate_House from './pages/Calculate_House.jsx'
import Result from './pages/Result.jsx'
import Result_House from './pages/Result_House.jsx'
import Privacy from './pages/Privacy.jsx'
import Discord from './pages/Discord.jsx'
import Term from './pages/Term.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      {/* Home page */}
      <Route index element={<Home />} />

      {/* Individual pages */}
      <Route path='calculate' element={<Calculate />} />
      <Route path='result' element={<Result />} />
      
      {/* Household pages */}
      <Route path='calculate-household' element={<Calculate_House />} />
      <Route path='result-household' element={<Result_House />} />

      {/* About & Contact */}
      <Route path='about' element={<About />} />
      <Route path='contact-us' element={<Contact />} />

      {/* Legal */}
      <Route path='privacy' element={<Privacy />} />

      {/* Discord page */}
      <Route path='discord' element={<Discord />} />
      
    {/* Terms and Conditions */}
    <Route path='term' element={<Term />} />
    </Route>

  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
