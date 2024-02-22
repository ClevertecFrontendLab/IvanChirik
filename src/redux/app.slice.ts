import { PayloadAction, createSlice } from "@reduxjs/toolkit";


const initialAppState = {
    collapsed: false,
};

export const appSlice = createSlice({
    name: 'app',
    initialState: initialAppState,
    reducers: {
        setCollapsed: (state, action: PayloadAction<boolean>) => {
            state.collapsed = action.payload;
        },
    },
});

export const appActions = appSlice.actions;
export default appSlice.reducer;