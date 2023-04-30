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
            console.log('append in picture is called ,',action?.payload);
            state.activeIndex=action?.payload;
        }
    }
})
export const {addPicture} = ImageSlice.actions
export default ImageSlice.reducer