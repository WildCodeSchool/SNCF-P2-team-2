import React from "react";
import "./card.css";
import DatePickerr from "../DatePicker/Picker";

function Card() {
  return (
    <div className="row ">
      <div className="col-sm-12 col-md-12 col-lg-8  mx-auto p-5 card-itinerary">
        <div className="bg-white mb-3 rounded p-5 card-shadow">
          <h2 className="text-uppercase">Itinéraire</h2>

          <DatePickerr />
        </div>
      </div>
    </div>
  );
}

export default Card;
