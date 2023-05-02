import React, {useContext, useRef, useState,Fragment} from 'react';
import "./LeftPanel.css"
import {addPicture} from "../../features/ImageSlice";
import {useDispatch,useSelector} from "react-redux";
const allowedTypes = [
    'image/png',
    'image/jpeg',
];

const LeftPanel = () => {
    // let {setCurrentAction} = useContext(CanvasStore);
    const {activeIndex} = useSelector((state)=> state?.ImageReducer)
    const [imageCollection, setImageCollection] = useState([])
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

    return (
        <Fragment>

        
        <div className="left-panel">
            <div className="gallery-wrapper">
                <button className='primary-btn' onClick={uploadFile}>Upload</button>
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
                <div className='d-flex flex-column'>
                   <p className='text-success m-0 p-0'>Propmt</p>            
                   <small className='text-white text-justify text-wrap'>{activeIndex?.imgDisc} </small>
                </div>
            </div>
        </div>
    </Fragment>
    );
}
export default LeftPanel;