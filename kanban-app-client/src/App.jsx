import "./App.css";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { useState, useEffect } from "react";
import { BoardFormModal } from "./components/BoardFormModal/BoardFormModal";
import { useAppContext } from "./contexts/AppContext";

import { useDispatch, useSelector } from "react-redux";
import { boardsSlice, themeSlice } from "./store";

async function getBoards() {
	const res = await fetch("http://localhost:4000/api/boards");
	const body = await res.json();
	return body;
}

//  render app -> useEffect -> setState -> render app -> ......
function App() {
	const isDarkMode = useSelector((state) => {
		return state?.theme?.isDarkMode;
	});

	const appContext = useAppContext();

	const dispatch = useDispatch();

	const [isLoading, setIsLoading] = useState(false);

	const [isBoardModalOpen, setIsBoardModalOpen] = useState(false);
	const [boardToEdit, setBoardToEdit] = useState(null);

	function openModal(board) {
		setIsBoardModalOpen(true);
		setBoardToEdit(board ?? null);
	}

	function closeModal() {
		setIsBoardModalOpen(false);
		setBoardToEdit(null);
	}

	useEffect(() => {
		setIsLoading(true);
		getBoards().then((data) => {
			dispatch(boardsSlice.actions.setBoards(data));
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
					onCreateBoard={openModal}
					isDarkMode={isDarkMode}
					setIsDarkMode={() => {
						dispatch(themeSlice.actions.toggleTheme());
						// html element to be dark
						document.documentElement.classList.toggle("dark", !isDarkMode);
					}}
				/>
			</div>
			<div className="right">
				<Header />
				<Main openEditBoardModal={openModal} />
			</div>
			{isBoardModalOpen && <BoardFormModal close={closeModal} boardToEdit={boardToEdit} />}
		</div>
	);
}

export default App;
