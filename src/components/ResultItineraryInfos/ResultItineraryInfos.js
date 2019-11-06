import React from "react";
import mockData from "../mockData"; // temporaire
import {
  DataTimeFormatting,
  DataDurationFormatting
} from "../DataAPIFormatting/DataAPIFormatting";
import ResultItineraryFormatting from "../ResultItineraryFormatting/ResultItineraryFormatting";

const ResultItineraryInfos = () => {
  return mockData.map(res => {
    return (
      <ResultItineraryFormatting
        key={res.depTime + res.arrTime}
        depTime={DataTimeFormatting(res.depTime)}
        arrTime={DataTimeFormatting(res.arrTime)}
        durationJourney={DataDurationFormatting(res.durationJourney)}
        durationWalking={
          res.durationWalking > 0
            ? DataDurationFormatting(res.durationWalking)
            : ""
        }
        transportJourney={res.transportJourney}
        price={res.price}
      />
    );
  });
};

export default ResultItineraryInfos;
