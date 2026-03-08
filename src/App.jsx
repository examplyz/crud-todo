import RouterProvider from "./providers/RouterProvider.jsx";
import StoreProvider from "./providers/StoreProvider.jsx";

function App() {
	
	return (
		<StoreProvider>
			<RouterProvider/>
		</StoreProvider>
	)
}

export default App
