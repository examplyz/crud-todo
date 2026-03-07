import {BrowserRouter, Route, Routes} from "react-router";
import pages from "../pages/pagesConfig.jsx";

const RouterProvider = () => {
	return (
		<BrowserRouter>
			<Routes>
				{pages.map(page => <Route path={page.path} element={page.element}/>)}
			</Routes>
		</BrowserRouter>
	)
}

export default RouterProvider