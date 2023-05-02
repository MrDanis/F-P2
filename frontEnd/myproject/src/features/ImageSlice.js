import { createSlice } from '@reduxjs/toolkit'
import { data } from '../data'

 const initialState = {
    imagesData:data,
    activeIndex:null
  }
export const ImageSlice = createSlice({
    name:'ImageCard',
    initialState:initialState,
    reducers:{
        addPicture:(state,action)=>{
            const newImageData = {...action.payload};
            state.imagesData.push(newImageData);
        },
        addPictureTwo:(state,action)=>{
            console.log(action?.payload?.index)
            state.activeIndex=state.imagesData[action?.payload?.index];
        }
        ,
        handleLiked:(state,action)=>{
            if(state?.imagesData[action?.payload?.indexAt]?.isLike){
                state.imagesData[action?.payload?.indexAt].isLike=false;
            }
            else{
                state.imagesData[action?.payload?.indexAt].isLike=true;
            }
           console.log('Payload for the Like is : ',action.payload)
        }
    }
})
export const {addPicture,addPictureTwo,handleLiked} = ImageSlice.actions
export default ImageSlice.reducer