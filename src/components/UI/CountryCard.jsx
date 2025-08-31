import React from 'react'
import { NavLink } from 'react-router'
import { motion } from 'motion/react'
import "../../App.css"
const CountryCard = ({currdata}) => {

  return (
   <motion.li className="card1 p-9  flex flex-col gap-5 pb-14 hover:scale-110 country-li space-y-3"
    
      whileInView={{
        opacity:[0,0.5,1],
        scale:[0,1],
        // x:[500,0],
      }}
      transition={{
        duration:0.6,delay:0.2
      }}
   >
    
    <img src={currdata.flags.png} alt="" className='m-6 h-[150px]  rounded-2xl'/>
    <h1 className='text-[#dedfdf] text-[20px] font-bold ml-6 tracking-[2px]'>{currdata.name.common.length>10?currdata.name.common.slice(0,10)+"....":currdata.name.common}</h1>
    <p className='text-[#dedfdf] ml-6 text-2xl'>
      <b>
      <span className='tracking-[2px] '>Population: </span>
      </b>
      <span className='tracking-[1.3px]'> {currdata.population} </span></p>

    <p className='text-[#dedfdf]  ml-6 text-2xl'><b>
        <span className='tracking-[2px] '>Region: 
          </span>
          </b>
    <span className='tracking-[1.3px]'> {currdata.region}</span></p>

    <p className='text-[#dedfdf]  ml-6 text-2xl'><b>
      <span className='tracking-[2px] '>Capital: 
        </span></b>
        <span className='tracking-[1.3px]'> {currdata.capital[0]}</span></p>
    {/* <NavLink><button className='ml-6'>Read More</button></NavLink> */}
{/* btn flex bg-[#659faebe] w-fit gap-3 px-5 py-3 justify-center items-center
                rounded-2xl hover:bg-[#202020a2]  hover:scale-110 hover:border-2 ml-6 */}
    <div className="btn flex  w-fit gap-3 px-5 py-3 justify-center items-center
                rounded-2xl   hover:scale-110 hover:border-2 ml-6">
               <NavLink className="text-[#7c7f7f] btn-text text-[16px]" to={`/country/${currdata.name.common}`}>Explore Now</NavLink>
    </div>
   </motion.li>
  )
}

export default CountryCard
