import { useState, useEffect } from 'react';
import productService from '../service/productService';
function Products() {
    const [productList, setProductList] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await productService.Products();
                setProductList(data);
            } catch (err) {
                console.log('err')
            }
        };
        fetchProducts();
    }, []);
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">số thứ tự</th>
                        <th scope="col">tên</th>
                        <th scope="col">giá tiền</th>
                        {/* <th scope="col">mô tả</th>
                        <th scope="col">hình ảnh</th> */}
                        <th scope='col'>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {productList.map((product, index) => (
                        <tr key={product.masp} >
                            <th scope="row">{index + 1}</th>
                            <td>{product.ten}</td>
                            <td>{product.gia.toLocaleString()} VND</td>
                            {/* <td>{product.mota}</td>
                            <td>
                                <img src={product.hinhanh} alt={product.ten} style={{ width: '50px' }} />
                            </td> */}
                            <td>
                                <a href={`/product/`+ product.masp}>
                                    <button className='bg-green-300' >xem chi tiết</button>
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Products;
