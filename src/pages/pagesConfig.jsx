import TodosPage from "./TodosPage/TodosPage.jsx";
import CreatePage from "./CreatePage/CreatePage.jsx";
import EditPage from "./EditPage/EditPage.jsx";
import NotFoundPage from "./NotFoundPage/NotFoundPage.jsx";
import {Navigate} from "react-router";

const pages = [
	{
		path: "/todos",
		element: <TodosPage/>,
	},
	{
		path: "/todos/new",
		element: <CreatePage/>,
	},
	{
		path: "/todos/:id/edit",
		element: <EditPage/>,
	},
	{
		path: "/notfound",
		element: <NotFoundPage/>
	},
	{
		path: "*",
		element: <Navigate to="/notfound"/>
	}
]
export default pages