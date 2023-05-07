import React, { useEffect, useRef, useState, Fragment } from 'react';
import "./LeftPanel.css"
import { addPicture,updatePrompt } from "../../features/ImageSlice";
import { useDispatch, useSelector } from "react-redux";
import { PromptBtn } from "../../assets/icons";
import {IoMdCloudUpload} from 'react-icons/io'
const allowedTypes = [
    'image/png',
    'image/jpeg',
];

const LeftPanel = ({ children }) => {
    const { activeIndex, themeMode } = useSelector((state) => state?.ImageReducer)
    const [imageCollection, setImageCollection] = useState([])
    const [promptText, setPromptText] = useState('')
    const [toggleText, setToggleText] = useState(false)
    const [toggleSetting, setToggleSetting] = useState(false)
    const inputRef = useRef(null)
    const dispatch = useDispatch();
    let imageArray = []
    const handleDragStart = (e, url) => {
        if (!e) return;
        e.dataTransfer?.setData("imageUrl", url);
    };
    const onSetupAction = (e, action) => {
        // setCurrentAction(action)
    }
    const handleDispatch = (updateImageIndex) => {
        dispatch(addPicture(updateImageIndex));
    }
    const newInputHandler = async (event) => {
        const file = event.target.files[0]
        if (allowedTypes.indexOf(file.type) !== -1) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = async (e) => {
                let newImage = { imageurl: e.target.result };
                handleDispatch(newImage);
                imageArray.push(newImage);
                setImageCollection((prevData) => [
                    newImage, ...prevData
                ]);
            };
        } else {
            alert('Upload type is not allowed!');
        }
    };
    const uploadFile = () => {
        inputRef.current.click();
    };
    const onChaneText = (e) => {
        setPromptText(e.target.value)
    };
    const toggleTextarea = () => {
        setToggleText(!toggleText)
    };
    const settingToggle = () => {
        setToggleSetting(!toggleSetting)
    };
    useEffect(()=>{
        if(activeIndex===null)
        {
            setPromptText('');
        }
        else
        {
            setPromptText(activeIndex?.imgDisc)
            console.log(activeIndex?.imgDisc);
        }
    },[activeIndex])
    return (
        <Fragment>
            <div className='d-flex m-0 pt-2 p-0'>
                <div className={`px-2 left-panel-${themeMode}`}>
                    <div className="gallery-wrapper">
                        <div className='d-flex  flex-wrap justify-content-between mb-1 gx-2'>
                            <button className={`border-0 py-0 rounded btn-${themeMode}  shadow`} style={{ width: '49%', fontSize: '.75rem' }}>Generate</button>
                            <button className={`border-0 py-2 rounded btn-${themeMode}  shadow`} style={{ width: '49%', fontSize: '.75rem' }}>Edit</button>
                        </div>
                        <button className={`mt-2 border-0 p-1 rounded btn-${themeMode} w-100 shadow`} style={{ fontSize: '.8rem' }} onClick={uploadFile}>
                            <small className='mx-5'>Upload</small> 
                            <IoMdCloudUpload />
                        </button>
                        <input
                            ref={inputRef}
                            onChange={newInputHandler}
                            onClick={(e) => (e.target.value = null)}
                            multiple="multiple"
                            className="d-none"
                            type="file"
                            name="file"
                            accept=".jpg,.jpeg,.png"
                        />
                        <div className="images-grid-image-panel gallery-content gnr-m-0 image-grid">
                            {
                                imageCollection.length > 0 && imageCollection.map((item, key) => (
                                    <div className={`image-grid__images gnr-gallery-custom-style`}
                                        key={key}>
                                        <img
                                            onClick={() => onSetupAction("", "entity")}
                                            onDragStart={(e) => handleDragStart(e, item.imageUrl)}
                                            src={item.imageurl}
                                            height={90}
                                            width={90}
                                            alt="imageOb"
                                        />
                                    </div>
                                ))
                            }
                        </div>
                        <div className='d-flex flex-column mb-2'>
                            <div className='d-flex justify-content-between p-2' style={{ cursor: 'pointer' }} onClick={toggleTextarea}>
                                <p className={`text-${themeMode === 'dark' ? 'light' : 'dark'} m-0 p-0`} style={{ fontSize: '.85rem' }}>Prompt</p>
                                <PromptBtn />
                            </div>
                            {toggleText &&
                                <textarea className={`border border-1 border-${themeMode === 'dark' ? 'dark' : 'light'} px-2 p-1 bg-transparent shadow ImagePrompt text-${themeMode === 'dark' ? 'light' : 'dark'}`} style={{ fontSize: '.75rem', borderRadius: '.3rem' }} defaultValue={activeIndex?.imgDisc} value={promptText} onChange={onChaneText} />
                            }
                            <button className={`mt-3 border border-1 border-${themeMode==='dark'?'dark':''} btn btn-${themeMode} p-1`}  style={{fontSize:'.75rem'}} onClick={()=>{dispatch(updatePrompt({modalName:activeIndex?.modal,disc:promptText}))}}>Update</button>
                        </div>
                        <div className='d-flex flex-column mb-2'>
                            <div className='p-2' onClick={settingToggle}>
                                <p className={`text-${themeMode === 'dark' ? 'light' : 'dark'} m-0 mb-0 p-0`} style={{ fontSize: '.85rem', cursor: 'pointer' }}>Settings</p>
                            </div>
                            {toggleSetting &&
                                <div className=' ps-2 pl-3 pr-3'>
                                    <p className={`text-${themeMode === 'dark' ? 'light' : 'dark'} my-2`} style={{ fontSize: '.85rem' }}>Modal</p>
                                    <small className='text-muted text-justify text-wrap py-2'>{activeIndex?.modal} </small>
                                    <p className={`text-${themeMode === 'dark' ? 'light' : 'dark'} my-2`} style={{ fontSize: '.85rem' }}>Guidance scale</p>
                                    <small className='text-muted text-justify text-wrap'>{activeIndex?.scale} </small>
                                    <p className={`text-${themeMode === 'dark' ? 'light' : 'dark'} my-2`} style={{ fontSize: '.85rem' }}>Dimensions</p>
                                    <small className='text-muted text-justify text-wrap'>{activeIndex?.dimension} </small>
                                    <p className={`text-${themeMode === 'dark' ? 'light' : 'dark'} my-2`} style={{ fontSize: '.85rem' }}>Upscaled</p>
                                    <small className='text-muted text-justify text-wrap'>{activeIndex?.upScaled} </small>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                {children}
            </div>
        </Fragment>
    );
}
export default LeftPanel;