import "./Main.css";

export function Main({ board }) {
	const boardName = board ? board.name : "select board";
	return (
		<div className={`Main`}>
			<h2>{boardName}</h2>
		</div>
	);
}
