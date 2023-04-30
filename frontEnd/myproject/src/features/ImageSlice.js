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
            const newImageData = {...action.payload};
            console.log('new image data',newImageData);
            state.imagesData.push(newImageData);

        }
    }
})
export const {addPicture} = ImageSlice.actions
export default ImageSlice.reducer