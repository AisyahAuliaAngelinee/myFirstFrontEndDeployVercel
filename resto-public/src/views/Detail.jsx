import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Detail = () => {
	const { id } = useParams();
	// console.log(id, "<<<<<<<");

	const [data, setData] = useState({});
	const [Loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	useEffect(() => {
		async function fetchData() {
			try {
				setLoading(true);
				const { data } = await axios.get(
					`http://localhost:3000/pub/cuisine/${id}`
				);
				// console.log(data, "<<<<<<<<<");

				setData(data.idCus);
			} catch (error) {
				console.log(error);
				setError(error);
			} finally {
				setLoading(false);
			}
		}

		fetchData();
	}, [id]);

	if (Loading) return <p>Loading</p>;
	if (error) return <p>{error.message}</p>;

	return (
		<>
			<section class="detail">
				<div class="detail-cuisine">
					<div class="detail-image">
						<img src={data.imgUrl} alt="" />
					</div>
					<div class="detail-description">
						<h3>{data.name}</h3>
						<span class="price">Rp. {data.price}</span>
						<p>{data.description}</p>
						<button class="text-white px-4 py-1 rounded text-sm font-medium bg-gray-800 border-0 border-l hover:bg-[#16a34a] dark:text-gray-400 dark:hover:text-white">
							Back
						</button>
					</div>
				</div>
			</section>
		</>
	);
};

export default Detail;
