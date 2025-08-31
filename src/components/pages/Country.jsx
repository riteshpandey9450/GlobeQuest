import React, { useEffect, useState,useTransition } from 'react'
import { GetApiData } from '../api/PostApi';
import Loader from '../UI/Loader';
import "../../App.css"
import CountryCard from '../UI/CountryCard';
import CountryFilter from '../UI/CountryFilter';
import { Loading } from './Loading';

const Country = () => {
    const[apidata,setapidata]=useState([]);//country apidata
    const [isPending, startTransition] = useTransition();
    const[searchdata,setsearchdata]=useState(""); //search value
    const[filterdata,setfilterdata]=useState("all"); //filter value
    const[sorting,setsorting]=useState("asc"); //Sorting value


  useEffect(()=>{
    startTransition(async()=>{
      const apiData=await GetApiData();
      setapidata(apiData.data);
    });
  },[]);

  if(isPending || (!apidata)) {
    return <Loading/>
  }



  // 🌟🌟 Search Filter

  // Search Filter
  const SearchCountry=(currcountry)=>{
    if(searchdata){
      return currcountry.name.common.toLowerCase().includes(searchdata.toLowerCase());
    }
    else return apidata;
  }

  // Region Filter
  const FilterCountry=(currcountry)=>{
    if(filterdata!="all") return currcountry.region==filterdata;
    else return currcountry
  }

  

  const filterapidata=apidata.filter((currcountry)=> {
    return SearchCountry(currcountry) && FilterCountry(currcountry) 
})
  
  

  return (
    <div className="container p-16">

      {/* Filter Part Start */}

      <CountryFilter searchdata={searchdata}
        setsearchdata={setsearchdata}
        filterdata={filterdata}
        setfilterdata={setfilterdata}
        sorting={sorting}
        setsorting={setsorting}
        filterapidata={filterapidata}
        setapidata={setapidata}
      />

      {/* Filter Part End*/}

      {/* Card Section Start */}

    <ul className='container  grid grid-cols-1  gap-16  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
  {    filterapidata.map((currdata,index)=>{
      return <CountryCard key={index} currdata={currdata}/>
    })
  }
    </ul>
    </div>
  )
}

export default Country

