import * as request from '../ultis';
const ForYouVideos = async (type = 'for-you', page = 1, token = '') => {
    try {
        const res = await request.get(`videos?type=${type}&page=${page}`, {}, token);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
export default ForYouVideos;
