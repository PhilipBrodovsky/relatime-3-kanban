async function request({ method = "GET", body } = {}) {
	// update server
	const res = await fetch("http://localhost:4000/api/boards", {
		headers: {
			"content-type": "application/json",
		},
		body: body ? JSON.stringify(body) : undefined,
		method: method,
	});
	const data = await res.json();
	return data;
}

export const Api = {
	getBoards() {
		return request();
	},
	createBoard(board) {
		return request({
			method: "POST",
			body: { board },
		});
	},
	editBoard(board) {
		return request({
			method: "PUT",
			body: { board },
		});
	},
};
