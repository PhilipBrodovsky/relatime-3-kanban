import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AppContextProvider } from "./contexts/AppContext.jsx";

const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);

// root render (entry point)
root.render(
	<AppContextProvider>
		<App />
	</AppContextProvider>
); // <App /> - first render component
