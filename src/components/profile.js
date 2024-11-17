import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import userService from '../service/userService';

function Profile() {
    const [userProfile, setUserProfile] = useState(null);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const data = await  userService.profile();
                setUserProfile(data);
            } catch (err) {
                if (err.response && err.response.status === 401) {
                    setError('no login');
                    navigate('/login');
                } else {
                    setError('error get profile.');
                }
            }
        };

        fetchProfile();
    });
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-6">User profile</h1>
            {error && <div className="text-red-500 text-center mb-4">{error}</div>}
            {userProfile ? (
                <div className="max-w-md mx-auto bg-white p-6 rounded shadow-md">
                    <div className="mb-4">
                        <label className="block text-sm font-semibold">Username:</label>
                        <p className="text-gray-700">{userProfile.username}</p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold">Full Name:</label>
                        <p className="text-gray-700">{userProfile.fullname}</p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold">Email:</label>
                        <p className="text-gray-700">{userProfile.email}</p>
                    </div>
                    {/* <div className="mb-4">
                        <label className="block text-sm font-semibold">Role:</label>
                        <p className="text-gray-700">{userProfile.role}</p>
                    </div> */}
                    <div className="mb-4">
                        <label className="block text-sm font-semibold">Sex:</label>
                        <p className="text-gray-700">{userProfile.sex === '1' ? 'Male' : 'Female'}</p>
                    </div>
                </div>
            ) : (
                <div className="text-center">Not Login</div>
            )}
        </div>
    );
}

export default Profile;
