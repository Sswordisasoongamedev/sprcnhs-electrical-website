import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/home'
import Tech from './Pages/about'

function App() {
  
  return (<BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/tech' element={<Tech />} />
    </Routes>
  </BrowserRouter>)
}

export default App
