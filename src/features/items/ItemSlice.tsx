import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, AppDispatch } from "app/store";

import { Item } from "./types";

interface ItemData {
	data: Item[];
	error: boolean;
}

const initialState: ItemData = {
	data: [],
	error: false
};

const itemsSlice = createSlice({
	name: "items",
	initialState,
	reducers: {
		addItem(state, action: PayloadAction<Item>) {
			state.data.push(action.payload);
			state.error = false;
		},
		deleteItem(state, action) {
			let items = state.data.filter(item => item.id !== action.payload);

			state.data = items;
		}
	}
});

export const addItem = (id: number, name: string): AppThunk => async (
	dispatch: AppDispatch
) => {
	const item = {
		id,
		name
	};

	dispatch(itemsSlice.actions.addItem(item));
};

export const deleteItem = (id: number): AppThunk => async (
	dispatch: AppDispatch
) => {
	dispatch(itemsSlice.actions.deleteItem(id));
};

export default itemsSlice.reducer;
