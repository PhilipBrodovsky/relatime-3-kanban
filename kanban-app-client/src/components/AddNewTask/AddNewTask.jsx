import { useState } from "react";
import "./AddNewTask.css";

export function AddNewTask() {
	let [title, setTitle] = useState("");
	let [description, setDescription] = useState("");

	function createTask() {
		console.log("create task");
		console.log("title:", title);
		console.log("description:", description);
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
						onChange={(event) => {
							setTitle(event.target.value);
						}}
						type="text"
						placeholder="title"
						name=""
						id="title"
					/>
					{title && title.length < 5 && (
						<div
							style={{
								color: "red",
							}}
						>
							title should be min 5 letters
						</div>
					)}
				</div>
				<div className="field">
					<label htmlFor="">Description</label>
					<input
						onChange={(event) => {
							setDescription(event.target.value);
						}}
						type="text"
						placeholder="Description"
						name=""
						id=""
					/>
				</div>
				<button
					onClick={(event) => {
						setTitle("dfasfsdfsfs");
					}}
				>
					create task
				</button>
			</form>
		</div>
	);
}
