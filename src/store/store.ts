import { configureStore } from "@reduxjs/toolkit";
import messagesReducer from '../slice/messages';

const rootReducer = {
    message: messagesReducer,
}

const store = configureStore({
    reducer: rootReducer
})

export default store