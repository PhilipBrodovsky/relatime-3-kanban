import { useAppContext } from "../../contexts/AppContext";
import "./Main.css";

export function Main({ openEditBoardModal }) {
	const appContext = useAppContext();
	const { selectedBoard } = appContext;

	const boardName = selectedBoard ? selectedBoard.name : "select board";

	const columns = selectedBoard?.columns || [];

	const isAddColumnDisabled = !selectedBoard;

	return (
		<div className={`Main`}>
			<h2>{boardName}</h2>
			<div className="">
				{columns.map((column) => {
					return (
						<div key={column.id} className="">
							{column.name}
						</div>
					);
				})}
				<button disabled={isAddColumnDisabled} onClick={openEditBoardModal}>
					add new column
				</button>
			</div>
		</div>
	);
}
