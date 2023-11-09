import { useState } from "react";
import "./App.css";
import Cuisine from "./components/Cuisine";
import Navbar from "./components/Navbar";

function App() {
	return (
		<>
			{/* <!-- HEADER START --> */}
			<Navbar />
			{/* <!-- HEADER END --> */}

			{/* <!-- SEARCH START --> */}
			<form action="" id="search-form">
				<input
					type="search"
					placeholder="search cuisine"
					name=""
					id="search-box"
				/>
				<label for="search-box" class="fas fa-search"></label>
				<i class="fas fa-times" id="close"></i>
			</form>
			{/* <!-- SEARCH END --> */}

			{/* <!-- HOME SECTION START --> */}
			<section className="home" id="home">
				<div className="swiper home-slider">
					<div className="swiper-wrapper wrapper">
						<div className="swiper-slide slide">
							<div className="content">
								<span>Our Special Dish</span>
								<h3>Nasi Goreng Kasablangka</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Provident, quis quaerat explicabo, minima ipsa ea quia
									reiciendis unde eius rem eligendi omnis dolorem autem iusto,
									eos possimus doloremque recusandae debitis!
								</p>
								<a href="" className="btn">
									Detail
								</a>
							</div>
							<div className="image">
								<img
									src="https://dcostseafood.id/wp-content/uploads/2017/12/Nasi-Goreng-seafood-2.jpg"
									alt=""
								/>
							</div>
						</div>
						<div className="swiper-slide slide">
							<div className="content">
								<span>Our Special Dish</span>
								<h3>Burger Goreng Ikan Asin</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Provident, quis quaerat explicabo, minima ipsa ea quia
									reiciendis unde eius rem eligendi omnis dolorem autem iusto,
									eos possimus doloremque recusandae debitis!
								</p>
								<a href="" className="btn">
									Detail
								</a>
							</div>
							<div className="image">
								<img
									src="https://dcostseafood.id/wp-content/uploads/2017/12/Nasi-Goreng-seafood-2.jpg"
									alt=""
								/>
							</div>
						</div>
						<div className="swiper-slide slide">
							<div className="content">
								<span>Our Special Dish</span>
								<h3>Ayam Panggang Bakar</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Provident, quis quaerat explicabo, minima ipsa ea quia
									reiciendis unde eius rem eligendi omnis dolorem autem iusto,
									eos possimus doloremque recusandae debitis!
								</p>
								<a href="" className="btn">
									Detail
								</a>
							</div>
							<div className="image">
								<img
									src="https://dcostseafood.id/wp-content/uploads/2017/12/Nasi-Goreng-seafood-2.jpg"
									alt=""
								/>
							</div>
						</div>
					</div>
					<div className="swiper-pagination" />
				</div>
			</section>

			{/* <!-- HOME SECTION END --> */}

			{/* <!-- CUISINE SECTION START --> */}
			<Cuisine />
			{/* <!-- CUISINE SECTION END --> */}

			{/* <!-- DETAIL CUISINE START --> */}
			<section className="detail">
				{showDetail && (
					<div className="detail-cuisine">
						<div className="detail-image">
							<img
								src="https://dcostseafood.id/wp-content/uploads/2017/12/Nasi-Goreng-seafood-2.jpg"
								alt=""
							/>
						</div>
						<div className="detail-description">
							<span className="category">BERAT</span>
							<h3>Nasi Goreng Seafood</h3>
							<span className="price">Rp. 198.000</span>
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Praesentium aperiam minus cumque aut reprehenderit dolore
								obcaecati non quo, cum eius magnam ducimus dolores itaque? Alias
								odio repellat iste dolores iure!
							</p>
							<button className="text-white px-4 py-1 text-sm font-medium bg-gray-800 border-0 border-l hover:bg-[#16a34a] dark:text-gray-400 dark:hover:text-white">
								Edit
							</button>
							<button className="text-white px-2 py-1 text-sm font-medium bg-gray-800 border-0 border-l hover:bg-[#dc2626] dark:text-gray-400 dark:hover:text-white">
								Delete
							</button>
						</div>
					</div>
				)}
			</section>
			{/* <!-- DETAIL CUISINE END --> */}

			{/* <!-- FOOTER START --> */}
			<footer>
				<div className="w-full bg-Gray-300 p-4 text-center text-neutral-700">
					{" "}
					© 2023 Copyright:
					<a className="text-neutral-800 dark:text-black" href="">
						{" "}
						Aisyah Aulia Angelinee
					</a>
				</div>
			</footer>
			{/* <!-- FOOTER END --> */}
		</>
	);
}

export default App;