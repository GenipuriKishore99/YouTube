import {createSlice} from '@reduxjs/toolkit';
const showHide=createSlice({
    name:"app",
    initialState:{
        isOpen:true
    },
    reducers:{
        toggleOpen:(state)=>{
            state.isOpen=!state.isOpen

        },
        closeMenu:(state)=>{
            state.isOpen=false
        }
    }
})

export const {toggleOpen,closeMenu} =showHide.actions;

export default showHide.reducer;