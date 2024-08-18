import { configureStore, createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
	name: "theme",
	initialState: { isDarkMode: false },
	reducers: {
		// action + reducer
		toggleTheme: (state) => {
			state.isDarkMode = !state.isDarkMode;
		},
		setMode: (state, action) => {
			state.isDarkMode = action.payload;
		},
	},
});

export const store = configureStore({
	reducer: {
		[themeSlice.name]: themeSlice.reducer,
	}, // slices
});

// slice user - reducer
// slice boards - reducer
// tasks
