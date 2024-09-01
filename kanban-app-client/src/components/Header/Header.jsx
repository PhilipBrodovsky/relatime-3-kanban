import { useLocation, useParams } from "wouter";
import "./Header.css";
import { Api } from "../../api";
import { useDispatch, useSelector } from "react-redux";
import { boardsSlice } from "../../store";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

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
			<div className="title">Platform Launch</div>
			<div className="actions">
				<button onClick={deleteBoard}>delete board</button>

				<Menu>
					<MenuButton>
						<svg
							className="menu-icon"
							width="5"
							height="20"
							viewBox="0 0 5 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle cx="2.30769" cy="2.30769" r="2.30769" fill="#828FA3" />
							<circle cx="2.30769" cy="10.0001" r="2.30769" fill="#828FA3" />
							<circle cx="2.30769" cy="17.6922" r="2.30769" fill="#828FA3" />
						</svg>
					</MenuButton>

					<MenuItems transition anchor="bottom end" className="menuItems">
						<MenuItem>
							<span
								onClick={() => {
									console.log("edit board");
								}}
								className=""
							>
								Edit Board
							</span>
						</MenuItem>
						<MenuItem>
							<span
								onClick={() => {
									console.log("delete board");
								}}
								style={{ color: "red" }}
								className=""
							>
								Delete Board
							</span>
						</MenuItem>
					</MenuItems>
				</Menu>
			</div>
		</div>
	);
}
