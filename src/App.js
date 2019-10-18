import React from "react";
import "@sncf/bootstrap-sncf.metier/dist/bootstrap-sncf.min.css";
import Navbar from "./components/Navbar/Navbar";
import BannerUnderNav from "./components/BannerUnderNav/BannerUnderNav";
import Card from "./components/Card-itinerary/Card";

function App() {
  return (
    <div>
      <Navbar />
      <BannerUnderNav />
      <Card />
      <main role="main" className="mastcontainer"></main>
    </div>
  );
}

export default App;
