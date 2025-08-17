import React from 'react'
import { useEffect } from 'react';
const CountryFilter = ({searchdata,setsearchdata,filterdata,setfilterdata,sorting,setsorting,filterapidata,setapidata}) => {

    const HandleSearchChange=(event)=>{
    event.preventDefault();
        setsearchdata(event.target.value);
    }

   const HandleFilterChange=(event)=>{
    event.preventDefault();
    setfilterdata(event.target.value);
   }

     // Sorting Filter

   const HandleSortingChange=(e)=>{
    e.preventDefault();
    const newvalue=e.target.value;
    setsorting(newvalue);
    console.log(sorting);
    const sortedcountry=[...filterapidata];
     if(newvalue.toLowerCase()==="asc"){
         sortedcountry.sort((a,b)=> 
            a.name.common.toLowerCase().localeCompare(b.name.common.toLowerCase())
        );
     }
     else{
        sortedcountry.sort((a,b)=> 
            b.name.common.toLowerCase().localeCompare(a.name.common.toLowerCase())
    );
     }
     setapidata(sortedcountry);
    console.log(sortedcountry);
   }

   const HandleSorting=()=>{
    const sortedcountry=[...filterapidata];
    sortedcountry.sort((a,b)=> a.name.common.toLowerCase().localeCompare(b.name.common.toLowerCase()));
    setapidata(sortedcountry);
   }

    useEffect(()=>{
        HandleSorting("asc");
      },[]);

  return (
    <div className="filter grid grid-cols-1 gap-20  sm:gap-10 md:gap-44 lg:gap-44 md:grid-cols-3  lg:grid-cols-3 p-16 sm:grid-cols-3">
       <input type="text" placeholder='Search Country'
        name='countryname' className='text-3xl rounded-3xl px-8 py-3  max-w-fit sm:w-72 md:w-72 lg:w-72 bg-gray-600 text-slate-50'
         value={searchdata} onChange={HandleSearchChange}
       />

        {/* <input type="text" placeholder='Sort'
        name='countryname' className='text-3xl rounded-2xl px-8 py-3 w-44'
         value={sorting} onChange={HandleSortingChange}
       /> */}


       {/* <input type="text" placeholder='Filter'
        name='countryname' className='text-3xl rounded-2xl px-8 py-3 w-44'
         value={filterdata} onChange={handleFilterChange}
       /> */}

       <div className="sort flex justify-around">
        <select name="sort" id="sort" value={sorting} onChange={HandleSortingChange}
        className='text-3xl rounded-[50px] px-8  py-3 w-fit sm:w-44 md:w-44 lg:w-44 bg-gray-600 text-slate-100 left-0'
        >
           <option value="Asc">Asc</option>
           <option value="Desc">Desc</option>

        </select>
       </div>

       <div className="filter flex justify-around">
        <select name="filter" id="filter" value={filterdata} onChange={(e)=>HandleFilterChange(e)}
        className='text-3xl rounded-[50px] px-8 py-3 w-fit bg-gray-600 text-slate-100'
        >
               <option value="all">All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
            <option value="Asia">Asia</option>

        </select>
       </div>

    </div>
  )
}

export default CountryFilter
