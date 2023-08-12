import { useEffect, useState } from "react";
import { getProducts } from "../API/productAPI";

export const useGetData = (func) => {
	const [products, setProducts] = useState(null);

	useEffect(() => {
		const fetchProducts = async () => {
			let response = await func();
			setProducts(response.data);
		};

		fetchProducts();
	}, []);

	return [products, setProducts];
};
