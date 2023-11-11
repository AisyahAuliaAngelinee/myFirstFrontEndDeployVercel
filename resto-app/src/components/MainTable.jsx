import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
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
			console.log(response, "<<<<<<<<");

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
			<section className="main-list">
				<h3 className="sub-heading">List Cuisine</h3>
				<Link to={"/apis/restaurant-app/cuisines/create"}>
					<button>Create</button>
				</Link>
				<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
					<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
						<thead className="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
							<tr>
								<th scope="col" className="px-6 py-3">
									Cuisine Name
								</th>
								<th scope="col" className="px-6 py-3">
									Description
								</th>
								<th scope="col" className="px-6 py-3">
									Price
								</th>
								<th scope="col" className="px-6 py-3">
									imgUrl
								</th>
								<th scope="col" className="px-6 py-3">
									Action
								</th>
							</tr>
						</thead>
						<tbody>
							{fetchCuisine.map((fc) => (
								<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
									<th
										scope="row"
										className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
										{fc.name}
									</th>
									<td className="px-6 py-4">{fc.description}</td>
									<td className="px-6 py-4">Rp {fc.price}</td>
									<td className="px-6 py-4">{fc.imgUrl}</td>
									<td className="px-6 py-4 text-right">
										<a
											href="#"
											className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
											Edit
										</a>
										<a
											href="#"
											className="font-medium text-red-600 dark:text-blue-500 hover:underline">
											Delete
										</a>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</section>
		</>
	);
};

export default Maintable;
