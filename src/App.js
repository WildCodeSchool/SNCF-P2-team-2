import React from "react";
import "@sncf/bootstrap-sncf.metier/dist/bootstrap-sncf.min.css";
import "@sncf/bootstrap-sncf.metier/dist/bootstrap-sncf";
import Navbar from "./components/Navbar/Navbar";
import BannerUnderNav from "./components/BannerUnderNav/BannerUnderNav";
import Card from "./components/Card-itinerary/Card";
import "./styles.css";
import ItinerarySubmitButton from "./components/Card-itinerary/ItinerarySubmitButton/ItinerarySubmitButton";

function App() {
	return (
		<div>
			<Navbar />
			<BannerUnderNav />
			<Card />
			<ItinerarySubmitButton />
			<main role="main" className="mastcontainer"></main>
		</div>
	);
}

export default App;
