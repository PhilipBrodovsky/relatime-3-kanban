import "./Tasks.css";

const tasks = [{ title: "task 1" }, { title: "task 2" }, { title: "task 3" }];

export function Tasks() {
	const hasTasks = !!tasks.length;

	console.log("hasTasks", hasTasks);

	return (
		<div>
			<div>{hasTasks ? <Items items={tasks} /> : <EmptyState />}</div>
		</div>
	);
}

function Items(props) {
	console.log(props.items);
	return (
		<div className="items">
			{props.items.map((item, index) => {
				return (
					<div key={index} className="item">
						{item.title}
					</div>
				);
			})}
		</div>
	);
}

function EmptyState() {
	return (
		<div className="">
			<h4>no tasks yet</h4>
			<button>add task</button>
		</div>
	);
}
