import React from 'react'
import { motion, scale } from "motion/react"
import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from 'react-router';
import "./Home.css"
import HeroSection from '../UI/HeroSection';
import About from './About';

const Home = () => {
  return (
     <section>
    <HeroSection/>
     <About/> 
     </section>
  )
}

export default Home
