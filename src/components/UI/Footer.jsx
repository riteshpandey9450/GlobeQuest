import React from 'react'
import { FaFacebookF,FaLinkedinIn,FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { NavLink } from 'react-router';

const Footer = () => {
  return (
   <footer className='bg-gray-900 w-full p-16'>
    <div className="container grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">

           {/* Description Section */}

      <div className="description flex flex-col gap-8 mb-8">
        <h2 className='text-[#DEDFDF] text-[25px] tracking-wide'>GlobeQuest</h2>
        <p className='text-[#DEDFDF]'>Connecting people and countries through knowledge and innovation.</p>
        <div className="logos flex gap-5">
         <NavLink className="bg-slate-400 p-4 mix-blend-lighten rounded-full shadow-xl
  hover:[box-shadow:'rgba(17,17,26,0.1)_0px_8px_24px,rgba(17,17,26,0.1)_0px_16px_56px,rgba(17,17,26,0.1)_0px_24px_80px']        "
        to="https://www.facebook.com/profile.php?id=100046949442585" > <FaFacebookF className=' text-[20px] text-black'/> </NavLink>
          <NavLink className="bg-slate-400 p-4 mix-blend-lighten rounded-full" to='https://www.linkedin.com/in/ritesh-pandey-4a2b53288/'> <FaLinkedinIn className=' text-[20px] text-black'/> </NavLink>
          <NavLink className="bg-slate-400 p-4 mix-blend-lighten rounded-full" to=""> <FaXTwitter className=' text-[20px] text-black'/> </NavLink>
          <NavLink className="bg-slate-400 p-4 mix-blend-lighten rounded-full" to='https://github.com/riteshpandey9450?tab=repositories'> <IoLogoGithub className=' text-[20px] text-black'/> </NavLink>
        </div>
      </div>

      {/* Description Section End */}

      {/* UseFul Links Section Start */}
      <div className="links  flex flex-col gap-3 w-fit mb-8">
      <h2  className='text-[#DEDFDF] text-[25px] tracking-wide'>UseFul Links</h2>
      <div className="link flex flex-col gap-3 items-center">
      <NavLink to="/" className='text-[#DEDFDF] hover:text-green-400 '>Home</NavLink>
      <NavLink to="/about" className='text-[#DEDFDF] hover:text-green-400'>About</NavLink>
      <NavLink to="/country" className='text-[#DEDFDF] hover:text-green-400'>Country</NavLink>
      <NavLink to="/contact" className='text-[#DEDFDF] hover:text-green-400'>Contact</NavLink>
      </div>

      </div>
      {/* UseFul Links Section End */}

      {/* Subscribe Section Start */}
      <div className="subscribe flex flex-col gap-5 ">
        <h2 className='text-[#DEDFDF] text-[25px] tracking-wide'>Subscribe</h2>
        <p className='text-[#DEDFDF]'>Subscribe to our newletter for latest Updates.</p>
        <input type="text" name="subscriberEmail" placeholder='Enter Your Email' className='px-6 py-3 text-3xl text-slate-50  rounded-xl w-full h-auto max-w-[250px] sm:w-[250px] md:w-[250px] lg:w-[250px]] sm:h-[50px] md:h-[50px] lg:h-[50px] border-solid border-2 border-[#6a6767] bg-transparent'/>
        <button  className="px-6 py-3 text-3xl text-slate-50  rounded-xl w-full h-auto max-w-[250px] sm:w-[250px] md:w-[250px] lg:w-[250px] sm:h-[50px] md:h-[50px] lg:h-[50px] border-solid border-2 border-[#6a6767] 
        [background:linear-gradient(to_bottom_right,#fcd34d,#ef4444,#ec4899)] hover:scale-105">Subscribe</button>

      </div>
      {/* Subscribe Section End*/}





    </div>
   </footer>
  )
}

export default Footer
