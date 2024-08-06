import "./EditBoardModal.css";

export function EditBoardModal({ close }) {
	return (
		<div onClick={() => close?.()} className="EditBoardModal">
			<div
				onClick={(e) => {
					e.stopPropagation();
				}}
				className="EditBoardModal-content"
			>
				content
			</div>
		</div>
	);
}
