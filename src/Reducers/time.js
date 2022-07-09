import {createSlice} from '@reduxjs/toolkit';



const sliceName= createSlice({
    name:'names',
    initialState:{name:'vacio',email:'',newProfileValues:''},
    reducers:{
        loginUser:(state,action)=>{           
        return  {...state,email:action.payload}
        },
        dashboard:(state,action)=>{
        return  { ...state,   name: action.payload} // aasi clono el estado inicial
        },  
        profile:(state,action)=>{
            return{...state, newProfileValues:[action.payload]}
        }    
    }
})
export const {loginUser,dashboard,profile}=sliceName.actions;

export default sliceName.reducer;