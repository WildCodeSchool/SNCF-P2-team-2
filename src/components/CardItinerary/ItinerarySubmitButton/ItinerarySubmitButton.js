import React from "react";
import "./ItinerarySubmitButton.css";
import axios from "axios";
import { dateAndTimeToAPIFormat } from "../../ToAPIFormat/ToAPIFormat";

const ItinerarySubmitButton = ({ globalState, setGlobalState }) => {
  // transformation de la date et de l'heure en chaîne correspondant au format de l'API :
  const dateAndTime = dateAndTimeToAPIFormat(
    globalState.date,
    globalState.time._d
  );

  const handleSubmit = () => {
    axios
      .get("url de la sncrf", {
        ...globalState
      })
      .then(res => setGlobalState(res))
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
