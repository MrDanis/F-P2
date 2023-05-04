import React, {useContext, useRef, useState,Fragment} from 'react';
import "./LeftPanel.css"
import {addPicture} from "../../features/ImageSlice";
import {useDispatch,useSelector} from "react-redux";
import {PromptBtn} from "../../assets/icons";
const allowedTypes = [
    'image/png',
    'image/jpeg',
];

const LeftPanel = () => {
    // let {setCurrentAction} = useContext(CanvasStore);
    const {activeIndex,themeMode} = useSelector((state)=> state?.ImageReducer)
    const [imageCollection, setImageCollection] = useState([])
    const [promptText, setPromptText] = useState('Simon stalenhag poster 1920s style, futuristic, futuristic leather womenswear,')
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
    const handleDispatch =(updateImageIndex)=>{
        dispatch(addPicture(updateImageIndex));
    }

    const newInputHandler = async (event) => {
        const file = event.target.files[0]
        if (allowedTypes.indexOf(file.type) !== -1) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = async (e) => {
                let newImage = {imageurl: e.target.result};
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
   // #1b1b1e
    return (
        <Fragment>

        
        <div className={`left-panel-${themeMode}`}>
            <div className="gallery-wrapper">
                <div className='d-flex flex-wrap justify-content-between mb-1 gx-2'>
                    <button className={`border-0 py-2 rounded btn-${themeMode}  shadow`} style={{width:'49%'}}>Generate</button>
                    <button className={`border-0 py-2 rounded btn-${themeMode}  shadow`} style={{width:'49%'}}>Edit</button>
                </div>
                <button className={`mt-2 border-0 py-2 rounded btn-${themeMode} w-100 shadow`} onClick={uploadFile}>Upload</button>
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
                    <div className='d-flex justify-content-between p-2' onClick={toggleTextarea}>
                        <p className={`text-${themeMode==='dark'?'light':'dark'} m-0 p-0`}>Prompt</p>
                        <PromptBtn/>
                    </div>
                    {toggleText &&
                        <textarea className="textarea-setting form-control" value={promptText} onChange={onChaneText}/>
                    }
                </div>
                <div className='d-flex flex-column mb-2'>
                    <div className='p-2' onClick={settingToggle}>
                        <p className={`text-${themeMode==='dark'?'light':'dark'} m-0 mb-0 p-0`}>Settings</p>
                    </div>
                    {toggleSetting &&
                        <div className=' ps-2 pl-3 pr-3'>
                            <p className={`text-${themeMode==='dark'?'light':'dark'} my-4`}>Modal</p>
                            <small className='text-muted text-justify text-wrap py-2'>{activeIndex?.modal} </small>
                            <p className={`text-${themeMode==='dark'?'light':'dark'} my-4`}>Guidance scale</p>
                            <small className='text-muted text-justify text-wrap'>{activeIndex?.scale} </small>
                            <p className={`text-${themeMode==='dark'?'light':'dark'} my-4`}>Dimensions</p>
                            <small className='text-muted text-justify text-wrap'>{activeIndex?.dimension} </small>
                            <p className={`text-${themeMode==='dark'?'light':'dark'} my-4`}>Upscaled</p>
                            <small className='text-muted text-justify text-wrap'>{activeIndex?.upScaled} </small>
                        </div>
                    }
                    </div>
            </div>
        </div>
    </Fragment>
    );
}
export default LeftPanel;