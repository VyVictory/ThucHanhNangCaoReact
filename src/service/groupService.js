import axios from "axios";

const Groups = async () => {
    try {
        const response = await axios.get('http://localhost:3000/api/groups');
        if (response.data) {
            return response.data;
        } else {
            throw new Error('Failed get groups no dta');
        }
    } catch (error) {
        console.error('Error get groups:', error);
        throw error;
    }
};

export default { Groups };
