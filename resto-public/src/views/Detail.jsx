import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
	const { id } = useParams();

	const [data, setData] = useState([]);
	const [isloading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading("Loading");
			setError({ error });
			try {
			} catch (error) {
				console.log(error);
			} finally {
			}
		};
	});
	return (
		<>
			<h1>Detail {id}</h1>
		</>
	);
};

export default Detail;
