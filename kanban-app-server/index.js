import express from "express";
import cors from "cors";
const app = express();

app.use(cors({}));
app.use(express.json({}));

const boards = [
	{
		id: 1,
		name: "developers",
	},
	{
		id: 2,
		name: "products",
	},
	{
		id: 3,
		name: "designers",
	},
];

// return all boards
app.get("/api/boards", (req, res) => {
	setTimeout(() => {
		// load from db
		res.json(boards);
	}, 2000);
});

// create new board
app.post("/api/boards", (req, res) => {
	const { name } = req.body;

	console.log("req.body", req.body);

	const id = crypto.randomUUID();

	const newBoard = { id, name };

	res.json(newBoard);
});

app.listen(4000, () => {
	console.log("server run on port:", 4000);
});
