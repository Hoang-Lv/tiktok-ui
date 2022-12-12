import * as request from '../ultis';
const SearchUsers = async (q, type = 'less', token) => {
    try {
        const res = await request.get(`users/search?q=${q}&type=${type}`, {}, token);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
export default SearchUsers;
