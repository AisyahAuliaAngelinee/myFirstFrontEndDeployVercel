import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import Parent from "../views/Parent";

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
		],
	},
]);

export default router;
