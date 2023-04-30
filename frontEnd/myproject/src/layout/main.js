import React from 'react'
import Header from '../Components/header'
import LeftPanel from "../Components/leftPanel/leftPanel";
import { useSelector,useDispatch } from 'react-redux'
const Main = ({children}) => {
  const {activeIndex} = useSelector((state)=> state?.ImageReducer);
  return (
    <div className='container-fluid m-0 p-0'>
      <Header/>
     <div className='container-fluid mt-5  m-0 p-0 border border-0 border-success'>
      
     </div>
     <div className='container-fluid m-0 p-0'>
      <div className='row m-0 p-0'>
          <div className='col-4 col-md-2 col-lg-2'>
              <LeftPanel/>
          </div>
          <div className='col-8 col-md-10 col-lg-10'>
             {children}
          </div>
      </div>
     </div>
    </div>
  )
}

export default Main