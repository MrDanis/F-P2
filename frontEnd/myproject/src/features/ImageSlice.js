import { createSlice } from '@reduxjs/toolkit'
import { data } from '../data'

 const initialState = {
    imagesData:data,
    activeIndex:null,
    themeMode:'dark'
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
        },
        changeTheme:(state,action)=>{
         if(state.themeMode === 'dark'){
            state.themeMode = action.payload.mode;
         }
         else{
            state.themeMode='dark'
         }
        }
    }
})
export const {addPicture,addPictureTwo,handleLiked,changeTheme} = ImageSlice.actions
export default ImageSlice.reducer