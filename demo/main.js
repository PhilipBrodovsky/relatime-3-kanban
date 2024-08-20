import "./style.css";

function navigate(path) {
	history.pushState(null, "", path);
}

const app = document.querySelector("#app");
const links = document.createElement("div");
const homeLink = document.createElement("a");
homeLink.text = "home";
homeLink.addEventListener("click", (event) => {
	event.preventDefault();
	navigate("/home");
	render();
});
const aboutLink = document.createElement("a");
aboutLink.text = "about";
aboutLink.addEventListener("click", (event) => {
	event.preventDefault();
	navigate("/about");
	render();
});

links.appendChild(homeLink);
links.appendChild(aboutLink);
app.appendChild(links);

render(); //first render

function render() {
	console.log(window.location.pathname);
	const container = document.querySelector("#routing");

	if (window.location.pathname === "/home") container.innerHTML = "home";
	if (window.location.pathname === "/about") container.innerHTML = "about";
}
