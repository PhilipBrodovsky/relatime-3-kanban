import "./App.css";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { useState, useEffect } from "react";
import { EditBoardModal } from "./components/EditBoardModal/EditBoardModal";
import { useAppContext } from "./contexts/AppContext";

async function getBoards() {
	const res = await fetch("http://localhost:4000/api/boards");
	const body = await res.json();
	return body;
}

//  render app -> useEffect -> setState -> render app -> ......
function App() {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const appContext = useAppContext();

	const [isLoading, setIsLoading] = useState(false);

	const [isOpenEditBoard, setIsOpenEditBoard] = useState(false);

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
			appContext.setBoards?.(data);
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
				<Main openEditBoardModal={openEditBoardModal} />
			</div>
			{isOpenEditBoard && <EditBoardModal close={closeEditBoardModal} />}
		</div>
	);
}

export default App;
