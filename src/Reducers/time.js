import {createSlice} from '@reduxjs/toolkit';

const firstState={name:'newUser'}

const sliceName= createSlice({
    name:'names',
    initialState:{value:firstState},
    reducers:{
        loginUser:(state,action)=>{
            state.value=action.payload
        },
        dashboard:(state,action)=>{
            state.value= firstState
        },
    }
})
export const {loginUser,dashboard}=sliceName.actions;

export default sliceName.reducer;