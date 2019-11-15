import React, { useState } from "react";
import "@sncf/bootstrap-sncf.metier/dist/bootstrap-sncf.min.css";
import "@sncf/bootstrap-sncf.metier/dist/bootstrap-sncf";
import Navbar from "./components/Navbar/Navbar";
import BannerUnderNav from "./components/BannerUnderNav/BannerUnderNav";
import Card from "./components/CardItinerary/Card";
import ResultItineraryInfos from "./components/ResultItineraryInfos/ResultItineraryInfos";
import "./styles.css";
import mockData from "./components/mockData.js";
import moment from "moment";

const defaultPlaceState = {
  name: "",
  coordPlace: ""
  // stop_area: "",
  // administrative_region: "",
  // addresses: ""
};

function App() {
  const [globalState, setGlobalState] = useState({
    inputs: {
      depart: { ...defaultPlaceState },
      arrival: { ...defaultPlaceState }
    },
    date: new Date(),
    time: moment(),
    selectValue: "departure",
    result: mockData
  });
  console.log(globalState);

  return (
    <div>
      <Navbar />
      <BannerUnderNav />

      <main role="main">
        <Card globalState={globalState} setGlobalState={setGlobalState} />
        <ResultItineraryInfos
          globalState={globalState}
          setGlobalState={setGlobalState}
        />
      </main>
    </div>
  );
}

export default App;
