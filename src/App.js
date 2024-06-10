import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Sidebar from './components/Sidebar'
import Signup from './components/Signup'
import About from './pages/About'
import Analytics from './pages/Analytics'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Product from './pages/Product'
import Comment from './pages/Comment'
const App = () => {
  return (
    <>
     <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='Signup' element= {<Signup/>}/>
        <Route path='sidebar'element={<Sidebar/>}>
          <Route path='dashboard' element={<Dashboard/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='comment' element={<Comment/>}/>
          <Route path='home' element={<Home/>}/>
          <Route path='analytics' element={<Analytics/>}/>
          <Route path='product' element={<Product/>}/>
        </Route>
    </Routes> 
    </>
  )
}

export default App

