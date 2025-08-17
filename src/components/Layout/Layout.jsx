import React from 'react'
import Header from '../UI/Header'
import Footer from '../UI/Footer'
import { Outlet } from 'react-router'
import ScrollToTop from './ScrollToTop'

const Layout = () => {
  return (
    <>
   <ScrollToTop/>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout
