import React from 'react'
import {motion} from "motion/react"
import { NavLink } from 'react-router'
const HeroSection = () => {
  return (
    <div className="container  grid grid-cols-1 gap-5 p-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pb-32 pt-16">

        {/* Left Section Start */}
        <motion.div className="left flex flex-col gap-10 pt-32 order-2 lg:order-1 sm:order-2 md:order-1"
        
        whileInView={{
              opacity:[0,1],
              // top:[0,100],
              x:[0,20]
            }}
            transition={{
              duration:2,delay:0.5
            }}
        >

            <h1 className='text-[#F6F7F9]'>Explore Every Country, Culture and Journey Across the Globe</h1>
            <p className='text-[#F6F7F9]'>Discover nations, connect with cultures, and experience the world in an easy and interactive way.</p>

            <div className="btn flex bg-[#58C4DC] w-fit gap-3 px-5 py-4 justify-center items-center 
            rounded-2xl hover:bg-[#202020]  hover:scale-110 hover:border-2">
           <NavLink className="text-[#7c7f7f] btn-text" to="/">Explore Now</NavLink>
            </div>
        </motion.div>

        {/* Right Section Start */}
        
        <figure className="right pt-28 order-1 lg:order-2 sm:or
        der-1 md:order-2 " >
            
            <motion.img src="./world (1).png" alt="world" className=' object-cover h-[200px] w-[500px] md:h-[300px] md:w-[650px] sm:h-[300px] sm:w-[600px] '

            whileInView={{
              opacity:[0,1],
             x:[50,20],
            // scale:[0,1],
            }}
             transition={{
              duration:1,delay:0.5
            }}

            drag
            whileDrag={{
              scale:0.8,
            }}
            dragConstraints={{
              top:10,bottom:30,right:10,left:5,
            }}
            dragDirectionLock='true'
            
            />
        </figure>

        {/* Right Section End */}


    </div>
  )
}

export default HeroSection
