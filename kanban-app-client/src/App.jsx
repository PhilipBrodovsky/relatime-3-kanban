import "./App.css";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { useState, useEffect, useRef } from "react";
import Button from "./components/Button/Button";
import { EditBoardModal } from "./components/EditBoardModal/EditBoardModal";

async function getBoards() {
	const res = await fetch("http://localhost:4000/api/boards");
	const body = await res.json();
	return body;
}

//  render app -> useEffect -> setState -> render app -> ......
function App() {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [boards, setBoards] = useState([]);
	const [selectedBoardId, setSelectedBoardId] = useState("");

	const isBoardSelected = !!selectedBoardId;

	const [isLoading, setIsLoading] = useState(false);
	const selectedBoard = boards.find((board) => board.id === selectedBoardId);

	const [isOpenEditBoard, setIsOpenEditBoard] = useState(false);

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

	function openEditBoardModal() {
		setIsOpenEditBoard(true);
	}

	function closeEditBoardModal() {
		setIsOpenEditBoard(false);
	}

	useEffect(() => {
		setIsLoading(true);
		getBoards().then((data) => {
			console.log("data", data);
			setBoards(data);
			setIsLoading(false);
		});
	}, []);

	if (isLoading) {
		return <h1>Loading...</h1>;
	}

	return (
		<div className="app">
			<div className="left">
				<Sidebar
					setSelectedBoardId={setSelectedBoardId}
					selectedBoardId={selectedBoardId}
					boards={boards}
					createBoard={createBoard}
					isDarkMode={isDarkMode}
					setIsDarkMode={() => {
						setIsDarkMode(!isDarkMode);
						// html element to be dark
						document.documentElement.classList.toggle("dark", !isDarkMode);
					}}
				/>
			</div>
			<div className="right">
				<Header />
				<Main
					isAddColumnDisabled={!isBoardSelected}
					openEditBoardModal={openEditBoardModal}
					board={selectedBoard}
				/>
			</div>
			{isOpenEditBoard && <EditBoardModal board={selectedBoard} close={closeEditBoardModal} />}
		</div>
	);
}

export default App;
