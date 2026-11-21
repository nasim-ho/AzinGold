import { useState } from 'react'
import './App.css'

import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Category from './components/Category/Category'
import Collection from './components/Collection/Collection'
import NewProducts from './components/NewProducts/NewProducts'
import About from './components/About/About'
import Gifts from './components/Gifts/Gifts'
import Footer from './components/Footer/Footer'

function App() {
  
  return (
    <>
      <Header />
      <Hero />
      <Category />
      <Collection />
      <NewProducts />
      <About />
      <Gifts />
      <Footer />
    </>
  )
}

export default App
