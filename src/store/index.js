import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainReducer from "./main/reducer";
import profileReducer from './profile/reducer';

const appReducer = combineReducers({
    mainReducer,
    profileReducer
})

const store = configureStore({ reducer: appReducer });

export default store;