import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AppContextProvider } from "./contexts/AppContext.jsx";

// setup redux
import { Provider } from "react-redux";
import { store } from "./store";

const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);

// root render (entry point)

root.render(
	<Provider store={store}>
		<AppContextProvider>
			<App />
		</AppContextProvider>
	</Provider>
); // <App /> - first render component
