import React from "react";
import "./card.css";
import ItinerarySubmitButton from "./ItinerarySubmitButton/ItinerarySubmitButton";
import InputSearchDeparture from "../InputSearchDeparture/InputSearchDeparture";
import DatePickerr from "../DatePicker/Picker";
import SelectDepArr from "../SelectDepArr/SelectDepArr";
import Timepickerform from "../Timeselectform";

function Card() {
	return (
		<>
			<div className="row">
				<div className="col-sm-12 col-md-12 col-lg-10 mx-auto card-itinerary">
					<div className="bg-white mb-3 rounded px-4 py-5 card-shadow">
						<h2 className="text-uppercase">Itinéraire</h2>
						<div className="row mb-2">
							<div className="col-sm-12 col-md-6 col-lg-6 my-2">
								<InputSearchDeparture />
							</div>
							<div className="col-sm-12 col-md-6 col-lg-6 my-2">
								<InputSearchDeparture />
							</div>
						</div>
						<div className="row">
							<div className="col-sm-12 col-md-3 col-lg-4 mb-3">
								<SelectDepArr />
							</div>
							<div className="col-sm-6 col-lg-4">
								<DatePickerr />
							</div>
							<div className="col-sm-6 col-lg-4">
								<Timepickerform />
							</div>
							<div className="col-sm-12 col-md-4 col-lg-3 ml-auto">
								<ItinerarySubmitButton />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Card;
