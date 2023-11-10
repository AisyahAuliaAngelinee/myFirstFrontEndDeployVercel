import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import Parent from "../views/Parent";
import MainTable from "../components/MainTable";

const router = createBrowserRouter([
	// {
	// 	path: "/",
	// 	element: <h1>Login Page</h1>,
	// },
	{
		path: "*",
		element: <Parent />,
	},
	{
		element: <Parent />,
		children: [
			{
				path: "/",
				element: <Login />,
			},
			{
				path: "/cuisines",
				element: <MainTable />,
			},
		],
	},
]);

export default router;
