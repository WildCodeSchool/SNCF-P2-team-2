import React from "react";
import "@sncf/bootstrap-sncf.metier/dist/bootstrap-sncf.min.css";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card-itinerary/Card";

function App() {
	return (
		<div>
			<Navbar />
			<Card />
		</div>
	);
}

export default App;
