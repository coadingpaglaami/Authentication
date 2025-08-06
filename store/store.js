import { configureStore } from "@reduxjs/toolkit"
import counterReducer from '@/features/counters/counterSlice'

const store= configureStore({
    reducer:{
        counters: counterReducer // this is a single feature. you can add multiple features here. 
    }
})

export default store;