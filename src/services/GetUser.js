import * as request from '../ultis';
const SearchProfile = async (nickname, token = '') => {
    try {
        const res = await request.get(`users/@${nickname}`, '', token);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
export default SearchProfile;
