import React from 'react'
import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom'
import Gernrate from '../views/genrate'
import Home from '../views/Home'
const AppRoutes = () => {
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
  )
}

export default AppRoutes