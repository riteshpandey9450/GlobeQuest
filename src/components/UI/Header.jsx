import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from 'react-router';
import "./Header.css";

const Header = () => {
  const[showmenu,setshowmenu]=useState(false);

  return (
    <header className='bg-[#374151] min-w-full order-3 p-0'>
      <div className="container flex justify-between p-0">
        {/* Left Part Start */}

        <div className="left p-0">
          {/* <NavLink to="/"> */}
          {/* <h1 className='logo'>GlobeQuest</h1> */}
          <img src="./logo2.png" alt="logo" className='w-[250px] h-[80px] leading-10 brightness-200 pt-0 text-slate-500'/>
          {/* </NavLink> */}
        </div>

        {/* Right Part Start */}

        <nav className={showmenu?'mobile-menu':'web-menu p-5'}>
          <ul  className='flex flex-row  mt-5 gap-14 '>
            <li >
              <NavLink to="/" className={({isActive}) => 
              ` hover:text-green-500 cursor-pointer hover:text-3xl nav 
                ${isActive?'text-cyan-400 font-bold tracking-wider ':'text-slate-50'}
                `}>Home 
              </NavLink></li>

            <li >
              <NavLink to="/about" className={({isActive}) => 
              ` hover:text-green-500 cursor-pointer hover:text-3xl nav relative
                ${isActive?'text-cyan-400 font-bold tracking-wider':'text-slate-50'}
                `}>About 
              </NavLink>
              </li>

            <li ><NavLink to="/country" className={({isActive}) => 
              ` hover:text-green-500 cursor-pointer hover:text-3xl nav relative
                ${isActive?'text-cyan-400 font-bold tracking-wider':'text-slate-50'}
                `}>Country </NavLink></li>

            <li ><NavLink to="/contact" className={({isActive}) => 
              ` hover:text-green-500 cursor-pointer hover:text-3xl nav relative
                ${isActive?'text-cyan-400 font-bold tracking-wider':'text-slate-50'}
                `}>Contact </NavLink></li>
          </ul>
        </nav>

        <button className="menu text-[50px] px-10" onClick={()=> setshowmenu(!showmenu)}><GiHamburgerMenu /></button>
      </div>
    </header>
  )
}

export default Header
