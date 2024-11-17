import axios from "axios";

const Products = async () => {
    try {
        const response = await axios.get('http://localhost:3000/api/products');
        if (response.data) {
            return response.data;
        } else {
            throw new Error('Failed get products no data');
        }
    } catch (error) {
        console.error('Error get products:', error);
        throw error;
    }
};

const DetailProduct = async (idproduct) => {
    try {
        const response = await axios.get(`http://localhost:3000/api/products/${idproduct}`);
        if (response.data) {
            return response.data;
        } else {
            throw new Error('Failed get product no data');
        }
    } catch (error) {
        console.error('Error get product details:', error);
        throw error;
    }
};

export default { Products, DetailProduct };
