import React, { useState } from "react";
import "./inputSearch.css";
import axios from "axios";

const InputSearchDeparture = () => {
	let [posts, setPosts] = useState([]);
	let [saveInput, setSaveInput] = useState("");

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
				.then((result) => setPosts(result.data.places))
				.catch((error) => error.response);
		}
	};

	return (
		<div className="form-control-container col-sm-12 col-md-6">
			<input
				type="text"
				className="form-control "
				placeholder="Gare, Station, Lieu, Adresse"
				onChange={(e) => getSearchApiSNCF(e.target.value, [])}
				value={saveInput || ""}
			/>
			<div
				className="border rounded mt-3 position-absolute w-100 bg-white"
				style={{
					display: posts.length ? "block" : "none",
				}}
			>
				{posts.length > 0 ? (
					posts.map((p) => {
						return (
							<div
								key={p.id}
								className="p-2 border-bottom text-wrap hover-color-sncf"
								onClick={() => setSaveInput(p.name)}
							>
								{p.name}
							</div>
						);
					})
				) : (
					<div></div>
				)}
			</div>
		</div>
	);
};

export default InputSearchDeparture;
