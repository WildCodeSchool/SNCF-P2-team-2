import React from "react";
import "./card.css";
import ItinerarySubmitButton from "./ItinerarySubmitButton/ItinerarySubmitButton";
import InputSearchDeparture from "../InputSearchDeparture/InputSearchDeparture";
import DatePickerr from "../DatePicker/Picker";
import SelectDepArr from "../SelectDepArr/SelectDepArr";
import Timepickerform from "../Timeselectform/TimeSelectForm";

function Card(props) {
  const { globalState, setGlobalState } = props;
  return (
    <>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-10 mx-auto card-itinerary">
          <div className="bg-white mb-3 rounded px-4 py-5 card-shadow">
            <h2 className="text-uppercase">Itinéraire</h2>
            <div className="row mb-2">
              <div className="col-sm-12 col-md-6 col-lg-6 my-2">
                <InputSearchDeparture
                  globalState={globalState}
                  setGlobalState={setGlobalState}
                  type="depart"
                />
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 my-2">
                <InputSearchDeparture
                  globalState={globalState}
                  setGlobalState={setGlobalState}
                  type="arrival"
                />
              </div>
            </div>
            <div className="row" id="bb">
              <div className="col-sm-12 col-md-12 col-lg-3 my-2">
                <SelectDepArr
                  globalState={globalState}
                  setGlobalState={setGlobalState}
                />
              </div>
              <div className="col-sm-12 col-md-3 col-lg-3 my-2">
                <DatePickerr
                  globalState={globalState}
                  setGlobalState={setGlobalState}
                />
              </div>
              <div className="col-sm-12 col-md-3 col-lg-3 my-2">
                <Timepickerform
                  globalState={globalState}
                  setGlobalState={setGlobalState}
                />
              </div>
              <div className="col-sm-12 col-md-3 col-lg-3 my-2">
                <ItinerarySubmitButton
                  globalState={globalState}
                  setGlobalState={setGlobalState}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
