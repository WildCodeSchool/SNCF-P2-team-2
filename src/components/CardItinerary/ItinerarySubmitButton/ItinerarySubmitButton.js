import React from "react";
import "./ItinerarySubmitButton.css";
import axios from "axios";
import { dateAndTimeToAPIFormat } from "../../ToAPIFormat/ToAPIFormat";

const ItinerarySubmitButton = ({ globalState, setGlobalState }) => {
  const dateAndTime = dateAndTimeToAPIFormat(
    globalState.date,
    globalState.time._d
  );
  const place = globalState.inputs;

  const handleSubmit = () => {
    axios
      .get(
        `https://api.sncf.com/v1/coverage/sncf/journeys?from=${place.depart.coordPlace}&to=${place.arrival.coordPlace}&datetime=${dateAndTime}&datetime_represents=${globalState.selectValue}&`,
        {
          ...globalState,
          headers: {
            Authorization:
              "Basic " + btoa("dabb1e17-6d71-4347-ae82-5bec51cdb63f")
          }
        }
      )
      .then(res =>
        setGlobalState({
          ...globalState,
          result: res.data.journeys
        })
      )
      .catch(err => console.error(err));
  };
  return (
    <button
      value="submit"
      id="btnsubmit"
      className="btn btn-primary w-100"
      onClick={handleSubmit}
    >
      RECHERCHER
    </button>
  );
};

export default ItinerarySubmitButton;
