import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import "./Header.css";
import { NavLink } from 'react-router';
const Header = () => {
  const[showmenu,setshowmenu]=useState(false);

  return (
    <header className='bg-[#374151] min-w-full order-3 '>
      <div className="container flex justify-between p-8">
        {/* Left Part Start */}

        <div className="left">
          <NavLink to="/">
          <h1 className='logo'>GlobeQuest</h1>
          </NavLink>
        </div>

        {/* Right Part Start */}

        <nav className={showmenu?'mobile-menu':'web-menu'}>
          <ul  className='flex flex-row  mt-5 gap-14'>
            <li >
              <NavLink to="/" className={({isActive}) => 
              `text-slate-50 hover:text-green-500 cursor-pointer hover:text-3xl
                ${isActive?'text-green-500':'text-slate-50'}
                `}>Home 
              </NavLink></li>

            <li >
              <NavLink to="/about" className={({isActive}) => 
              `text-slate-50 hover:text-green-500 cursor-pointer hover:text-3xl
                ${isActive?'text-green-500':'text-slate-50'}
                `}>About 
              </NavLink>
              </li>

            <li ><NavLink to="/country" className={({isActive}) => 
              `text-slate-50 hover:text-green-500 cursor-pointer hover:text-3xl
                ${isActive?'text-green-500':'text-slate-50'}
                `}>Country </NavLink></li>

            <li ><NavLink to="/contact" className={({isActive}) => 
              `text-slate-50 hover:text-green-500 cursor-pointer hover:text-3xl
                ${isActive?'text-green-500':'text-slate-50'}
                `}>Contact </NavLink></li>
          </ul>
        </nav>

        <button className="menu text-[50px]" onClick={()=> setshowmenu(!showmenu)}><GiHamburgerMenu /></button>
      </div>
    </header>
  )
}

export default Header
