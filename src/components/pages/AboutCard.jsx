import React from 'react'
import "./About.css";
import {motion} from "motion/react"

const AboutCard=({currdata}) => {
    const{countryName,capital,population,interestingFact}=currdata;
    // h-[250px] w-[330px]
  return (
    <motion.div className="container card p-10 rounded-[35px] space-y-3 " 
      whileInView={{
        opacity:[0,0.5,1],
        scale:[0,1],
      }}
     
      transition={{
        duration:0.8,delay:0.2
      }}
       whileHover={{
        scale:1.1
      }}
    >
        <h2 className='text-[#dedfdf] text-[25px]'>{countryName}</h2>
        <p className='text-[#b5b6b8]'><b className='text-[#bec0c3]'>Capital:</b> {capital}</p>
        <p className='text-[#b5b6b8]'><b className='text-[#bec0c3]'>Population:</b> {population}</p>
        <p className='text-[#b5b6b8]'><b className='text-[#bec0c3]'>InterestingFact:</b> {interestingFact}</p>
    </motion.div>
  )
}

export default AboutCard
