import * as request from '../ultis';
const SuggestedAcc = async (page = 1, per_page = 12) => {
    try {
        const res = await request.get(`users/suggested`, {
            params: {
                page,
                per_page,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
export default SuggestedAcc;
