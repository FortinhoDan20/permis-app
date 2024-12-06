import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    category: {},
    categories: [],
    error: "",
    loading: false
}
const categorySlice = createSlice({
    name: "Category",
    initialState,

    reducers: {
        
        addPending: (state) => {
            state.loading = true
        },
        addFulfilled: (state, action) => {
            state.loading = true
            state.category = action.payload
        },
        addFailure: (state, action) => {
            state.error = action.payload.message
        },
        allCategoryPending: (state) => {
            state.loading = true
        },
        allCategoryFulfilled: (state, action) =>{
            state.loading = true
            state.allUsers = action.payload.data
        },
        allCategoryFailure: (state, action) =>{
            state.error = action.payload.message
        },


    }

})

export const {addPending, addFulfilled, addFailure, allCategoryPending, allCategoryFulfilled, allCategoryFailure } = categorySlice.actions
export default categorySlice.reducer


export const getAllCategories =(token) => async (dispatch) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }
    console.log('token config :', token, config )
    try {
        const response = await axios.get('https://permis-api-tsjz.onrender.com/api-category/', config)
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