  import React from 'react'
  import countrydata from "../api/CountryData.json"
  import AboutCard from './AboutCard'
  import "./About.css"
import { motion } from 'motion/react'

  const About = () => {
    // console.log(countrydata);
    //text-[#F6F7F9] 
    return (
    <div className="container space-y-14 pt-8">
      <motion.h1 className='text-center about-heading px-8 mt-10'
       whileInView={{
        opacity:[0,0.5,1],
        scale:[0,1],
        x:[-30,0],
       }}
      transition={{
        duration:0.8,delay:0.5
      }}
      >Explore Interesting Facts<br/> of the Country</motion.h1>

      {/* Card Section Start*/}

      <ul className='grid grid-cols-1  gap-24 sm:grid-cols-1 p-10 md:grid-cols-2 lg:grid-cols-3 sm:w-fit  md:w-fit lg:w-[calc(100%+20px)]' >
        {
          countrydata.map((currdata)=>{
            return <AboutCard key={currdata.id} currdata={currdata} />
          })
        }
      </ul>

      


    </div>
    )
  }

  export default About
