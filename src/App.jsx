import { useState } from 'react'
import './App.css'
import Header from './header'
import Navbar from './navbar'
import Category from './categroy'
import Videos from './content'

function App() {
  return (
      <>
        <Header />
        <div className="flex">
          <div className="w-1/4">
            <Navbar />
          </div>
          <div className="flex-1">
            <Category />
            <Videos />
          </div>
        </div>
      </>


  )
}

export default App
