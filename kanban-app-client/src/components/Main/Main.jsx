import { useSelector } from "react-redux";
import { useAppContext } from "../../contexts/AppContext";
import "./Main.css";
import { boardsSlice } from "../../store";
import { useParams } from "wouter";

export function Main({ openEditBoardModal }) {
	const appContext = useAppContext();

	const params = useParams();

	const selectedBoardName = params?.boardName;

	const selectedBoard = useSelector((state) =>
		boardsSlice.selectors.selectedBoard(state, selectedBoardName)
	);
	const boardName = selectedBoard ? selectedBoard.name : "select board";

	const columns = selectedBoard?.columns || [];

	const isAddColumnDisabled = !selectedBoard;

	console.log("columns", columns);

	const isEmptyState = !columns.length;

	return (
		<div className={`Main`}>
			<h2>{boardName}</h2>
			<div className="">
				{!isEmptyState &&
					columns.map((column) => {
						return (
							<div key={column.id} className="">
								{column.name}
							</div>
						);
					})}
				{isEmptyState && (
					<div className="">
						<button
							disabled={isAddColumnDisabled}
							onClick={() => {
								openEditBoardModal(selectedBoard);
							}}
						>
							add new column
						</button>
					</div>
				)}
			</div>
		</div>
	);
}
