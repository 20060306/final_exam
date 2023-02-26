import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar/NavbarHeader'
import Search from './components/Navbar-footer/NavbarFooter'
import Sale from './Pages/Sale'
import Categories from './Pages/categories/index'
function App() {
  return (
    <>
      <Navbar />
      <Search />
      <Header />
      <Sale/>
      <Categories />
    </>
  )
}

export default App