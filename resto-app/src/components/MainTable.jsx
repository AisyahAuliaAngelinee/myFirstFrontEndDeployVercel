import { useEffect, useState } from "react";
import "../App.css";
import React from "react";
import axios from "axios";

const MainTable = () => {
	const CUISINE_ADMIN_SERVER_URL = "https://server.tabletime.online/cuisine";
	const dataCuisineApi = axios.create({ baseURL: CUISINE_ADMIN_SERVER_URL });
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [cuisineData, setCuisineData] = useState([]);

	// ?FETCH ALL DATA FROM MAIN TABLE
	async function fetchCuisineData() {
		try {
			setLoading(true);
			const { data } = await dataCuisineApi.get();
			console.log(data, "<<<<<");

			setCuisineData(data.result.data);
		} catch (error) {
			console.log(error.message);
			setError(error);
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		fetchCuisineData();
	}, []);

	if (loading) return <p>Loading</p>;
	if (error) return <p>{error.message}</p>;

	return (
		<>
			<h1>Masuk Table</h1>
			<h1>{cuisineData.name}</h1>
		</>
	);
};

export default MainTable;