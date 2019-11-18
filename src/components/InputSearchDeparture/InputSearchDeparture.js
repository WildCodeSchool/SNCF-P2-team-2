import React, { useState, useEffect, useRef } from "react";
import "./inputSearch.css";
import axios from "axios";
import Posts from "./Posts/Posts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InputSearchDeparture = ({ globalState, setGlobalState, type }) => {
	const [posts, setPosts] = useState([]);
	const [menuIsDisplayed, setMenuIsDisplay] = useState(false);
	const [displayInputInfo, setDisplayInputInfo] = useState(false);

	const getSearchApiSNCF = (param, tab) => {
		const newGlobalState = { ...globalState };

		if (!param.match("^[a-zA-Z0-9-()/ ]*$")) {
			toast.error(
				"L’Expression que vous avez entrée contient une syntaxe non valide",
				{
					position: toast.POSITION.TOP_CENTER,
				},
			);

			return;
		}
		newGlobalState.inputs[type].name = param;
		setGlobalState(newGlobalState);

		console.log(param);
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
		let coordPlace = "";
		if (stop_area !== undefined) {
			coordPlace = stop_area;
		} else if (administrative_region !== undefined) {
			coordPlace = administrative_region;
		} else if (addresses !== undefined) {
			coordPlace = addresses;
		}
		newGlobalState.inputs[type] = {
			name,
			coordPlace,
		};
		setGlobalState(newGlobalState);
	};

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

	const wrapperRef = useRef(null);
	useOutsideAlerter(wrapperRef);

	return (
		<>
			<ToastContainer />
			<div
				className="form-control-container border border-primary rounded"
				ref={wrapperRef}
			>
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
		</>
	);
};

export default InputSearchDeparture;
