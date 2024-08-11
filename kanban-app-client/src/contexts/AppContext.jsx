import { createContext, useContext, useState } from "react";

export const AppContext = createContext(null);

export function AppContextProvider({ children }) {
	const [boards, setBoards] = useState([]);
	const [selectedBoardId, setSelectedBoardId] = useState("");

	async function createBoard(form) {
		// update server
		const res = await fetch("http://localhost:4000/api/boards", {
			body: JSON.stringify({
				name: form.name,
			}),
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
		});
		const newBoard = await res.json();

		// update state(ui)
		setBoards([...boards, newBoard]);
	}

	const selectedBoard = boards.find((board) => board.id === selectedBoardId);

	const data = { boards, selectedBoard, setBoards, setSelectedBoardId, createBoard };

	return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
}

// custom hook
export const useAppContext = () => {
	return useContext(AppContext);
};
