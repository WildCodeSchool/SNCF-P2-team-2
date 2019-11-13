import React from "react";
import {
  DataTimeFormatting,
  DataDurationFormatting,
  DataPriceFormatting
} from "../DataAPIFormatting/DataAPIFormatting";
import ResultItineraryFormatting from "../ResultItineraryFormatting/ResultItineraryFormatting";

const ResultItineraryInfos = ({ globalState }) => {
  return globalState.result.map(res => {
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
        price={
          res.price.fareFound
            ? DataPriceFormatting(res.price.fareTotalValue)
            : "-"
        }
      />
    );
  });
};

export default ResultItineraryInfos;
