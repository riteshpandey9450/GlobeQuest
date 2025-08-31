import React from 'react'
import {motion} from "motion/react"
import { NavLink } from 'react-router'
const HeroSection = () => {
  return (
    <div className="container  grid grid-cols-1 gap-5 p-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pb-32 pt-16">

        {/* Left Section Start */}
        {/* pt-32 */}
        <motion.div className="left flex flex-col gap-10 pt-52 order-2 lg:order-1 sm:order-2 md:order-1"
      
        whileInView={{
              opacity:[0,0.5,1],
              // top:[0,100],
              // scaleX:[0,50,100],
              x:[0,10,15],
              scale:[0.5,1],
            }}
            transition={{
              duration:1,delay:0.8
            }}
        >

            <motion.h1 className='text-[#F6F7F9] px-4'
           
        
            >Explore Every Country, Culture and Journey Across the Globe</motion.h1>
            <motion.p className='text-[#F6F7F9] px-4'
             whileInView={{
                // x:[-20,0],
                left:[-10,0],
                scale:[0,1],
              }}
              transition={{
              duration:1.5,delay:0.8
            }}
            >Discover nations, connect with cultures, and experience the world in an easy and interactive way.</motion.p>

            <div className="btn flex bg-[#58C4DC] w-fit gap-3 px-5 py-4 justify-center items-center 
            rounded-2xl hover:bg-[#686666]  hover:scale-110 hover:border-2 mx-4 text-2xl"
            
            >
           <motion.NavLink className="text-[#7c7f7f] btn-text" to="/country"
            
           >Explore Now</motion.NavLink>
            </div>
        </motion.div>

        {/* Right Section Start */}
        
        <figure className="right pt-28 order-1 lg:order-2 sm:or
        der-1 md:order-2 " >
            
            <motion.img src="./world (1).png" alt="world" className=' object-cover h-[200px] w-[500px] md:h-[300px] md:w-[650px] sm:h-[300px] sm:w-[600px] '

            whileInView={{
              opacity:[0,1],
             x:[50,8],
            // scale:[0,0.2],
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
