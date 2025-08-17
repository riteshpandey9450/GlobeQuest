import React from 'react'
import { NavLink } from 'react-router'
import { motion } from 'motion/react'
import "../../App.css"
const CountryCard = ({currdata}) => {

  return (
   <motion.li className="card1 p-9  flex flex-col gap-5 pb-10 hover:scale-110 country-li "
    
      whileInView={{
        opacity:[0,0.5,1],
        scale:[0,1],
        // x:[500,0],
      }}
      transition={{
        duration:0.8,delay:0.2
      }}
   >
    
    <img src={currdata.flags.png} alt="" className='m-6 h-[150px]  rounded-2xl'/>
    <h2 className='text-[#dedfdf] text-[25px] ml-6'>{currdata.name.common.length>10?currdata.name.common.slice(0,10)+"....":currdata.name.common}</h2>
    <p className='text-[#dedfdf] ml-6'><b>Population: </b>{currdata.population}</p>
    <p className='text-[#dedfdf]  ml-6'><b>Region: </b>{currdata.region}</p>
    <p className='text-[#dedfdf]  ml-6'><b>Capital: </b>{currdata.capital[0]}</p>
    {/* <NavLink><button className='ml-6'>Read More</button></NavLink> */}

    <div className="btn flex bg-[#58C4DC] w-fit gap-3 px-5 py-3 justify-center items-center
                rounded-2xl hover:bg-[#202020]  hover:scale-110 hover:border-2 ml-6 ">
               <NavLink className="text-[#7c7f7f] btn-text" to={`/country/${currdata.name.common}`}>Explore Now</NavLink>
    </div>
   </motion.li>
  )
}

export default CountryCard
