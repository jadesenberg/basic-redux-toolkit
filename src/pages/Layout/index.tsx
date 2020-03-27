import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TabOne from "pages/TabOne";
import TabTwo from "pages/TabTwo";

export default function Layout() {
	return (
		<Router>
			<div>
				<ul>
					<li>
						<Link to="/">Tab One</Link>
					</li>
					<li>
						<Link to="/tabtwo">Tab Two</Link>
					</li>
				</ul>
				<Route path="/" exact component={TabOne} />
				<Route path="/tabtwo" component={TabTwo} />
			</div>
		</Router>
	);
}
