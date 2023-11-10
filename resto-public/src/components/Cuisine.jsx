import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios";

const Cuisine = () => {
	const CUISINE_PUBLIC_SERVER_URL = "http://localhost:3000/pub/cuisine";
	const cuisineApi = axios.create({ baseURL: CUISINE_PUBLIC_SERVER_URL });
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const [cuisine, setCuisine] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPage, setTotalPage] = useState(1);
	const [searchInput, setSearchInput] = useState("");

	// ? NAVIGATION
	const navigate = useNavigate();
	const detailOnClick = (id) => {
		navigate(`detail/${id}`);
	};

	// ? PAGINATION
	const nextPage = () => {
		if (currentPage < totalPage) {
			setCurrentPage(currentPage + 1);
		}
	};

	const prevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	// ? SEARCH
	const searchCuisine = (event) => {
		// console.log(event.target.value, "<<<<<");
		setSearchInput(event.target.value);
	};

	const onSearch = () => {
		// console.log("Cari");
		fetchCuisine();
	};

	// ? FETCH DATA
	async function fetchCuisine() {
		try {
			setIsLoading(true);
			const { data } = await cuisineApi.get(
				`?page=${currentPage}&keyword=${searchInput}`
			);
			// console.log(data, "<<<<<");

			setCuisine(data.result.data);
			setTotalPage(data.result.totalPage);
		} catch (error) {
			console.log(error);
			setError(error);
		} finally {
			setIsLoading(false);
		}
	}

	useEffect(() => {
		fetchCuisine();
	}, [currentPage]);

	if (isLoading) return <p>Loading</p>;
	if (error) return <p>{error.message}</p>;

	return (
		<>
			<section className="cuisine" id="cuisine">
				<input
					type="search"
					placeholder="search cuisine"
					onChange={searchCuisine}
					value={searchInput}
				/>
				<button onClick={onSearch}>Search</button>
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
				<p>Current Page : {currentPage}</p>
				<button className="mx-3 border p-3" onClick={prevPage}>
					Prev Page
				</button>
				<button className="mx-3 border p-3" onClick={nextPage}>
					Next Page
				</button>
			</section>
		</>
	);
};

export default Cuisine;
