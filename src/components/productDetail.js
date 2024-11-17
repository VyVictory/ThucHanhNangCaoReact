import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // To extract the product ID from the URL
import productService from '../service/productService';

function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState();
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data = await productService.DetailProduct(id);
                setProduct(data);
            } catch (err) {
                console.log('err')
            }
        };
        fetchProduct();
    }, []);
    return (
        <div>
            <h2>Chi Tiết Sản Phẩm</h2>
            {product && (
                <form>
                    <div className="form-group">
                        <label>mã sản phẩm:</label>
                        <input
                            type="text"
                            value={product.masp}
                            className="form-control border"
                            readOnly
                        />
                    </div>
                    <div className="form-group">
                        <label>tên sản phẩm:</label>
                        <input
                            type="text"
                            value={product.ten}
                            className="form-control border"
                            readOnly
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="productPrice">Giá tiền</label>
                        <input
                            type="text"
                            value={`${product.gia.toLocaleString()} VND`}
                            className="form-control border"
                            readOnly
                        />
                    </div>
                    <div className="form-group">
                        <label>nhóm</label>
                        <input
                         type="text"
                            value={product.tennhom}
                            className="form-control border"
                            rows="4"
                            readOnly
                        />
                    </div>
                    <div className="form-group">
                        <label>mô tả</label>
                        <textarea
                            value={product.mota}
                            className="form-control border"
                            rows="4"
                            readOnly
                        />
                    </div>

                    <div className="form-group">
                        Hình ảnh sản phẩm:
                        <img
                            src={product.hinhanh}
                            alt={product.ten}
                            style={{ maxWidth: '200px' }}
                        />
                    </div>
                </form>
            )}
        </div>
    );
}

export default ProductDetail;
