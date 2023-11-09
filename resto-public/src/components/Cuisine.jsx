import { useEffect, useState } from "react";
import axios from "axios";

const Cuisine = ({ detailOnClick }) => {
	const CUISINE_PUBLIC_SERVER_URL = "http://localhost:3000/cuisine";
	const cuisineApi = axios.create({ baseURL: CUISINE_PUBLIC_SERVER_URL });
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const [cuisine, setCuisine] = useState([]);

	// const [cuisine, setCuisine] = useState([
	// 	{
	// 		id: 1,
	// 		name: "Nasi Goreng Seafood",
	// 		description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
	// 		price: 25000,
	// 		imgUrl:
	// 			"https://dcostseafood.id/wp-content/uploads/2017/12/Nasi-Goreng-seafood-2.jpg",
	// 		categoryId: 1,
	// 	},
	// 	{
	// 		id: 2,
	// 		name: "Nasi Goreng Seafood",
	// 		description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
	// 		price: 25000,
	// 		imgUrl:
	// 			"https://dcostseafood.id/wp-content/uploads/2017/12/Nasi-Goreng-seafood-2.jpg",
	// 		categoryId: 1,
	// 	},
	// 	{
	// 		id: 3,
	// 		name: "Nasi Goreng Seafood",
	// 		description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
	// 		price: 25000,
	// 		imgUrl:
	// 			"https://dcostseafood.id/wp-content/uploads/2017/12/Nasi-Goreng-seafood-2.jpg",
	// 		categoryId: 1,
	// 	},
	// 	{
	// 		id: 4,
	// 		name: "Nasi Goreng Seafood",
	// 		description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
	// 		price: 25000,
	// 		imgUrl:
	// 			"https://dcostseafood.id/wp-content/uploads/2017/12/Nasi-Goreng-seafood-2.jpg",
	// 		categoryId: 1,
	// 	},
	// 	{
	// 		id: 5,
	// 		name: "Nasi Goreng Seafood",
	// 		description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
	// 		price: 25000,
	// 		imgUrl:
	// 			"https://dcostseafood.id/wp-content/uploads/2017/12/Nasi-Goreng-seafood-2.jpg",
	// 		categoryId: 1,
	// 	},
	// 	{
	// 		id: 6,
	// 		name: "Nasi Goreng Seafood",
	// 		description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
	// 		price: 25000,
	// 		imgUrl:
	// 			"https://dcostseafood.id/wp-content/uploads/2017/12/Nasi-Goreng-seafood-2.jpg",
	// 		categoryId: 1,
	// 	},
	// ]);

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
							onClick={detailOnClick}>
							Detail
						</button>
					</div>
				))}
			</div>
		</section>
	);
};

export default Cuisine;
