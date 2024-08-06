import "./Main.css";

export function Main({ board, openEditBoardModal, isAddColumnDisabled }) {
	const boardName = board ? board.name : "select board";

	const columns = board?.columns || [];

	console.log("isAddColumnDisabled", isAddColumnDisabled);

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
