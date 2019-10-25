import React from "react";
import "./ResultItineraryFormatting.css";

const ResultItineraryFormatting = props => {
  return (
    <div className="row d-flex flex-row resultItinerary">
      {/* Time */}
      <div className="col-md-auto col-6 d-flex flex-md-column justify-content-md-between flex-row justify-content-start align-items-center border-right resultTime">
        <div className="row-md col-auto px-md-3 pr-0 d-flex flex-row align-items-center justify-content-center depTime">
          <i
            className="col-md-4 col-2 px-0 icons-itinerary-bullet icons-size-1x text-center text-blue"
            aria-hidden="true"
          ></i>
          <p className="col-md-8 col-8 px-0 text-center font-weight-bolder">
            {props.depTime}
          </p>
        </div>
        <div className="row-md col-1 px-md-3 px-0 d-md-flex flex-row h-100 w-100 align-items-center justify-content-center forVerticalLine">
          <div className="col-md-4 col d-flex d-md-block align-items-center px-0 h-100 text-center ">
            <span className="d-md-inline-block d-none h-100 bg-blue verticalLine"></span>
            <span className="d-md-none d-inline-block bg-blue w-100 mx-0 horizontalLine"></span>
          </div>
          <div className="col-md-8 d-none d-md-inline-block px-0 h-100 text-center"></div>
        </div>
        <div className="row-md col-auto px-md-3 pl-0 d-flex flex-row align-items-center justify-content-center arrTime">
          <i
            className="col-md-4 col-2 px-0 icons-localisation-pin icons-size-1x text-center text-blue"
            aria-hidden="true"
          ></i>
          <p className="col-md-8 col-8 px-0 text-center font-weight-bolder">
            {props.arrTime}
          </p>
        </div>
      </div>

      {/* Duration */}
      <div className="col-md-auto col-6 d-flex flex-md-column border-right justify-content-md-center align-items-center flex-row justify-content-end durationJourney">
        <p className="row-md d-flex flex-row justify-content-center font-weight-bolder font-size-5x durationJourneyTotal">
          {props.durationJourney}
        </p>
        {props.durationWalking !== "" ? (
          <div className="row-md durationWalking">
            <p className="d-none d-md-flex flex-column flex-wrap justify-content-center durationWalking-md">
              <span>dont {props.durationWalking}</span>
              <span>de marche</span>
            </p>
            <p className="d-md-none durationWalking-sm">
              (
              <i
                className="icons-itinerary-pedestrian icons-size-1x"
                aria-hidden="true"
              />
              {props.durationWalking})
            </p>
          </div>
        ) : (
          ""
        )}
      </div>

      {/* Transport mode */}
      <div className="col-12 d-flex align-items-center transportJourney">
        <p>{props.transportJourney}</p>
      </div>

      {/* Price */}
      <div className="col-md-auto col-6 border-left d-flex flex-md-column justify-content-md-center align-items-center flex-row justify-content-start font-weight-bolder price">
        <p>{props.price}</p>
      </div>

      {/* Detail button */}
      <div className="col-md-auto col-6 border-left d-flex flex-md-column flex-row justify-content-end justify-content-md-center align-items-center detailAccess">
        <p className="text-blue">
          DÉTAILS{" "}
          <i
            className="icons-arrow-next icons-size-1x text-blue"
            aria-hidden="true"
          ></i>
        </p>
      </div>
    </div>
  );
};

export default ResultItineraryFormatting;
