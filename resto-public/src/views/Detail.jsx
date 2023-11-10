import { useParams } from "react-router-dom";

const Detail = () => {
	const { name } = useParams();
	console.log(name, "<<<<<<<");

	// const [data, setData] = useState([]);
	// const [isLoading, setIsLoading] = useState(false);
	// const [error, setError] = useState("");

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		setIsLoading("Loading");
	// 		setError({ error });
	// 		try {
	// 			setIsLoading(true)
	// 			const { data } = await cuisineApi.get(`detail/${name}`)
	// 			// console.log(data, "<<<<<<");
				
	// 			setData(data);
	// 		} catch (error) {
	// 			console.log(error);
	// 			setError(error);
	// 		} finally {
	// 			setIsLoading(false);
	// 		}
	// 	};
	// 	fetchData();
	// });

	// if (isLoading) return <p>Loading</p>;
	// if (error) return <p>{error.message}</p>;

	return (
		<>
			<h1>Detail {name}</h1>
			{/* <section class="detail">
				<div class="detail-cuisine">
					<div class="detail-image">
						<img src="https://dcostseafood.id/wp-content/uploads/2017/12/Nasi-Goreng-seafood-2.jpg" alt="" />
					</div>
					<div class="detail-description"> */}
						{/* <span class="category">HEAVY MEAL</span> */}
						{/* <h3>Nasi Goreng Kasablangka</h3>
						<span class="price">Rp. 198.000</span>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Praesentium aperiam minus cumque aut reprehenderit dolore
							obcaecati non quo, cum eius magnam ducimus dolores itaque? Alias
							odio repellat iste dolores iure!
						</p>
						<button class="text-white px-4 py-1 rounded text-sm font-medium bg-gray-800 border-0 border-l hover:bg-[#16a34a] dark:text-gray-400 dark:hover:text-white">
							Edit
						</button>
						<button class="text-white px-2 py-1 rounded text-sm font-medium bg-gray-800 border-0 border-l hover:bg-[#dc2626] dark:text-gray-400 dark:hover:text-white">
							Delete
						</button>
					</div>
				</div>
			</section> */}
		</>
	);
};

export default Detail;
