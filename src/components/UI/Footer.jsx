import React from 'react'
import { FaFacebookF,FaLinkedinIn,FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { NavLink } from 'react-router';
import { motion } from 'motion/react';
import "./Header.css"

const Footer = () => {
  return (
   <footer className='bg-gray-900 w-full p-16'>
    <div className="container grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">

           {/* Description Section */}

      <motion.div className="description flex flex-col gap-8 mb-8"
        
      >
        <motion.h2 className='text-[#DEDFDF] text-[25px] tracking-wide'
         whileInView={{
          y:[-10,0],
          // opacity:[0,1],
          x:[-10,0],
          scale:[0,1.01]
        }}
        transition={{
          duration:0.8,delay:0.2
        }}
        >GlobeQuest</motion.h2>
        <motion.p className='text-[#DEDFDF]'
         whileInView={{
          opacity:[0,1],
          x:[-10,0],

          scale:[0,1.01],
        }}
        transition={{
          duration:0.8,delay:0.2
        }}
        >Connecting people and countries through knowledge and innovation.</motion.p>


        <motion.div className="logos flex gap-5"
           
         whileInView={{
          y:[20,0],
          scale:[0,1.01],
        }}
        transition={{
          duration:0.8,delay:0.2
        }}
        >
         <NavLink className="bg-slate-400 p-4 mix-blend-lighten rounded-full shadow-xl
            hover:[box-shadow:rgba(147,195,33,0.901)_0px_1px_0px,_rgba(10,10,203,0.764)_0px_8px_24px,_rgba(17,17,26,0.1)_0px_16px_48px]
            transition-all duration-300 
            hover:scale-110
         "
        to="https://www.facebook.com/profile.php?id=100046949442585" > 
        
        <FaFacebookF className=' text-[20px] text-black
         
        '/> </NavLink>
          <NavLink className="bg-slate-400 p-4 mix-blend-lighten rounded-full  
          hover:[box-shadow:rgba(147,195,33,0.901)_0px_1px_0px,_rgba(10,10,203,0.764)_0px_8px_24px,_rgba(17,17,26,0.1)_0px_16px_48px]
            transition-all duration-300 
            hover:scale-110"
          to='https://www.linkedin.com/in/ritesh-pandey-4a2b53288/'> <FaLinkedinIn className=' text-[20px] text-black
           hover:[box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px]
        '/> </NavLink>
          <NavLink className="bg-slate-400 p-4 mix-blend-lighten rounded-full 
           hover:[box-shadow:rgba(147,195,33,0.901)_0px_1px_0px,_rgba(10,10,203,0.764)_0px_8px_24px,_rgba(17,17,26,0.1)_0px_16px_48px]
            transition-all duration-300 
            hover:scale-110
          " to=""> <FaXTwitter className=' text-[20px] text-black'/> </NavLink>
          <NavLink className="bg-slate-400 p-4 mix-blend-lighten rounded-full 
          hover:[box-shadow:rgba(147,195,33,0.901)_0px_1px_0px,_rgba(10,10,203,0.764)_0px_8px_24px,_rgba(17,17,26,0.1)_0px_16px_48px]
            transition-all duration-300 
            hover:scale-110
          " to='https://github.com/riteshpandey9450?tab=repositories'> <IoLogoGithub className=' text-[20px] text-black'/> </NavLink>
        </motion.div>
      </motion.div>

      {/* Description Section End */}

      {/* UseFul Links Section Start */}
      <div className="links  flex flex-col gap-3 w-fit mb-8">
      <motion.h2  className='text-[#DEDFDF] text-[25px] tracking-wide'
           whileInView={{
          y:[-10,0],
          // opacity:[0,1],
          x:[-10,0],
          scale:[0,1.01]
        }}
        transition={{
          duration:0.8,delay:0.2
        }}

      >UseFul Links</motion.h2>
      <motion.div className="link flex flex-col gap-3 items-center"
         whileInView={{
          // opacity:[0,1],
           y:[20,0],

          scale:[0,1.01],
        }}
        transition={{
          duration:0.8,delay:0.2
        }}
      >
      <NavLink to="/" className='text-[#DEDFDF] hover:text-green-400  nav relative'>Home</NavLink>
      <NavLink to="/about" className='text-[#DEDFDF] hover:text-green-400 nav relative'>About</NavLink>
      <NavLink to="/country" className='text-[#DEDFDF] hover:text-green-400 nav relative'>Country</NavLink>
      <NavLink to="/contact" className='text-[#DEDFDF] hover:text-green-400 nav relative'>Contact</NavLink>
      </motion.div>

      </div>
      {/* UseFul Links Section End */}

      {/* Subscribe Section Start */}
      <div className="subscribe flex flex-col gap-5 ">
        <motion.h2 className='text-[#DEDFDF] text-[25px] tracking-wide'
          whileInView={{
          y:[-10,0],
          // opacity:[0,1],
          x:[-10,0],
          scale:[0,1.01]
        }}
        transition={{
          duration:0.8,delay:0.2
        }}
        >Subscribe</motion.h2>
        <motion.p className='text-[#DEDFDF]'
           whileInView={{
          opacity:[0,1],
          x:[-10,0],

          scale:[0,1.01],
        }}
        transition={{
          duration:0.8,delay:0.2
        }}
        >Subscribe to our newletter for latest Updates.</motion.p>
        <motion.input type="text" name="subscriberEmail" placeholder='Enter Your Email' 
        className='px-6 py-3 text-3xl text-slate-50  rounded-xl w-full h-auto max-w-[250px] 
        sm:w-[250px] md:w-[250px] lg:w-[250px]] sm:h-[50px] md:h-[50px] 
        lg:h-[50px] border-solid border-2 border-[#6a6767] bg-transparent'
            whileInView={{
          opacity:[0,1],
          x:[-10,0],

          scale:[0,1.01],
        }}
        transition={{
          duration:0.8,delay:0.2
        }}
        />
        <motion.button  className="px-6 py-3 text-3xl text-slate-50 
         rounded-xl w-full h-auto  max-w-[250px] 
        sm:w-[250px] md:w-[250px] lg:w-[250px] sm:h-[50px] md:h-[50px] lg:h-[50px] border-solid border-2 border-[#6a6767] 
        [background:linear-gradient(to_bottom_right,#fcd34d,#ef4444,#ec4899)] hover:scale-125"
            whileInView={{
          // opacity:[0,1],
          y:[20,0],
          scale:[0,1.01],
        }}
        whileHover={{
          scale:1.25
        }}
        transition={{
          duration:0.8,delay:0.2
        }}
        
        >Subscribe</motion.button>

      </div>
      {/* Subscribe Section End*/}

    </div>
   </footer>
  )
}

export default Footer
