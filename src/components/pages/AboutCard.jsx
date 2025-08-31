import React from 'react'
import "./About.css";
import {motion} from "motion/react"

const AboutCard=({currdata}) => {
    const{countryName,capital,population,interestingFact}=currdata;
    // h-[250px] w-[330px]
    // pt-14 pb-20
  return (
    <motion.div className="about-item container card pl-10 pr-10 rounded-[35px] space-y-10 pt-14 pb-24 " 
      whileInView={{
        opacity:[0,0.5,1],
        scale:[0,1],
      }}
     
      transition={{
        duration:0.8,delay:0.5
      }}
       whileHover={{
        scale:1.05
      }}
    >
        <h1 className='text-[#dedfdf] text-[20px] pb-3 text-center pr-20 font-bold'>{countryName}</h1>
        <p className='text-[#b5b6b8] text-2xl'><b className='text-[#bec0c3]'>
          <span className='tracking-[2px] font-[900px]'>Capital: </span></b>
          <span className='tracking-[1.3px]'> {capital} </span></p>

        <p className='text-[#b5b6b8] text-2xl'><b className='text-[#bec0c3]'>
          <span className='tracking-[2px] font-[900px]'> Population: </span></b>
          <span className='tracking-[1.3px]'> {population} </span></p>

        <p className='text-[#b5b6b8] text-2xl '><b className='text-[#bec0c3] tracking-[10px]'>
          <span className='tracking-[2px] font-[900px]'>
          Interesting Fact:
          </span></b><span className='tracking-[1.3px]'> {interestingFact} </span></p>
    </motion.div>
  )
}

export default AboutCard
