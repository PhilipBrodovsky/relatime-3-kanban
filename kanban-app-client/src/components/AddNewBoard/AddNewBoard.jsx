import { useState } from "react";
import "./AddNewBoard.css";

export function AddNewBoard() {
	const [form, setForm] = useState({
		title: "",
		description: "",
	});

	const isValidTitle = !!form.title.length;
	const hasQ = form.description.includes("?");

	console.log("form", form);

	function createTask() {
		console.log("create task");
	}

	console.log("render AddNewTask");
	return (
		<div className="">
			<form
				onSubmit={(event) => {
					event.preventDefault(); // prevent submit form
					createTask();
				}}
			>
				<div className="field">
					<label htmlFor="">Title</label>
					<input
						value={form.title}
						onChange={(event) => {
							setForm({ ...form, title: event.target.value });
						}}
						type="text"
						placeholder="title"
						name=""
						id="title"
					/>
				</div>
				<div className="field">
					<label
						style={{
							background: hasQ ? "red" : undefined,
						}}
						htmlFor=""
					>
						Description
					</label>
					<input
						onChange={(event) => {
							setForm({
								...form, //copy current form
								description: event.target.value, // override
							});
						}}
						type="text"
						placeholder="Description"
						name=""
						id=""
					/>
				</div>
				<button disabled={!isValidTitle}>create task</button>
			</form>
		</div>
	);
}
