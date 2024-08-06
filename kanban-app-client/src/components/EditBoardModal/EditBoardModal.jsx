import "./EditBoardModal.css";

export function EditBoardModal({ close, board }) {
	return (
		<div onClick={() => close?.()} className="EditBoardModal">
			<div
				onClick={(e) => {
					e.stopPropagation();
				}}
				className="EditBoardModal-content"
			>
				<input type="text" defaultValue={board?.name} />
			</div>
		</div>
	);
}
