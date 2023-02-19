import { configureStore } from "@reduxjs/toolkit";
import { commonSlice } from "./slices/commonSlice";

const reducer = {
    common: commonSlice.reducer,
};


const store = configureStore({
    reducer
});



export default store;

export type RootState = ReturnType<typeof store.getState>;
