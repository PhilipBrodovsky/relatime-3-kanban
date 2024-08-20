import { useLocation, useParams } from "wouter";
import "./Header.css";
import { Api } from "../../api";
import { useDispatch, useSelector } from "react-redux";
import { boardsSlice } from "../../store";

export function Header() {
	const [location, setLocation] = useLocation();
	const params = useParams();

	const dispatch = useDispatch();

	const selectedBoardName = params?.boardName;

	const selectedBoard = useSelector((state) =>
		boardsSlice.selectors.selectedBoard(state, selectedBoardName)
	);

	async function deleteBoard() {
		if (!selectedBoard) return;

		const deleteBoard = await Api.deleteBoard(selectedBoard.id); //update server
		dispatch(boardsSlice.actions.deleteBoard(selectedBoard.id)); // update client
		setLocation("/"); // update url
	}

	return (
		<div className="Header">
			<button onClick={deleteBoard}>delete board</button>
		</div>
	);
}
