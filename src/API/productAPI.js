import axios from "axios";

const URL = "http://localhost:3005/products";

const getProducts = () => axios.get(URL);

const getProductById = (productId) => axios.get(`${URL}/${productId}`);

const addProduct = (product) => axios.post(URL, product);

const editProduct = (productId, product) =>
	axios.put(`${URL}/${productId}`, product);

const deleteProduct = (productId) => axios.delete(`${URL}/${productId}`);

export { getProducts, getProductById, addProduct, editProduct, deleteProduct };
