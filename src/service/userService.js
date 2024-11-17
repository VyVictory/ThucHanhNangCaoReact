import axios from "axios";
const login = async (formData) => {
    try {
        const response = await axios.post('http://localhost:3000/api/auth/login', formData);
        if (response.data.token) {
            console.log('Login successful:', response.data.username);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('username', response.data.username);
            return true;
        } else {
            console.error('Login failed:', response.data.message || response.data.mess);
            return false;
        }
    } catch (error) {
        console.error('Error login:', error);
        return false;
    }
};
const logout = async () => {
    const token = localStorage.getItem('token');
    try {
        await axios.post('http://localhost:3000/api/auth/logout', {
            withCredentials: true,
            headers: {
                'Authorization': `${token}`
            }
        });
        window.location.href = '/login';
    } catch (error) {
        console.error('Error during logout:', error);
    }
    localStorage.removeItem('token');
    localStorage.removeItem('username');
}
const profile = async () => {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');

    try {
        if (token && username) {
            const profileResponse = await axios.get(`http://localhost:3000/api/users/profile/${username}`, {
                headers: {
                    'Authorization': `${token}`
                }
            });
            return profileResponse.data;
        } else {
            console.log('Login failed: Token or username not found.');
        }
    } catch (error) {
        console.error('Error fetching profile:', error.response ? error.response.data : error.message);
        console.log(username, token)
    }
};

export default { login, logout, profile }