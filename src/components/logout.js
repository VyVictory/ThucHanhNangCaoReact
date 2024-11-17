import React from 'react';
import { useNavigate } from 'react-router-dom';
import userService from '../service/userService';

function Logout() {
    const navigate = useNavigate();
    const handleConfirm = () => {
        userService.logout();
        // navigate('/login');
    };

    const handleCancel = () => {
        navigate('/');
    };

    return (
        <div>
            <h2>bạn chắc chắn muốn đăng xuất không?</h2>
            <div >
                <button onClick={handleConfirm} className="bg-red-400 p-2 mr-2">Xác nhận đăng xuất</button>
                <button onClick={handleCancel} className="bg-blue-400 p-2">Hủy</button>
            </div>
        </div>
    );
}

export default Logout;
