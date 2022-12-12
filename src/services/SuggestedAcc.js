import * as request from '../ultis';
const SuggestedAcc = async (page = 1, per_page = 20, token) => {
    try {
        const res = await request.get(`users/suggested?page=${page}&per_page=${per_page}`, {}, token);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
export default SuggestedAcc;
