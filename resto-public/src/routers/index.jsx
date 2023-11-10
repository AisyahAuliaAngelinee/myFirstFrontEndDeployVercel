import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Parent from "../views/Parent";
import Home from "../views/Home";
import Detail from "../views/Detail";

const router = createBrowserRouter([
	{
		path: "*",
		element: <Parent />,
	},
	{
		element: <Parent />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/detail/:name",
				element: <Detail />,
			},
		],
	},
]);

export default router;
