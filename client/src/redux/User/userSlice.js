import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    currentUser : false,
    error:null,
    loading:false
}
const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        SignInStart:(state)=>{
            state.loading=true
        },
        //signInSUcess
        SignInSuccess:(state,action)=>{
            state.currentUser = action.payload,
            state.loading=false,
            state.error=null
        },
        SingInFailure:(state,action)=>{
            state.currentUser = action.payload,
            state.loading=false
        }

    }
})

export const {SignInStart,SignInSuccess,SingInFailure} =userSlice.actions;
export default userSlice.reducer;