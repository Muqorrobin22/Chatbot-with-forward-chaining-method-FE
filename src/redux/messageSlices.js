import {createSlice} from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name: "message",
    initialState: {
        messages: []
    },
    reducers: {
        addMessage: (state, action) => {
            state.messages.push(action.payload);
        }
    }
})

export const {addMessage} = messageSlice.actions;
export default messageSlice.reducer;