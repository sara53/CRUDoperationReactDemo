import "./App.css";
import MyNavbar from "./components/MyNavbar";
import { Route, Routes } from "react-router-dom";
import { Home, NotFound, ProductDetails, ProductForm, Products } from "./pages";

function App() {
	return (
		<>
			<MyNavbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='products' element={<Products />} />
				<Route path='products/:id' element={<ProductDetails />} />
				<Route path='products/:id/edit' element={<ProductForm />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</>
	);
}

export default App;
