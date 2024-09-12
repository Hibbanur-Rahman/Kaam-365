import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    name: "sidebar",
    initialState: {
        openSidebar: true,
    },
    reducers:{
        toggleSidebar(state) {
            state.openSidebar = !state.openSidebar;
        }
    }
});

export const {toggleSidebar}=sidebarSlice.actions;
export default sidebarSlice.reducer;
