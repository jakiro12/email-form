import {createSlice} from '@reduxjs/toolkit';



const sliceName= createSlice({
    name:'names',
    initialState:{name:'vacio',email:'',mensaje:''},
    reducers:{
        loginUser:(state,action)=>{           
        return  {...state,email:action.payload}
        },
        dashboard:(state,action)=>{
        return  { ...state,   name: action.payload} // aasi clono el estado inicial
        },
        msgcontroller:(state,action)=>{
            let arr=[]
            return{...state, mensaje:arr.concat(action.payload)}
        }
                
        

    }
})
export const {loginUser,dashboard,msgcontroller}=sliceName.actions;

export default sliceName.reducer;