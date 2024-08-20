import { useState } from "react";
import "./Sidebar.css";
import { useAppContext } from "../../contexts/AppContext";
import { useSelector } from "react-redux";
import { Link } from "wouter";
import { useParams } from "wouter";

export function Sidebar(props) {
	const { setIsDarkMode } = props;

	const [text, setText] = useState("");

	const params = useParams();

	const selectedBoardName = params?.boardName;

	const appContext = useAppContext();

	const boards = useSelector((state) => state.boards?.boards ?? []);

	const { createBoard } = appContext;

	// derived state
	const totalBoards = boards.length;

	return (
		<div className={`Sidebar`}>
			<input onChange={(e) => setText(e.target.value)} type="text" />
			<h3>all boards ({totalBoards})</h3>
			<div className="">
				{boards.map((board) => {
					const isSelected = board.name === selectedBoardName;
					return (
						<div
							key={board.id}
							style={{
								background: isSelected ? "#635FC7" : "transparent",
							}}
							className="board"
						>
							<Link href={`/${board.name}`}>{board.name}</Link>
						</div>
					);
				})}
				<button
					onClick={() => {
						props.onCreateBoard?.();
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
