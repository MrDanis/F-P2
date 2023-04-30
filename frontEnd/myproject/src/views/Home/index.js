import React,{useState} from 'react'
import globalStyles from '../../assets/styles/global.module.css'
import styles from'./home.module.css'
import {BsSearch} from 'react-icons/bs'
import Main from '../../layout/main'
import { useSelector,useDispatch } from 'react-redux'
import { addPicture } from '../../features/ImageSlice'
const Home = () => {
    const [columnRange,setcolumnRange] = useState(1);
    const dispatch = useDispatch();
    const {imagesData} = useSelector((state)=> state?.ImageReducer);
    const handleChange = (event) => {
        setcolumnRange(event.target.value);
    };
    const handleDispatch =(updateImageIndex)=>{
       dispatch(addPicture(updateImageIndex));
    }  
  return (
    <Main>
     <div className='d-flex flex-column flex-wrap mt-5'>
        <h1 className={`text-white text-center ${styles.leadText}`}>
            Lexica
        </h1>
        <p className='my-2 fs-6 text-muted fw-normal text-center mx-1'>Lexica is hiring! <a className='text-muted fw-bold'>Learn more</a></p>
        {/* search bar start */}
        <div className='d-flex flex-wrap w-50 mt-4 align-items-center justify-content-center align-self-center'>
           <div className={`w-75 d-flex m-0 py-1 px-3 p-2 align-self-center ${styles.searchInput}`}>
             <div className='w-75 d-flex align-items-center justify-content-center'>
               <BsSearch className={`${styles.iconsColor}`} />
               <input className='w-100 bg-transparent border-0 mx-2' placeholder='Search for an image'/>
             </div>
             <div className='w-25 d-flex align-items-center justify-content-end'>
                <button className='btn m-0 p-0 bg-transparent outline-none shadow-none'>
                  <svg stroke="white" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                </button>
             </div>
           </div>
        </div>
        {/* search bar start */}
        {/* for web view start */}
        <div className='d-none d-lg-flex mt-4 mx-auto align-items-center justify-content-center gap-3 w-50'>
            <button className={`btn w-25 ${globalStyles.searchButtons}`}>Search</button>
            <button className={`btn w-25 ${globalStyles.genrateButton}`}>Genrate</button>
        </div>
        {/* for web view END */}
        {/* for Mobile view start */}
        <div className='d-flex flex-cloumn d-lg-none mt-4 mx-auto align-items-center justify-content-center gap-3 w-50'>
            <button className={`btn w-50 ${globalStyles.searchButtons}`}>Search</button>
            <button className={`btn w-50 ${globalStyles.genrateButton}`}>Genrate</button>
        </div>
        {/* for Mobile view end */}
        <div className='d-flex flex-column mt-4 mx-auto align-items-center justify-content-center w-50'>
           <p className='text-muted fw-normal'>Columns {columnRange}</p>
           <input
           style={{cursor:'pointer'}}
           type="range"
           min="1"
           max="12"
           value={columnRange}
           onChange={handleChange}
           className='w-50'
           />
        </div>
     </div>
        {/* Picture container start */}
        <div className='container-fluid m-0 px-3 p-0 border border-0 border-success'>
          <div className='row m-0 pt-4 p-0'>
             {
               imagesData?.map((item,index)=>{return(
                  <>
                  {
                    columnRange<5?
                      <div key={item.imgurl} className={`col-${12/columnRange} p-2`}>
                         {/* /Card Box START*/}
                         <div onClick={()=>{handleDispatch(index)}} className='d-flex border border-0 border-success' style={{borderRadius:'10px',height:'350px'}}>
                           <img className='img-fluid m-0 p-0 w-100' src={item?.imgurl} style={{objectFit:'fill',borderRadius:'10px'}}/>       
                         </div>
                         {/* /Card Box END*/}
                      </div>:
                      <div className='p-2' style={{width:`${100/columnRange}%`}} >
                      {/* /Card Box START*/}
                      <div className='d-flex border border-0 border-success' style={{borderRadius:'10px',height:'350px'}}>
                      <img className='img-fluid m-0 p-0 w-100' src={item?.imgurl} style={{objectFit:'fill',borderRadius:'10px'}}/>       
                      </div>
                      {/* /Card Box END*/}
                   </div>
                  }
                  </>
                )})
             }
          </div>
        </div>
    </Main>

  )
}

export default Home
// {/* <div className='container-fluid m-0 p-0'>
// <Header/>
// <div className='container-fluid mt-5 pt-5 m-0 p-0 border border-0 border-success'>
 
// </div>
// <div className='d-flex flex-column flex-wrap mt-5'>
//    <h1 className={`text-white text-center ${styles.leadText}`}>
//        Lexica
//    </h1>
//    <p className='my-2 fs-6 text-muted fw-normal text-center mx-1'>Lexica is hiring! <a className='text-muted fw-bold'>Learn more</a></p>
//    {/* search bar start */}
//    <div className='d-flex flex-wrap w-50 mt-4 align-items-center justify-content-center align-self-center'>
//       <div className={`w-75 d-flex m-0 py-1 px-3 p-2 align-self-center ${styles.searchInput}`}>
//         <div className='w-75 d-flex align-items-center justify-content-center'>
//           <BsSearch className={`${styles.iconsColor}`} />
//           <input className='w-100 bg-transparent border-0 mx-2' placeholder='Search for an image'/>
//         </div>
//         <div className='w-25 d-flex align-items-center justify-content-end'>
//            <button className='btn m-0 p-0 bg-transparent outline-none shadow-none'>
//              <svg stroke="white" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
//            </button>
//         </div>
//       </div>
//    </div>
//    {/* search bar start */}
//    <div className='d-flex mt-4 mx-auto align-items-center justify-content-center gap-3 w-50'>
//        <button className={`btn w-25 ${globalStyles.searchButtons}`}>Search</button>
//        <button className={`btn w-25 ${globalStyles.genrateButton}`}>Genrate</button>
//    </div>
//    <div className='d-flex flex-column mt-4 mx-auto align-items-center justify-content-center w-50'>
//       <p className='text-muted fw-normal'>Columns {columnRange}</p>
//       <input
//       style={{cursor:'pointer'}}
//       type="range"
//       min="1"
//       max="12"
//       value={columnRange}
//       onChange={handleChange}
//       className='w-50'
//       />
//    </div>
// </div>
//    {/* Picture container start */}
//    <div className='container-fluid m-0 px-3 p-0 border border-0 border-success'>
//      <div className='row m-0 pt-4 p-0'>
//         {
//            data.map((item)=>{return(
//              <>
//              {
//                columnRange<5?
//                  <div key={item.imgurl} className={`col-${12/columnRange} p-2`}>
//                     {/* /Card Box START*/}
//                     <div className='d-flex border border-0 border-success' style={{borderRadius:'10px',height:'350px'}}>
//                       <img className='img-fluid m-0 p-0 w-100' src={item?.imgurl} style={{objectFit:'fill',borderRadius:'10px'}}/>       
//                     </div>
//                     {/* /Card Box END*/}
//                  </div>:
//                  <div className='p-2' style={{width:`${100/columnRange}%`}} >
//                  {/* /Card Box START*/}
//                  <div className='d-flex border border-0 border-success' style={{borderRadius:'10px',height:'350px'}}>
//                  <img className='img-fluid m-0 p-0 w-100' src={item?.imgurl} style={{objectFit:'fill',borderRadius:'10px'}}/>       
//                  </div>
//                  {/* /Card Box END*/}
//               </div>

//              }
             
//              </>

//            )})
//         }
//      </div>
//    </div>
// </div> */}