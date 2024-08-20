import { useState } from "react";
import { useAppContext } from "../../contexts/AppContext";
import "./BoardFormModal.css";
import { Api } from "../../api";
import { useDispatch } from "react-redux";
import { boardsSlice } from "../../store";

export function BoardFormModal({ close, boardToEdit }) {
	const dispatch = useDispatch();

	const [form, setForm] = useState(
		boardToEdit
			? { ...boardToEdit }
			: {
					name: "",
					columns: [],
			  }
	);

	function editBoardName(newName) {
		setForm({
			...form,
			name: newName,
		});
	}

	function addNewColumn() {
		setForm({
			...form,
			columns: [...form.columns, { id: crypto.randomUUID(), name: "", tasks: [] }],
		});
	}

	function editColumn(newName, id) {
		setForm({
			...form,
			columns: form.columns.map((column) => {
				if (column.id === id) {
					return {
						...column,
						name: newName,
					};
				}
				return column;
			}),
		});
	}

	function removeColumn(id) {
		setForm({
			...form,
			columns: form.columns.filter((column) => column.id !== id),
		});
	}

	async function save() {
		if (boardToEdit) {
			const _board = await Api.editBoard(form);
			dispatch(boardsSlice.actions.editBoard(_board));
		} else {
			const _board = await Api.createBoard(form);
			dispatch(boardsSlice.actions.addBoard(_board));
		}

		close?.();
	}

	const title = boardToEdit ? "Edit Board" : "Add new Board";
	const actionButton = boardToEdit ? "Save Changes" : "Create New Board";

	console.log("form", form);
	return (
		<div onClick={() => close?.()} className="BoardFormModal">
			<div
				onClick={(e) => {
					e.stopPropagation();
				}}
				className="BoardFormModal-content"
			>
				<div className="BoardFormModal-title">{title}</div>
				<div className="">
					<label htmlFor="">board name:</label>
					<input
						type="text"
						onChange={(e) => editBoardName(e.target.value)}
						defaultValue={form?.name}
					/>
				</div>
				<div className="">
					<label htmlFor="" className="">
						boards columns
					</label>
					{form.columns?.map((column) => {
						return (
							<div key={column.id} className="">
								<input
									onChange={(event) => {
										editColumn(event.target.value, column.id);
									}}
									defaultValue={column.name}
									type="text"
								/>
								<button onClick={() => removeColumn(column.id)}>X</button>
							</div>
						);
					})}
				</div>
				<div className="columns">
					<button onClick={addNewColumn} className="">
						add new column
					</button>
				</div>
				<div className="">
					<button onClick={save} className="">
						{actionButton}
					</button>
				</div>
			</div>
		</div>
	);
}
