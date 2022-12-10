import * as request from '../ultis';
const LikePost = async (id, type, token) => {
    try {
        const res = await request.authPost(`videos/${id}/${type}`, token);
        return res.data;
    } catch (e) {
        console.log(e);
    }
};
export default LikePost;
