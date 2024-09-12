import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./slice/sidebarSlice";

const store=configureStore({
    reducer:{
        sidebar:sidebarSlice
    }
})

export default store;