import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Form = () => {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState("");
	const [imgUrl, setImgUrl] = useState("");

	const isName = (event) => {
		setName(event.target.value);
	};

	const isDescription = (event) => {
		setDescription(event.target.value);
	};

	// console.log("test");

	const isPrice = (event) => {
		setPrice(event.target.value);
	};

	const isImgUrl = (event) => {
		setImgUrl(event.target.value);
	};

	console.log(imgUrl);

	const createSubmit = async (event) => {
		event.preventDefault();
		const token = localStorage.getItem("token");
		// const form

		try {
			console.log("<<<<<<");
			await axios.post(
				`https://phase2-aio.vercel.app/apis/restaurant-app/cuisines`,
				{
					name,
					description,
					price,
					imgUrl,
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<section class="create">
			<div class="row">
				<div class="image">
					{/* <img src="../image/about-img.svg" alt="" /> */}
				</div>
				<form action="" onSubmit={createSubmit}>
					<h3>Create Cuisine</h3>
					<input
						onChange={isName}
						type="text"
						name="name"
						class="box"
						placeholder="Cuisine Name"
						value={name}
					/>
					<textarea
						onChange={isDescription}
						name="Description"
						id=""
						class="box"
						placeholder="Description"
						value={description}
						cols="30"
						rows="10"></textarea>
					<input
						onChange={isPrice}
						type="text"
						name="price"
						class="box"
						placeholder="Price"
						value={price}
					/>
					<input
						onChange={isImgUrl}
						type="text"
						name="imgUrl"
						class="box"
						placeholder="Image URL"
						value={imgUrl}
					/>
					{/* <input type="file" name="imgFile" id="" class="box" required /> */}
					{/* <Link to={"/apis/restaurant-app/cuisines"}> */}
					<button
						type="submit"
						class="text-white px-2.5 py-1 rounded text-sm font-medium bg-gray-800 border-0 border-l hover:bg-[#15803d] dark:text-gray-400 dark:hover:text-white">
						Create
					</button>
					{/* </Link> */}
				</form>
			</div>
		</section>
	);
};

export default Form;
