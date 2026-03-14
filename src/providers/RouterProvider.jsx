import {BrowserRouter, Route, Routes} from "react-router";
import pages from "../pages/pagesConfig.jsx";
import Notifications from "../components/Notifications/Notifications.jsx";

const RouterProvider = () => {
	return (
		<BrowserRouter>
			<Notifications/>
			<Routes>
				{pages.map(page => <Route path={page.path} element={page.element}/>)}
			</Routes>
		</BrowserRouter>
	)
}

export default RouterProvider