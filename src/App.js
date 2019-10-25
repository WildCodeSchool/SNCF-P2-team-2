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
<<<<<<< HEAD
      <main role="main" className="mastcontainer"></main>
=======
      <main role="main">
        <ResultItineraryFormatting /> {/* Temporaire */}
      </main>
>>>>>>> ae3e451c543e8e588f97c8f7103b2f56ea6b4dcd
    </div>
  );
}

export default App;
