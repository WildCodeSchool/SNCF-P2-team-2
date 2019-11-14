import React from "react";
import mockData from "../mockData"; // temporaire
import uuid from "uuid/index";
import {
  dataTimeFormatting,
  dataDurationFormatting,
  dataPriceFormatting,
  dataTransportFormatting
} from "../DataAPIFormatting/DataAPIFormatting";
import ResultItineraryFormatting from "../ResultItineraryFormatting/ResultItineraryFormatting";

const ResultItineraryInfos = () => {
  return mockData.map(res => {
    return (
      <ResultItineraryFormatting
        key={uuid()}
        depTime={dataTimeFormatting(res.departure_date_time)}
        arrTime={dataTimeFormatting(res.arrival_date_time)}
        durationJourney={dataDurationFormatting(res.durations.total)}
        durationWalking={
          res.durations.walking > 0
            ? dataDurationFormatting(res.durations.walking)
            : ""
        }
        transportJourney={dataTransportFormatting(res.sections)}
        price={res.fare.found ? dataPriceFormatting(res.fare.total.value) : "-"}
      />
    );
  });
};

export default ResultItineraryInfos;
