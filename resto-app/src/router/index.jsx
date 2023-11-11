import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import Parent from "../views/Parent";
import Maintable from "../components/MainTable";
import Form from "../components/Form";

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
			{
				path: "/apis/restaurant-app/cuisines/create",
				element: <Form />,
			},
		],
	},
]);

export default router;
