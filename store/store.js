import { configureStore } from "@reduxjs/toolkit"
import counterReducer from '@/features/counters/counterSlice'
import {api} from '@/services/api'

const store= configureStore({
    reducer:{
        counters: counterReducer,
        [api.reducerPath]:api.reducer // this is a single feature. you can add multiple features here. 
    },
   middleware:(getDefaultMiddleWare)=>getDefaultMiddleWare().concat(api.middleware)
})

export default store;