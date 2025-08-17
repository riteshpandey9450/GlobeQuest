import {useNavigate, useRouteError,NavLink } from "react-router";
export const Error=()=>{
     const error=useRouteError();
     const navigate=useNavigate();
    //  const HandleNavigate=()=>{
    //     navigate(-1);
    //  }
             console.log(error);
             console.log(error.status);
             if(error.status ==404){
                return(
                    <section className="flex flex-col  items-center">
                    <img src="/404-error-img.webp" alt="img"  className="px-7"/>
                    <p className="text-slate-50 tracking-wider text-3xl">Error 404 This Page not Found</p>
                    <button className="bg-orange-800 p-5 mt-10 rounded-xl"><NavLink to="/" className="text-slate-50">Go to Home Page</NavLink></button>
                    <button className="bg-orange-800 px-7 py-4 mt-10 rounded-xl text-2xl text-slate-50" onClick={()=> {console.log(navigate);navigate(-1)}}>Go Back</button>
                    </section>
                );
             }  
    return(
        <section className="text-center text-black" >
            
            <h1>Enter valid path This Page Not Found</h1>
        </section>
    );
}