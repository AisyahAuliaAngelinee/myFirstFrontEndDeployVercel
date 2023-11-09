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

			{/* <!-- CUISINE SECTION START --> */}
			<Cuisine />
			{/* <!-- CUISINE SECTION END --> */}
		</>
	);
}

export default App;
