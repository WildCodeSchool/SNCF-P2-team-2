import React from "react";
import "@sncf/bootstrap-sncf.metier/dist/bootstrap-sncf.min.css";
import "@sncf/bootstrap-sncf.metier/dist/bootstrap-sncf";
import Navbar from "./components/Navbar/Navbar";
import BannerUnderNav from "./components/BannerUnderNav/BannerUnderNav";
import Card from "./components/CardItinerary/Card";
import "./styles.css";
import ResultItineraryInfos from './components/ResultItineraryInfos/ResultItineraryInfos';

function App() {
	return (
		<div>
			<Navbar />
			<BannerUnderNav />
			<main role="main">			
			<Card />
			<ResultItineraryInfos />
			</main>

		</div>
	);
}

export default App;
