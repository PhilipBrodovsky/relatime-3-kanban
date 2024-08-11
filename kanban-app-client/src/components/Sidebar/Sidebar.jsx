import { useState } from "react";
import "./Sidebar.css";
import { useAppContext } from "../../contexts/AppContext";

export function Sidebar(props) {
	const { setIsDarkMode } = props;

	const [text, setText] = useState("");

	const appContext = useAppContext();

	const { boards, createBoard, selectedBoardId, setSelectedBoardId } = appContext;

	console.log("sidebar.appContext", appContext);

	// derived state
	const totalBoards = boards.length;

	return (
		<div className={`Sidebar`}>
			<input onChange={(e) => setText(e.target.value)} type="text" />
			<h3>all boards ({totalBoards})</h3>
			<div className="">
				{boards.map((board) => {
					const isSelected = board.id === selectedBoardId;
					return (
						<div
							key={board.id}
							onClick={() => {
								setSelectedBoardId(board.id);
							}}
							style={{
								background: isSelected ? "#635FC7" : "transparent",
							}}
							className="board"
						>
							{board.name}
						</div>
					);
				})}
				<button
					onClick={() => {
						createBoard({ name: text });
					}}
				>
					create new board
				</button>
			</div>
			<label className="switch">
				<input
					onChange={(event) => {
						setIsDarkMode(event.target.checked);
					}}
					type="checkbox"
				/>
				<span className="slider round"></span>
			</label>
		</div>
	);
}
