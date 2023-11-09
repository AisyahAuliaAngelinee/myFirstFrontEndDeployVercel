import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Parent from "../views/Parent";
import Home from "../views/Home";

const router = createBrowserRouter([
	{
		element: <Parent />,
		children: [
			{
				path: "/pub",
				element: <Home />,
			},
		],
	},
]);

export default router;
