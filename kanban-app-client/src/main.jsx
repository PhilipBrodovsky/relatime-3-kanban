import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AppContextProvider } from "./contexts/AppContext.jsx";
import { Route } from "wouter";
// setup redux
import { Provider } from "react-redux";
import { store } from "./store";

const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);

// root render (entry point)

root.render(
	<Provider store={store}>
		<AppContextProvider>
			<Route path="/" component={App} />
			<Route path="/:boardName" component={App} />
		</AppContextProvider>
	</Provider>
); // <App /> - first render component
