import { createSlice } from "@reduxjs/toolkit";

export const boardsSlice = createSlice({
	name: "boards",
	initialState: {
		boards: [],
	},
	reducers: {
		setBoards: (state, action) => {
			state.boards = action.payload;
		},
		addBoard: (state, action) => {
			state.boards.push(action.payload);
		},
	},
	selectors: {
		selectedBoard: (sliceState, selectedBoardName) => {
			const selectedBoard = sliceState.boards.find((board) => board.name === selectedBoardName);

			return selectedBoard;
		},
	},
});
