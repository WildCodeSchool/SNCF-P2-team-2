import React, { useState, useEffect, useRef } from "react";
import "./inputSearch.css";
import axios from "axios";
import Posts from "./Posts/Posts";

const InputSearchDeparture = () => {
	let [posts, setPosts] = useState([]);
	let [saveInput, setSaveInput] = useState("");
	let [menuIsDisplayed, setMenuIsDisplay] = useState(false);
	let [displayInputInfo, setDisplayInputInfo] = useState(false);

	const getSearchApiSNCF = (param, tab) => {
		setSaveInput(param);
		if (param < 3) {
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
		if (place) setSaveInput(place.name);
		setPosts([]);
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
		<div className="form-control-container col-sm-12 col-md-6" ref={wrapperRef}>
			<input
				type="text"
				className="form-control "
				placeholder="Gare, Station, Lieu, Adresse"
				onChange={(e) => getSearchApiSNCF(e.target.value, [])}
				value={saveInput}
			/>
			{menuIsDisplayed && (
				<Posts
					posts={posts}
					handleClickPlace={handleClickPlace}
					setDisplayInputInfo={setDisplayInputInfo}
					displayInputInfo={displayInputInfo}
				/>
			)}
		</div>
	);
};

export default InputSearchDeparture;
