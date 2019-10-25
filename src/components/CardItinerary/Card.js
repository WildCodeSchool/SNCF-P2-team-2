import React from "react";
import "./card.css";
import InputSearchDeparture from "../InputSearchDeparture/InputSearchDeparture";

function Card(props) {
	return (
		<div className="row ">
			<div className="col-sm-12 col-md-10 col-lg-10  mx-auto p-5 card-itinerary">
				<div className="bg-white mb-3 rounded p-5 card-shadow">
					<h2 className="text-uppercase">Itinéraire</h2>
					<InputSearchDeparture />
					{props.hello}
				</div>
			</div>
		</div>
	);
}

export default Card;
