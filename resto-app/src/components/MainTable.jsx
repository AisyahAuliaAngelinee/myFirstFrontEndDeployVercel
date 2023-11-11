import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Maintable = () => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [fetchCuisine, setFetchCuisine] = useState([]);

	// ?FETCH DATA
	async function fetchDataCuisine() {
		const token = localStorage.getItem("token");

		try {
			setLoading(false);
			const response = await axios.get(
				`https://phase2-aio.vercel.app/apis/restaurant-app/cuisines`,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			// console.log(response, "<<<<<<<<");

			setFetchCuisine(response.data.data);
		} catch (error) {
			console.log(error.message);
			setError(error);
		} finally {
			setLoading(true);
		}
	}

	useEffect(() => {
		fetchDataCuisine();
	}, []);

	return (
		<>
			<h1>Main Table</h1>
		</>
	);
};

export default Maintable;
