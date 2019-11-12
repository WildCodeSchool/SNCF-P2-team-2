import React from "react";
import "./ItinerarySubmitButton.css";

const ItinerarySubmitButton = (props) => {
	return (
		<button
			value="submit"
			id="btnsubmit"
			type="submit"
			className="btn btn-primary w-100"
		>
			RECHERCHER
		</button>
	);
};

export default ItinerarySubmitButton;
