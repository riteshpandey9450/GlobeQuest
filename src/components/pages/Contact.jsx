import React from 'react'
import {motion} from "motion/react"
import { Form } from 'react-router'


const Contact = () => {
const [result, setResult] = React.useState("");

//   const HandlFormSubmit=(e)=>{
//     e.preventDefault(); //stop page refresh
//     const formdata=new FormData(e.target);
//  const data= Object.fromEntries(formdata.entries());
//   // console.log(data);
// };



  const HandleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", `${import.meta.env.CONTACT_API_KEY}`);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <motion.div className="container flex flex-col items-center  pt-44 space-y-10 pb-20"
    animate={{
       scale:[0,1],
      opacity:[0,0.5,1],
      x:[30,10]
    }}
    
    transition={{
      duration:0.8,delay:0.2,
    }}
     
    >
      <h1 className='text-[#dedfdf] -tracking-tight items-center '>Contact Us</h1>
      <form className='flex flex-col space-y-10 item-center self-center' onSubmit={HandleSubmit}>
      <input type="text" placeholder='Enter Your Name' required autoComplete='off'name='usename' className='px-6 py-3 text-3xl  text-slate-50 rounded-xl w-full h-auto max-w-[400px] sm:w-[400px] md:w-[400px] lg:w-[400px]  sm:h-[50px] md:h-[50px] lg:h-[50px] border-solid border-2 border-[#6a6767] bg-transparent 
      ' />
      <input type="email" placeholder='Enter Your Email' required autoComplete='off' name='email' className='px-6 py-3 text-3xl text-slate-50  rounded-xl w-full h-auto max-w-[400px] sm:w-[400px] md:w-[400px] lg:w-[400px] sm:h-[50px] md:h-[50px] lg:h-[50px] border-solid border-2 border-[#6a6767] bg-transparent'/>
      <textarea type="text" placeholder='Enter Your Message' required autoComplete='off'name='message' className='px-6 py-3 text-3xl text-slate-50  rounded-xl w-full h-[200px] max-w-[400px] sm:w-[400px] md:w-[400px] lg:w-[400px] sm:h-[180px] md:h-[180px] lg:h-[180px] border-solid border-2 border-[#6a6767] bg-transparent'/>

      <button type='submit' className="
    self-center w-fit px-5 py-3 text-3xl rounded-2xl
    text-white transition-all duration-300
    hover:scale-110
    hover:![background-image:linear-gradient(144deg,#AF40FF,#5B42F3_50%,#00DDEB)]
  "
    style={{
    backgroundImage:
      "linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)",
    border: "none",
    boxShadow:
      "rgba(0, 0, 0, .2) 0 3px 5px -1px, rgba(0, 0, 0, .14) 0 6px 10px 0, rgba(0, 0, 0, .12) 0 1px 18px 0",
    color: "#3c4043",
  }}  
      >Submit</button>
      </form>
    </motion.div>
    
  )
}

export default Contact



