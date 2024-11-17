import { useState, useEffect } from 'react';
import groupService from '../service/groupService';

function Group() {
    const [groupList, setGroupList] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await groupService.Groups();
                setGroupList(data);
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
                        <th scope="col">id nhóm</th>
                        <th scope="col">tên nhóm</th>
                        {/* <th scope='col'>Thao tác</th> */}
                    </tr>
                </thead>
                <tbody>
                    {groupList.map((group, index) => (
                        <tr key={group.idnhom} >
                            <th scope="row">{index + 1}</th>
                            <td>{group.idnhom}</td>
                            <td>{group.ten}</td>
                            {/* <td>
                                <a href={`/product/`+ product.masp}>
                                    <button className='bg-green-300' >xem chi tiết</button>
                                </a>
                            </td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Group;
