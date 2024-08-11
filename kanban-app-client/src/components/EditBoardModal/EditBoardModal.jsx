import { useAppContext } from "../../contexts/AppContext";
import "./EditBoardModal.css";

export function EditBoardModal({ close }) {
	const appContext = useAppContext();
	const { selectedBoard } = appContext;
	return (
		<div onClick={() => close?.()} className="EditBoardModal">
			<div
				onClick={(e) => {
					e.stopPropagation();
				}}
				className="EditBoardModal-content"
			>
				<input type="text" defaultValue={selectedBoard?.name} />
			</div>
		</div>
	);
}
