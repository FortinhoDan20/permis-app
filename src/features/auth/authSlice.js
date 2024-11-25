import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import history from "../../history"
import { toast } from "react-toastify"



const initialUser = localStorage.getItem('auth')
	? JSON.parse(localStorage.getItem('auth'))
	: null;

const initialState = {
    isLoading: false,
    currentUser: initialUser,
    error: null

}


export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        loginSuccess: (state, action) =>{
            state.currentUser = action.payload
            state.isLoading = false
        },
        loginFailure: (state, action) =>{
            state.error = action.payload
        },
        logoutSuccess : (state) =>{
            state.currentUser = null
        }
    } 
})

export const {loginFailure, loginSuccess, logoutSuccess,} = authSlice.actions;
export default authSlice.reducer

export const signin  = (formValue) => async(dispatch) => {
    try {
        const response = await axios.post('http://localhost:5000/api-user/login', formValue)
        
        console.log("response :", response)
        if(response){
            localStorage.setItem('auth', JSON.stringify(response.data))
            dispatch(loginSuccess(response.data))

            history.push('/')
            toast.success(response.data.data.message)
        }else{
            dispatch(loginFailure())
            toast.error(response.data.message)
        }
    } catch (error) {
        dispatch(loginFailure())
    }
}