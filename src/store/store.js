import {configureStore} from "@reduxjs/toolkit";
import messageReducer from "../redux/messageSlices.js";

export const store = configureStore({
    reducer: {
        messagesArray: messageReducer
    }
})