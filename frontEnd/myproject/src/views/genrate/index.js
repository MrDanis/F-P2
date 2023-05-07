import React,{useState} from 'react'
import Main from "../../layout/main";
import { useSelector } from 'react-redux';
import style from '../../assets/styles/global.module.css'
import styles from '../Home/home.module.css'
import {BsPlus} from 'react-icons/bs'
import {AiOutlineBars} from 'react-icons/ai'
import {MdOutlineArrowDropDown} from 'react-icons/md'
const Gernrate = () => {
  const {themeMode} = useSelector((state)=> state?.ImageReducer);
  const [columnRange,setcolumnRange] = useState(1);
  const [columnRange2,setcolumnRange2] = useState(1);
  const handleChange = (event) => {
    setcolumnRange(event.target.value);
  };
  const handleChange2 = (event) => {
    setcolumnRange2(event.target.value);
  };
  return (
  <Main>
    <div className='container-fluid mt-5 m-0  pt-2 p-0'>
       <div className='row m-0 p-0'>
          <div className='col-12 col-sm-7 col-md-8 col-lg-9 m-0 p-2'>
            <div className='d-flex flex-column m-0 p-0 border border-0 border-danger'>
              <label className='text-muted fs-6 mb-2'>
                 Describe your image
              </label>
              <textarea className={`text-${themeMode === 'dark' ? 'light' : 'dark'} mb-3 p-2 bg-${themeMode} border-1 outline-none ${styles.customInputStyle}`} placeholder='A steampunk teddy bear vending machine' style={{height:'100px',borderRadius:'15px'}}></textarea>
              <label className='text-muted fs-6 mb-2'>
                 Nevigate prompt
              </label>
              <textarea className={`text-${themeMode === 'dark' ? 'light' : 'dark'} border-1 p-2 outline-none bg-${themeMode} ${styles.customInputStyle}`} placeholder='text,blurry' style={{borderRadius:'15px'}}></textarea>
              <button className={`mt-3 ms-auto border-0 m-0 pt-1 p-2 d-flex alirgn-items-center justify-content-center shadow ${style.searchButtons}`} style={{width:'15%'}}>genrate</button>
            </div>
          </div>
          <div className='col-12 border border-0 col-sm-5 col-md-4 col-lg-3 mt-2 m-0 px-3 p-2'>
          <div className='d-flex flex-column flex-wrap mt-4 m-0 p-0 shadow'style={{borderRadius:'10px',border:themeMode === 'dark' ? '1px solid #212529' : '1px solid silver'}}>
            {/* uploadimage button */}
            <button className={`p-1 align-self-end outline-none w-50 d-flex align-items-center flex-wrap bg-${themeMode} border-0 border-${themeMode} shadow ${style.uploadImage}`}><BsPlus style={{color:'#939395'}}/> <small className='mx-1 text-muted' style={{fontSize:'.5rem'}}>Upload Image</small></button>
            {/* dimensions */}
            <div className='d-flex flex-wrap m-0 px-2 py-2 p-0'>
              <input
               style={{cursor:'pointer'}}
               type="range"
               min="1"
               max="12"
               value={columnRange}
               onChange={handleChange}
               className={`w-100 ${themeMode==='dark'?'':styles.rangeSliderLight} rounded`}/>
            </div>
            {/* img size value */}
            <div className='d-flex flex-wrap align-items-center justify-content-evenly m-0 p-0'>
            <svg stroke={themeMode === 'dark' ? 'white' : 'gray'} fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
            <small className={`text-${themeMode === 'dark' ? 'muted' : 'dark'} m-0 p-0`}>768 x 1152</small>
            <svg stroke={themeMode === 'dark' ? 'white' : 'gray'} fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
            </div>
            {/* advance settings */}
            <div>
              <button className="ms-2 mt-2 btn d-flex align-items-center outline-none shadow-none border-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
               <MdOutlineArrowDropDown style={{color:'#939395'}}/>
               <small className='text-muted'>Advanced settings</small>
              </button>
              <div class="collapse" id="collapseExample">
                 <div className="card card-body bg-transparent d-flex flex-column flex-wrap border-0">
                    <div className='d-flex align-items-center text-wrap border border-0 border-success'>
                       <AiOutlineBars style={{color:'#939395'}} />
                       <small className='text-muted mx-2'>Modal Type</small>
                    </div>
                    <div className="d-flex flex-wrap w-75 my-2 btn-group border border-0 border-danger">
                      <button type="button d-flex align-items-center" className={`w-100 btn btn-${themeMode} dropdown-toggle outline-none sahdow p-1 text-start`} data-bs-toggle="dropdown" aria-expanded="false">
                      <small className='text-wrap px-2' style={{fontSize:'.75rem'}}>Lexica Aperture v3</small>  
                      </button>
                      <ul className={`dropdown-menu align-items-center pb-1 p-0 bg-${themeMode==='dark'?'dark':'light'} w-50`}>
                        <li className={`text-center border-1 p-0 bg-transparent ${styles.selectModal}`}>
                          <a className={`m-0 p-0 text-${themeMode==='dark'?'light':'dark'} dropdown-item`} href="#">
                            <small style={{fontSize:'.75rem'}}>
                             Lexica Aperture v2
                            </small>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className='d-flex flex-wrap w-100'>
                         <div className='d-flex flex-wrap 75'>
                          <p className='d-flex align-items-center flex-wrap mt-2'>
                            <svg stroke="#939395" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="mr-2 text-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
                            <small className='text-muted mx-2'>Guidance scale</small>
                          </p>  
                         </div>
                         <div className='d-flex flex-wrap align-items-center w-25'>
                            <small className={`ms-auto text-${themeMode==='dark'?'light':'dark'}`}>7</small>   
                         </div>
                         <div className='d-flex flex-wrap m-0 px-2 py-2 p-0 w-100'>
                                <input
                                 style={{cursor:'pointer'}}
                                 type="range"
                                 min="1"
                                 max="12"
                                 value={columnRange2}
                                 onChange={handleChange2}
                                 className={`w-100 ${themeMode==='dark'?'':styles.rangeSliderLight} rounded`}/>
                              </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
          </div>
       </div>
    </div>
      </Main>
  )
}
export default Gernrate