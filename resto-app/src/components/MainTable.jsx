import { useState } from "react";
import "../App.css";
import axios from "axios";

const MainTable = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [cuisineData, setCuisineData] = useState([]);

	// ?FETCH ALL DATA FROM MAIN TABLE
	async function fetchCuisineData() {
		try {
			setLoading(true);
			const { data } = await axios.get();
		} catch (error) {
			console.log(error);
			setError(error);
		} finally {
		}
	}
	return (
		<section className="main-list">
			<h3 className="sub-heading">List Cuisine</h3>
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
								categoryId
							</th>
							<th scope="col" className="px-6 py-3">
								authorId
							</th>
							<th scope="col" className="px-6 py-3">
								createdAt
							</th>
							<th scope="col" className="px-6 py-3">
								updatedAt
							</th>
							<th scope="col" className="px-6 py-3">
								Action
							</th>
						</tr>
					</thead>
					<tbody>
						<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
							<th
								scope="row"
								className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
								Nasi Goreng Ayam Utuh
							</th>
							<td className="px-6 py-4">Lorem ipsum, dolor sit amet</td>
							<td className="px-6 py-4">Rp875.000</td>
							<td className="px-6 py-4">ayam-panggang-goreng-tepung.</td>
							<td className="px-6 py-4">1</td>
							<td className="px-6 py-4">1</td>
							<td className="px-6 py-4">08 Nov 2023</td>
							<td className="px-6 py-4">08 Nov 2023</td>
							<td className="px-6 py-4 text-right">
								<a
									href="#"
									className="font-medium text-green-600 dark:text-blue-500 hover:underline">
									Add
								</a>
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
					</tbody>
				</table>
			</div>
		</section>
	);
};

export default MainTable;
