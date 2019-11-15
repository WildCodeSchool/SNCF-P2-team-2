import React from "react";
import "./ItinerarySubmitButton.css";
import axios from "axios";

const ItinerarySubmitButton = ({ globalSate, setGlobalState }) => {
  const handleSubmit = () => {
    axios
      .get("url de la sncrf", {
        ...globalSate
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
