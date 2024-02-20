import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    heading : 'Import Url',
}

export const headingSlice = createSlice({
    name: 'heading',
    initialState,
    reducers: {
        update_heading: (state) => {
            state.heading = 'Export Url';
        }
    }
})
 
export const { update_heading } = headingSlice.actions;
export default headingSlice.reducer;