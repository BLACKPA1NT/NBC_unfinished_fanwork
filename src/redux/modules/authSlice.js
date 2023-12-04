// src/redux/modules/todosSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	auth: [],
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {},
});

export const {} = authSlice.actions;
export default authSlice.reducer;
