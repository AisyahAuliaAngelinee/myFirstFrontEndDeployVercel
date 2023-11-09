import { useParams } from "react-router-dom";

const Detail = () => {
	const { id } = useParams();
	return (
		<>
			<h1>Detail</h1>
			<p>Ini Detail {id}</p>
		</>
	);
};

export default Detail;
