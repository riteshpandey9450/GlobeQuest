import React, { useEffect, useTransition } from 'react'
import { useNavigate, useParams } from 'react-router'
import { GetApiData, GetIndivisualData } from '../api/PostApi';
import Loader from './Loader';
import { useState } from 'react';
import { motion} from 'motion/react';
import "../../App.css"
import { NavLink,Navigate } from 'react-router';
import { Loading } from '../pages/Loading';


const CountryDetails = () => {
    const[apidata,setapidata]=useState();
    const[isPending,startTransition]=useTransition();

    const param=useParams();
    const navigate=useNavigate();
    // console.log(param);
    useEffect(()=>{
        startTransition(async()=>{
            const res=await GetIndivisualData(param.id);
            // console.log(res);
            if(res.status == 200) {
                setapidata(res.data[0]);
            }
            else{
                console.log("Api Error");
            }

        });
    },[]);
    // console.log(apidata);

    if(isPending || (!apidata)) return <Loading/>
  return (
    <div className="w-full card2 mt-10 mb-10 p-0 sm:p-10 md:p-44 lg:-44">
        {/* Data section */}
    <motion.div className='container  p-16 grid grid-cols-1 gap-10 sm:gap-44 md:gap-44 lg:gap-44  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2'
       
      
    >
             
        <motion.img src={apidata.flags.svg} alt={apidata.flags.alt} className='mt-20 w-full rounded-2xl'
          whileInView={{
        x:[-100,50,0],
        opacity:[0,0.5,1],
        scale:[0,1],
       }}
       whileHover={{
        scale:1.05
       }}
       transition={{
        duration:0.8,delay:0.2,
       }}
         
        /> 

        <motion.div className="right flex flex-col space-y-8 pl-14"
   
        >
        <motion.h1 className='text-[#dedfdf] text-[20px] font-bold tracking-[2px]'
                whileInView={{
        y:[100,50,0],
        opacity:[0,0.5,1],
        scale:[0,1],
       }}
       transition={{
        duration:0.8,delay:0.2,
       }}

        >{apidata.name.official}</motion.h1>
        
         <motion.p className='text-[#dedfdf] text-2xl'
           whileInView={{
        y:[100,50,0],
        opacity:[0,0.5,1],
        scale:[0,1],
       }}
       transition={{
        duration:0.8,delay:0.2,
       }}
         ><b className='text-[#939d9d]'>
           <span className='tracking-[2px] '>
            Native Names: </span>
            </b>
         <span className='tracking-[1.3px] '></span> 
         { Object.keys(apidata.name.nativeName)
         .map((key)=> apidata.name.nativeName[key].common).join(",")}
        </motion.p>

        <motion.p className='text-[#DEDFDF] text-2xl'
        
         whileInView={{
        y:[100,30,10],
        opacity:[0,0.5,1],
        scale:[0,1],
       }}
       transition={{
        duration:0.8,delay:0.2,
       }}
        ><b className='text-[#939d9d]'><span className='tracking-[2px] '>Population: </span></b>
        <span className='tracking-[1.3px] '>{apidata.population.toLocaleString()}</span></motion.p>

        <motion.p className='text-[#DEDFDF] text-2xl'
          whileInView={{
        y:[100,50,0],
        opacity:[0,0.5,1],
        scale:[0,1],
       }}
       transition={{
        duration:0.8,delay:0.2,
       }}
        ><b className='text-[#939d9d]'>
          <span className='tracking-[2px] '>Region: </span></b>{apidata.region}</motion.p>
        <motion.p className='text-[#DEDFDF]' 
             whileInView={{
        y:[100,50,0],
        opacity:[0,0.5,1],
        scale:[0,1],
       }}
       transition={{
        duration:0.8,delay:0.2,
       }}

        ><b className='text-[#939d9d]'>
          <span className='tracking-[2px] '>Sub Region:</span> </b>{apidata.subregion}</motion.p>
         <motion.p className='text-[#DEDFDF] text-2xl'
           whileInView={{
        y:[100,50,0],
        opacity:[0,0.5,1],
        scale:[0,1],
       }}
       transition={{
        duration:0.8,delay:0.2,
       }}
         
         ><b className='text-[#939d9d]'>
          <span className='tracking-[2px] '>Capital: </span> </b>{apidata.capital}</motion.p> 
          <motion.p className='text-[#DEDFDF] text-2xl'
             whileInView={{
        y:[100,50,0],
        opacity:[0,0.5,1],
        scale:[0,1],
       }}
       transition={{
        duration:0.8,delay:0.2,
       }}
          
        ><b className='text-[#939d9d]'>
          <span className='tracking-[2px] '>Top Level </span> Domain: </b>{apidata.tld[0]}</motion.p>
         <motion.p className='text-[#DEDFDF] text-2xl'
           whileInView={{
        y:[100,50,0],
        opacity:[0,0.5,1],
        scale:[0,1],
       }}
       transition={{
        duration:0.8,delay:0.2,
       }}
        
         ><b className='text-[#939d9d]' >
          <span className='tracking-[2px] '>Currencies: </span> </b>
         {Object.keys(apidata.currencies)
          .map((curr)=> apidata.currencies[curr].name+`${apidata.currencies[curr].symbol}`).join(",")
         }</motion.p>

         <motion.p className='text-[#DEDFDF] text-2xl' 
          whileInView={{
        y:[100,50,0],
        opacity:[0,0.5,1],
        scale:[0,1],
       }}
       transition={{
        duration:0.8,delay:0.2,
       }}
         
         ><b className='text-[#939d9d]'>
          <span className='tracking-[2px] '>Languages: </span> </b>
        {Object.keys(apidata.languages)
         .map((curr)=> apidata.languages[curr]).join(",")
        }
         </motion.p>    

         <motion.div className="btn flex bg-[#58C4DC] w-fit gap-3 px-5 py-3 justify-center items-center
                     rounded-2xl hover:bg-[#202020]  hover:scale-110 hover:border-2 ml-5"
                     whileInView={{
        y:[100,50,0],
        opacity:[0,0.5,1],
        scale:[0,1],
       }}
       transition={{
        duration:0.8,delay:0.2,
       }}
          >
                    <NavLink className="text-[#7c7f7f] btn-text" to="/country">Go Back</NavLink>
         </motion.div>




       </motion.div>
                    
       </motion.div>
        
       
      
    </div>
  )
}

export default CountryDetails
