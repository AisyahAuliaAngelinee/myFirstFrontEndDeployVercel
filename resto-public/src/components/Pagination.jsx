import { useState } from "react";
import axios from "axios";

const Pagination = () => {
	// Data from Server
	const CUISINE_PUBLIC_SERVER_URL = "http://localhost:3000/cuisine";
	const cuisineApi = axios.create({ baseURL: CUISINE_PUBLIC_SERVER_URL });

	// Pagination

	return (
		<>
			<section class="pagination flex place-content-center">
				<div class="flex flex-col w-[7rem] h-20 place-content-center">
					<span class="text-sm text-black">
						Page <span class="font-semibold text-black">1</span>
					</span>
					<div class="inline-flex mt-2 xs:mt-0">
						<button
							class="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-[#A6CF98] dark:text-gray-400 dark:hover:text-white"
							onClick={prePage}>
							Prev
						</button>
						<button
							class="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-l rounded-r hover:bg-[#A6CF98] dark:text-gray-400 dark:hover:text-white"
							onClick={nextPage}>
							Next
						</button>
					</div>
				</div>
			</section>
		</>
	);
};

export default Pagination;
