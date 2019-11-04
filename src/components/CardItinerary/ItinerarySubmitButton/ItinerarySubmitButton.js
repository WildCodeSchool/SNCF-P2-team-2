import React from "react";
import "./ItinerarySubmitButton.css";

const ItinerarySubmitButton = (event) => {
	// const id = event.target.id;
	// const className = event.target.className;
	// const type = event.target.type;
	// const text = event.target.innerText;
	// console.log(`mon id est "${id}"`);
	const onClick = () => console.log("hwdxfgfdhg");
	return (
		<button
			value="submit"
			id="btnsubmit"
			type="submit"
			className="btn btn-primary btn-block"
			onClick={onClick}
		>
			RECHERCHER
		</button>
	);
};

export default ItinerarySubmitButton;
