import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import Parent from "../views/Parent";
import Maintable from "../components/MainTable";

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
				path: "/apis/restaurant-app/cuisines",
				element: <Maintable />,
			},
		],
	},
]);

export default router;
