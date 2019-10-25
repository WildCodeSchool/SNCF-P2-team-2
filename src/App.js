import React from "react";
import "@sncf/bootstrap-sncf.metier/dist/bootstrap-sncf.min.css";
import "@sncf/bootstrap-sncf.metier/dist/bootstrap-sncf";
import Navbar from "./components/Navbar/Navbar";
import BannerUnderNav from "./components/BannerUnderNav/BannerUnderNav";
import Card from "./components/CardItinerary/Card";
import ResultItineraryFormatting from "./components/ResultItineraryFormatting/ResultItineraryFormatting"; // temporaire
import "./styles.css";

function App() {
  return (
    <div>
      <Navbar />
      <BannerUnderNav />
      <Card />
      <main role="main">
        <ResultItineraryFormatting /> {/* Temporaire */}
      </main>
    </div>
  );
}

export default App;
