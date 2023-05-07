import React,{Fragment} from 'react'
import { useSelector } from 'react-redux'
import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom'
import Gernrate from '../views/genrate'
import Home from '../views/Home'
const AppRoutes = () => {
    const {themeMode} = useSelector((state)=> state?.ImageReducer);
    const routes = [
        {
            path:'/',
            Component:Home
        },
        {
            path:'/genrate',
            Component:Gernrate
        }
    ]
  return (
    <Fragment>
       <div className='conatiner-fluid m-0 p-0' style={{backgroundColor:themeMode==='dark'?'#27272a':'#e9ecef'}}>
        <Router>
         <Routes>
             {
                 routes.map(({path,Component})=>(
                     <Route
                       key={path}
                       path={path}
                       element={<Component/>}
                       ></Route>
                       ))
                    }
         </Routes>
      </Router>
     </div> 
    </Fragment>
  )
}

export default AppRoutes