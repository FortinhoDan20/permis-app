import { createSlice, current } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from 'react-toastify'


const initialUser = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : null


    const initialState = {
        loading: false,
        user: initialUser,
        allUsers: {},
        error: null
    
    }
    
    
    export const userSlice = createSlice({
        name: 'user',
        initialState: initialState,
        reducers: {
            addUserPending: (state, action) =>{
                state.loading = true
            },
            addUserFulfilled: (state, action) =>{
                state.loading = true
                state.user = action.payload
            },
            addUserFailure: (state, action) =>{
                state.error = action.payload.message
            },
            getAllUserPending: (state, action) =>{
                state.loading = true
            },
            getAllUserFulfilled: (state, action) =>{
                state.loading = true
                state.allUsers = action.payload.data
            },
            getAllUserFailure: (state, action) =>{
                state.error = action.payload.message
            },
        } 
    })
    
    export const { addUserPending, addUserFulfilled, addUserFailure, getAllUserPending, getAllUserFulfilled, getAllUserFailure } = userSlice.actions
    export default userSlice.reducer
    
    export const addUser = ( formValue ) => async (dispatch) => {
        
            const response = await axios.post('http://localhost:5000/api-user/add', formValue)
            if(response){
                localStorage.setItem('user', JSON.stringify(response.data))
                dispatch(addUserFulfilled(response.data))
                toast.success("l'utilisateur a été ajouté avec succès")
                history.push('/list-utilisateur')
                window.location.reload
            }else{
                dispatch(addUserFailure())
                toast.error('registration failed')
            }
    }

    export const getAllUsers =(token) => async (dispatch) => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
        console.log('token config :', token, config )
        try {
 const response = await axios.get('http://localhost:5000/api-user/', config)
            console.log(response.data.data)
                        if(response){
                dispatch(getAllUserFulfilled(response.data))
               

            } 
        } catch (error) {
            if(error.response.status === 400){
                dispatch(getAllUserFailure())
            }
        }
    }
    
    