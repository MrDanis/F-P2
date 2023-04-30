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
        }
    }
})
export const {addPicture} = ImageSlice.actions
export default ImageSlice.reducer