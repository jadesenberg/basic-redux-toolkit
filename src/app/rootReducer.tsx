import { combineReducers } from "@reduxjs/toolkit";
import items from "features/items/ItemSlice";

const rootReducer = combineReducers({ items });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
