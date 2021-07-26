import React from "react";
import { Route, Switch } from "react-router-dom";
import RoutesList from "./RoutesList";
import Home from "pages/HomePage";

function index() {
	return (
		<div>
			<Switch>
				{RoutesList.map((route, index) => {
					console.log(route);
					return (
						<Route
							key={index}
							path={route.path}
							component={route.component}
							exact={route.exact}
						/>
					);
				})}
			</Switch>
		</div>
	);
}

export default index;
