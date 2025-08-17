import { motion } from "motion/react"
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./components/pages/Home";
import Country from "./components/pages/Country";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Layout from "./components/Layout/Layout";
import { Error } from "./components/UI/Error";
import CountryDetails from "./components/UI/CountryDetails";

const App=()=>{
  const route=createBrowserRouter([
    {
      path:'/',
      element: <Layout/>,
      errorElement:<Error/>,
      children:[
    {
      path:"/",
      element: <Home/>
    },
    {
      path:"/home",
      element: <Home/>
    },

    {
      path:"/contact",
      element: <Contact/>
    },
     
    {
      path:"/about",
      element: <About/>
    },

    {
      path:"/country",
      element: <Country/>
    },
    {
      path:"/country/:id",
      element: <CountryDetails/>

    },
      ]

    }
  ])

  return (

  <RouterProvider router={route}> </RouterProvider>
  );
}

export default App;