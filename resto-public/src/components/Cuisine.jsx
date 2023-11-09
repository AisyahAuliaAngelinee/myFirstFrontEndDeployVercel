import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios";

const Cuisine = () => {
	const CUISINE_PUBLIC_SERVER_URL = "http://localhost:3000/cuisine";
	const cuisineApi = axios.create({ baseURL: CUISINE_PUBLIC_SERVER_URL });
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const [cuisine, setCuisine] = useState([]);

	// ? NAVIGATION
	const navigate = useNavigate();
	const detailOnClick = (id) => {
		navigate(`/detail/${id}`);
	};

	// ? FETCH DATA
	useEffect(() => {
		async function fetchCuisine() {
			try {
				setIsLoading(true);
				const { data } = await cuisineApi.get("/");
				// console.log(data, "<<<<<");

				setCuisine(data);
			} catch (error) {
				console.log(error);
				setError(error);
			} finally {
				setIsLoading(false);
			}
		}

		fetchCuisine();
	}, []);

	if (isLoading) return <p>Loading</p>;
	if (error) return <p>{error.message}</p>;

	return (
		<section className="cuisine" id="cuisine">
			<h3 className="sub-heading">Our Cuisine</h3>
			<div className="box-container">
				{cuisine.map((cus) => (
					<div className="box flex flex-col items-center" key={cus.id}>
						<img src={cus.imgUrl} alt="" />
						<h3>{cus.name}</h3>
						<p flex flex-wrap>
							{cus.description}
						</p>
						<span>Rp. {cus.price}</span>
						<button
							className="text-white px-2.5 py-1 rounded text-sm font-medium bg-gray-800 border-0 border-l hover:bg-[#15803d] dark:hover:text-white"
							onClick={() => detailOnClick(cus.id)}>
							Detail
						</button>
					</div>
				))}
			</div>
		</section>
	);
};

export default Cuisine;
