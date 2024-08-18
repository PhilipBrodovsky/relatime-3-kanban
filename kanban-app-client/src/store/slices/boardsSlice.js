import { createSlice } from "@reduxjs/toolkit";

export const boardsSlice = createSlice({
	name: "boards",
	initialState: {
		boards: [],
		selectedBoardId: "",
	},
	reducers: {
		setBoards: (state, action) => {
			state.boards = action.payload;
		},
		addBoard: (state, action) => {
			state.boards.push(action.payload);
		},
		selectBoard(state, action) {
			state.selectedBoardId = action.payload;
		},
	},
	selectors: {
		selectedBoard: (sliceState) => {
			const selectedBoard = sliceState.boards.find(
				(board) => board.id === sliceState.selectedBoardId
			);

			return selectedBoard;
		},
	},
});
