import React from "react";
import Home from "./pages/HomePage";
import { BrowserRouter } from "react-router-dom";
import Routes from "Routes";

function App() {
	console.log(Routes);
	return (
		<BrowserRouter>
			<Routes />
		</BrowserRouter>
	);
}

export default App;
