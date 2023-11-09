import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
	const { id } = useParams();
	// console.log(id, "<<<<<<<<<<");

	// const CUISINE_PUBLIC_SERVER_URL = "http://localhost:3000/cuisine";
	// const cuisineApi = axios.get(`http://localhost:3000/cuisine/${id}`);
	// const [isLoading, setIsLoading] = useState(true);
	// const [error, setError] = useState(null);
	// const [cuisine, setCuisine] = useState([]);

	// // ? FETCH DATA
	// useEffect(() => {
	// 	async function fetchDetailCuisine() {
	// 		try {
	// 			setIsLoading(true);
	// 			const { data } = await cuisineApi.get("/");
	// 			// console.log(data, "<<<<<<<");
	// 			setCuisine(data);
	// 		} catch (error) {
	// 			console.log(error);
	// 			setError(error);
	// 		} finally {
	// 			setIsLoading(false);
	// 		}
	// 	}

	// 	fetchDetailCuisine();
	// }, []);

	return (
		<>
			<h1>Detail</h1>
			<p>Ini Detail {id}</p>
		</>
	);
};

export default Detail;
