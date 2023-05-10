import React from 'react'
import Header from '../Components/header'
import LeftPanel from "../Components/leftPanel/leftPanel";
import './index.css'
const Main = ({children}) => {
  return (
    <div className='container-fluid m-0 p-0 home-page'>
      <Header>
           <LeftPanel>
              {children}
           </LeftPanel>
      </Header>
      {/* <Header/>
     <div className='container-fluid p-0'>
      <div className='row m-0 p-0 home-page'>
          <div className='col-4 col-md-2 col-lg-2 side-bar'>
              <LeftPanel/>
          </div>
          <div className='col-8 col-md-10 col-lg-10 right-side'>
             {children}
          </div>
      </div>
     </div> */}
    </div>
  )
}

export default Main