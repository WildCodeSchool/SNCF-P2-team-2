import React, { useState } from "react";
import "@sncf/bootstrap-sncf.metier/dist/bootstrap-sncf.min.css";
import "@sncf/bootstrap-sncf.metier/dist/bootstrap-sncf";
import Navbar from "./components/Navbar/Navbar";
import BannerUnderNav from "./components/BannerUnderNav/BannerUnderNav";
import Card from "./components/CardItinerary/Card";
import ResultItineraryInfos from "./components/ResultItineraryInfos/ResultItineraryInfos";
// import axios from "axios";
import "./styles.css";
import mockData from "./components/mockData.js";

const defaultPlaceState = {
  name: "",
  stop_area: "",
  administrative_region: "",
  addresses: ""
};

function App() {
  // const [coord, setCoord] = useState(null);
  // const [getR, setGetR] = useState([]);
  const [globalState, setGlobalState] = useState({
    inputs: {
      depart: { ...defaultPlaceState },
      arrival: { ...defaultPlaceState }
    },
    result: mockData
  });

  // const handleSubmit = e => {
  //   e.preventDefault();

  //   axios
  //     .get(
  //       `
  // 			https://api.sncf.com/v1/coverage/sncf/journeys?from=${coord}&to=2.2922926%3B48.8583736&`,
  //       {
  //         headers: {
  //           Authorization:
  //             "Basic " + btoa("dabb1e17-6d71-4347-ae82-5bec51cdb63f")
  //         }
  //       }
  //     )
  //     .then(res => {
  //       console.log(res.data.journeys);
  //       setGetR(res.data.journeys);
  //     })
  //     .catch(err => console.log(err.message));
  // };

  return (
    <div>
      <Navbar />
      <BannerUnderNav />
      <Card globalState={globalState} setGlobalState={setGlobalState} />
      <main role="main">
        <ResultItineraryInfos
          globalState={globalState}
          setGlobalState={setGlobalState}
        />
      </main>
    </div>
  );
}

export default App;
