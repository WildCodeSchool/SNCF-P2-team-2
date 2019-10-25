import React from "react";
import mockData from "../mockData";
import ResultItineraryFormatting from "../ResultItineraryFormatting/ResultItineraryFormatting";

const ResultItineraryInfos = () => {
  return mockData.map(res => {
    return (
      <ResultItineraryFormatting
        key={res.depTime + res.arrTime}
        depTime={res.depTime}
        arrTime={res.arrTime}
        durationJourney={res.durationJourney}
        durationWalking={res.durationWalking}
        transportJourney={res.transportJourney}
        price={res.price}
      />
    );
  });
};

export default ResultItineraryInfos;
