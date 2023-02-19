import { createSlice } from "@reduxjs/toolkit";

interface CommonState {
    error?: string;
}

export const initialState: CommonState = {
    error: undefined,
};

export const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        setError: (state, action) => {
            state.error = action.payload;
        },
        clearError: (state) => {
            state.error = undefined;
        }
    },
  
});

export const { setError, clearError } = commonSlice.actions;
