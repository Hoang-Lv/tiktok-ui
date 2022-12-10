import * as request from '../ultis';
const GetaVideo = async (page, token) => {
    try {
        const res = await request.get(`/videos/${page}`, '', token);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
export default GetaVideo;
