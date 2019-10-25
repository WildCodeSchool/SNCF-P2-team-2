import React from "react";

const durationToHM = (num) => {
  const hours = (num - (num % 60)) / 60 ;
  const minutes = num % 60;
  if (hours === 0) {
    return minutes + " min";
  } else {
    return hours + " h " + minutes + " min";
  }
}

const transport = (props) => {
  let transportToLine = "";
  props.transportJourney.map(element => transportToLine += element)
  return transportToLine;
}

const ResultItineraryFormatting = (props) => {
  return (
    <div className="resultItinerary">
      <div className="resultTime">
        <p>{props.depTime}</p>
        <p>{props.arrTime}</p>
      </div>
      <div className="durationJourney">
        <p>
          <span>{durationToHM(props.durationJourney)}</span>
          <span className="duration-walking-lg">dont {durationToHM(props.durationWalking)}de marche</span>
          <span className="duration-walking-md">(<span className="icons-itinerary-pedestrian"></span>{durationToHM(props.durationWalking)})</span>
        </p>
        <p>{transport}</p>
      </div>

    </div>
  );
}


export default ResultItineraryFormatting;