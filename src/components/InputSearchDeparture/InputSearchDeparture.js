import React, { useState, useEffect, useRef } from "react";
import "./inputSearch.css";
import axios from "axios";
import Posts from "./Posts/Posts";

const InputSearchDeparture = ({ globalState, setGlobalState, type }) => {
	const [posts, setPosts] = useState([]);
	const [menuIsDisplayed, setMenuIsDisplay] = useState(false);
	const [displayInputInfo, setDisplayInputInfo] = useState(false);
	const [inputError, setInputError] = useState("");
	//   const [coord, setCoord] = useState(null);
	//   const [getR, setGetR] = useState([]);

	const getSearchApiSNCF = (param, tab) => {
		const newGlobalState = { ...globalState };

		if (!param.match("^[a-zA-Z ]*$")) {
			return;
		}

		console.log("ezs", type);
		newGlobalState.inputs[type].name = param;
		setGlobalState(newGlobalState);
		if (param.length < 3) {
			setPosts([]);
			return false;
		}
		if (param.length > 3) {
			axios
				.get(`https://api.sncf.com/v1/coverage/fr-idf/places?q=${param}`, {
					headers: {
						Authorization:
							"Basic " + btoa("55ae775f-ea52-4a11-b7ec-39262176315e"),
					},
				})
				.then((result) => {
					setPosts(result.data.places);
					setMenuIsDisplay(true);
				})
				.catch((error) => error.response);
		}
	};

	const handleClickPlace = (place) => {
		const newGlobalState = { ...globalState };
		const name = place.name;
		const stop_area =
			place.stop_area &&
			place.stop_area.coord &&
			place.stop_area.coord.lon + ";" + place.stop_area.coord.lat;
		const administrative_region =
			place.administrative_region && place.administrative_region.id;
		const addresses = place.address && place.address.id;

		newGlobalState.inputs[type] = {
			name,
			stop_area,
			administrative_region,
			addresses,
		};
		setGlobalState(newGlobalState);
	};

	//   const handleClickPlace = place => {
	//     if (place) setSaveInput(place.name);
	//     const stop_area = place.stop_area
	//       ? setCoord(place.stop_area.coord.lon + ";" + place.stop_area.coord.lat)
	//       : place;

	//     const administrative_region = place.administrative_region
	//       ? setCoord(place.administrative_region.id)
	//       : place;

	//     const addresses = place.address ? setCoord(place.address.id) : place;

	//     setPosts([]);
	//   };

	function useOutsideAlerter(ref) {
		function handleClickOutside(event) {
			if (ref.current && !ref.current.contains(event.target)) {
				setMenuIsDisplay(false);
			}
		}

		useEffect(() => {
			document.addEventListener("mousedown", handleClickOutside);
			return () => {
				document.removeEventListener("mousedown", handleClickOutside);
			};
		});
	}

	// const handleSubmit = (e) => {
	// 	e.preventDefault();

	// 	axios
	// 		.get(
	// 			`
	// 			https://api.sncf.com/v1/coverage/sncf/journeys?from=${coord}&to=2.2922926%3B48.8583736&`,
	// 			{
	// 				headers: {
	// 					Authorization:
	// 						"Basic " + btoa("dabb1e17-6d71-4347-ae82-5bec51cdb63f"),
	// 				},
	// 			},
	// 		)
	// 		.then((res) => {
	// 			console.log(res.data.journeys);
	// 			setGetR(res.data.journeys);
	// 		})
	// 		.catch((err) => console.log(err.message));
	// };

	const wrapperRef = useRef(null);
	useOutsideAlerter(wrapperRef);

	return (
		<>
			<div
				className="form-control-container border border-primary rounded"
				ref={wrapperRef}
			>
				{/* {coord} */}
				<input
					type="text"
					className="form-control "
					placeholder="Gare, Station, Lieu, Adresse"
					onChange={(e) => getSearchApiSNCF(e.target.value, [])}
					value={globalState && globalState.inputs[type].name}
				/>

				{menuIsDisplayed && (
					<Posts
						posts={posts}
						handleClickPlaceAndResetPosts={(place) => {
							handleClickPlace(place);
							setPosts([]);
						}}
						setDisplayInputInfo={setDisplayInputInfo}
						displayInputInfo={displayInputInfo}
					/>
				)}
			</div>
			<div>
				{/* {getR &&
          getR.map((g, index) => (
            <div key={index}>
              {g.arrival_date_time} - {g.distances.walking} m
            </div>
          ))} */}
			</div>
		</>
	);
};

export default InputSearchDeparture;
